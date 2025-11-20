export function parseBlogPosts(fileContent) {
  // Split by the separator
  const posts = fileContent.split('—————————').filter(section => section.trim());
  
  return posts.map((post, index) => {
    const lines = post.trim().split('\n');
    
    // Extract title
    const titleLine = lines.find(line => line.startsWith('Title:'));
    const title = titleLine ? titleLine.replace('Title:', '').trim() : '';
    
    // Extract content - everything after "Content:"
    const contentStartIndex = lines.findIndex(line => line.startsWith('Content:'));
    if (contentStartIndex === -1) return null;
    
    // Get the first content line (after "Content:")
    const firstContentLine = lines[contentStartIndex].replace('Content:', '').trim();
    
    // Get remaining lines after the content line
    const remainingLines = lines.slice(contentStartIndex + 1);
    
    // Build paragraphs - split by empty lines
    const paragraphs = [];
    
    // Add first paragraph
    if (firstContentLine) {
      paragraphs.push(firstContentLine);
    }
    
    // Process remaining lines
    let currentParagraph = '';
    for (const line of remainingLines) {
      if (line.trim() === '') {
        // Empty line - end current paragraph if it has content
        if (currentParagraph.trim()) {
          paragraphs.push(currentParagraph.trim());
          currentParagraph = '';
        }
      } else {
        // Add to current paragraph
        currentParagraph += (currentParagraph ? ' ' : '') + line.trim();
      }
    }
    
    // Add last paragraph if any
    if (currentParagraph.trim()) {
      paragraphs.push(currentParagraph.trim());
    }
    
    return {
      id: index,
      title,
      paragraphs
    };
  }).filter(post => post !== null);
}

