// Helper function to parse bold text (**text**)
function parseBoldText(text) {
  const segments = [];
  const regex = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match;
  
  while ((match = regex.exec(text)) !== null) {
    // Add text before the bold part
    if (match.index > lastIndex) {
      segments.push({
        text: text.substring(lastIndex, match.index),
        bold: false
      });
    }
    
    // Add the bold text
    segments.push({
      text: match[1],
      bold: true
    });
    
    lastIndex = regex.lastIndex;
  }
  
  // Add remaining text after last match
  if (lastIndex < text.length) {
    segments.push({
      text: text.substring(lastIndex),
      bold: false
    });
  }
  
  // If no matches, return the whole text as non-bold
  if (segments.length === 0) {
    segments.push({
      text: text,
      bold: false
    });
  }
  
  return segments;
}

export function parseBlogPosts(fileContent) {
  // Split by the separator
  const posts = fileContent.split('—————————').filter(section => section.trim());
  
  return posts.map((post, index) => {
    const lines = post.trim().split('\n');
    
    // Extract title
    const titleLine = lines.find(line => line.startsWith('Title:'));
    const title = titleLine ? titleLine.replace('Title:', '').trim() : '';
    
    // Extract subtitle
    const subtitleLine = lines.find(line => line.startsWith('Subtitle:'));
    const subtitle = subtitleLine ? subtitleLine.replace('Subtitle:', '').trim() : '';
    
    // Extract content - everything after "Content:"
    const contentStartIndex = lines.findIndex(line => line.startsWith('Content:'));
    if (contentStartIndex === -1) return null;
    
    // Get the first content line (after "Content:")
    const firstContentLine = lines[contentStartIndex].replace('Content:', '').trim();
    
    // Get remaining lines after the content line
    const remainingLines = lines.slice(contentStartIndex + 1);
    
    // Build content blocks (paragraphs, lists, etc.)
    const contentBlocks = [];
    
    // Add first paragraph if exists
    if (firstContentLine) {
      contentBlocks.push({ type: 'paragraph', content: parseBoldText(firstContentLine) });
    }
    
    // Process remaining lines
    let currentParagraph = '';
    let currentList = null;
    
    for (let i = 0; i < remainingLines.length; i++) {
      const line = remainingLines[i];
      const trimmedLine = line.trim();
      
      // Check if it's a numbered list item (1., 2., 3., etc.)
      const numberedMatch = trimmedLine.match(/^(\d+)\.\s+(.+)/);
      // Check if it's a lettered list item (a., b., c., etc.)
      const letteredMatch = trimmedLine.match(/^([a-z])\.\s+(.+)/);
      // Check if it's a bullet point (* )
      const bulletMatch = trimmedLine.match(/^\*\s+(.+)/);
      
      if (numberedMatch) {
        // Save current paragraph if any
        if (currentParagraph.trim()) {
          contentBlocks.push({ type: 'paragraph', content: parseBoldText(currentParagraph.trim()) });
          currentParagraph = '';
        }
        
        // Start or continue numbered list
        if (!currentList || currentList.type !== 'ordered-numbered') {
          if (currentList) contentBlocks.push(currentList);
          currentList = { type: 'ordered-numbered', items: [] };
        }
        currentList.items.push({ content: parseBoldText(numberedMatch[2]), subItems: [] });
        
      } else if (letteredMatch) {
        // This is a sub-item of the previous numbered item
        if (currentList && currentList.type === 'ordered-numbered' && currentList.items.length > 0) {
          currentList.items[currentList.items.length - 1].subItems.push(parseBoldText(letteredMatch[2]));
        }
        
      } else if (bulletMatch) {
        // Save current paragraph if any
        if (currentParagraph.trim()) {
          contentBlocks.push({ type: 'paragraph', content: parseBoldText(currentParagraph.trim()) });
          currentParagraph = '';
        }
        
        // Start or continue bullet list
        if (!currentList || currentList.type !== 'unordered') {
          if (currentList) contentBlocks.push(currentList);
          currentList = { type: 'unordered', items: [] };
        }
        currentList.items.push(parseBoldText(bulletMatch[1]));
        
      } else if (trimmedLine === '') {
        // Empty line - look ahead to see if we should close the list
        // Find the next non-empty line
        let nextNonEmptyLine = '';
        for (let j = i + 1; j < remainingLines.length; j++) {
          const nextLine = remainingLines[j].trim();
          if (nextLine !== '') {
            nextNonEmptyLine = nextLine;
            break;
          }
        }
        
        // Check if next line continues the same list type
        const nextIsNumbered = nextNonEmptyLine.match(/^(\d+)\.\s+(.+)/);
        const nextIsLettered = nextNonEmptyLine.match(/^([a-z])\.\s+(.+)/);
        const nextIsBullet = nextNonEmptyLine.match(/^\*\s+(.+)/);
        
        // Only close the list if the next line is NOT the same type
        const shouldCloseNumberedList = currentList?.type === 'ordered-numbered' && !nextIsNumbered && !nextIsLettered;
        const shouldCloseBulletList = currentList?.type === 'unordered' && !nextIsBullet;
        
        if (shouldCloseNumberedList || shouldCloseBulletList) {
          if (currentList) {
            contentBlocks.push(currentList);
            currentList = null;
          }
        }
        
        // Close paragraph if exists
        if (currentParagraph.trim()) {
          contentBlocks.push({ type: 'paragraph', content: parseBoldText(currentParagraph.trim()) });
          currentParagraph = '';
        }
        
      } else {
        // Regular text - add to current paragraph
        if (currentList) {
          contentBlocks.push(currentList);
          currentList = null;
        }
        currentParagraph += (currentParagraph ? ' ' : '') + trimmedLine;
      }
    }
    
    // Add any remaining content
    if (currentList) {
      contentBlocks.push(currentList);
    }
    if (currentParagraph.trim()) {
      contentBlocks.push({ type: 'paragraph', content: parseBoldText(currentParagraph.trim()) });
    }
    
    return {
      id: index,
      title,
      subtitle,
      contentBlocks
    };
  }).filter(post => post !== null);
}

