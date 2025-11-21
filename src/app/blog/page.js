import homeStyles from "../styles.module.css";
import blogStyles from "./blog.module.css";
import { Roboto } from "next/font/google";
import fs from "fs";
import path from "path";
import { parseBlogPosts } from "../../utils/blogParser";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
});

function getBlogPosts() {
  const filePath = path.join(process.cwd(), "src", "blog_posts.txt");
  const fileContent = fs.readFileSync(filePath, "utf8");
  return parseBlogPosts(fileContent);
}

export default function Blog() {
  const posts = getBlogPosts();

  // Helper to render text with bold segments
  const renderTextWithBold = (segments) => {
    return segments.map((segment, idx) => {
      if (segment.bold) {
        return <strong key={idx}>{segment.text}</strong>;
      }
      return <span key={idx}>{segment.text}</span>;
    });
  };

  const renderContentBlock = (block, index) => {
    if (block.type === 'paragraph') {
      return (
        <p key={index} className={blogStyles.blogParagraph}>
          {renderTextWithBold(block.content)}
        </p>
      );
    } else if (block.type === 'ordered-numbered') {
      return (
        <ol key={index} className={blogStyles.blogOrderedList}>
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex} className={blogStyles.blogListItem}>
              {renderTextWithBold(item.content)}
              {item.subItems && item.subItems.length > 0 && (
                <ol type="a" className={blogStyles.blogSubList}>
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} className={blogStyles.blogSubListItem}>
                      {renderTextWithBold(subItem)}
                    </li>
                  ))}
                </ol>
              )}
            </li>
          ))}
        </ol>
      );
    } else if (block.type === 'unordered') {
      return (
        <ul key={index} className={blogStyles.blogUnorderedList}>
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex} className={blogStyles.blogListItem}>
              {renderTextWithBold(item)}
            </li>
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <main className={roboto.className}>
      <div className={homeStyles.container}>
        <div className={homeStyles.innerContainer}>
          <div className={blogStyles.blogContainer}>
            {posts.map((post) => (
              <article key={post.id} className={blogStyles.blogPost}>
                <h1 className={blogStyles.blogTitle}>{post.title}</h1>
                <div className={blogStyles.blogContent}>
                  {post.contentBlocks.map((block, index) => renderContentBlock(block, index))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

