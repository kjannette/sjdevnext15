import homeStyles from "../../styles.module.css";
import blogStyles from "../blog.module.css";
import { Roboto } from "next/font/google";
import fs from "fs";
import path from "path";
import { parseBlogPosts } from "../../../utils/blogParser";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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

function getBlogPostBySlug(slug) {
  const posts = getBlogPosts();
  return posts.find(post => post.slug === slug);
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }) {
  const post = getBlogPostBySlug(params.slug);

  // If post not found, return 404
  if (!post) {
    notFound();
  }

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
    if (block.type === 'sectionHeader') {
      return (
        <h3 key={index} className={blogStyles.sectionHeader}>
          {block.content}
        </h3>
      );
    } else if (block.type === 'paragraph') {
      return (
        <p key={index} className={blogStyles.blogParagraph}>
          {renderTextWithBold(block.content)}
        </p>
      );
    } else if (block.type === 'image') {
      return (
        <figure key={index} className={blogStyles.blogImageContainer}>
          <div className={blogStyles.blogImageWrapper}>
            <Image
              src={`/${block.src.replace(/^public\//, '')}`}
              alt={block.caption || 'Blog image'}
              width={800}
              height={600}
              className={blogStyles.blogImage}
            />
          </div>
          {block.caption && (
            <figcaption className={blogStyles.blogImageCaption}>
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    } else if (block.type === 'aside') {
      return (
        <aside key={index} className={blogStyles.blogAside}>
          {block.content.map((segments, lineIndex) => (
            <p key={lineIndex} className={blogStyles.blogAsideText}>
              {renderTextWithBold(segments)}
            </p>
          ))}
        </aside>
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
                      {renderTextWithBold(subItem.content || subItem)}
                      {subItem.subSubItems && subItem.subSubItems.length > 0 && (
                        <ol type="i" className={blogStyles.blogSubSubList}>
                          {subItem.subSubItems.map((subSubItem, subSubIndex) => (
                            <li key={subSubIndex} className={blogStyles.blogSubSubListItem}>
                              {renderTextWithBold(subSubItem)}
                            </li>
                          ))}
                        </ol>
                      )}
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
            <Link href="/blog" className={blogStyles.backToBlog}>
              ← Back to Blog Index
            </Link>
            <article className={blogStyles.blogPost}>
              <h1 className={blogStyles.blogTitle}>{post.title}</h1>
              {post.subtitle && (
                <h2 className={blogStyles.blogSubtitle}>{post.subtitle}</h2>
              )}
              {post.date && (
                <div className={blogStyles.blogDate}>{post.date}</div>
              )}
              <div className={blogStyles.blogContent}>
                {post.contentBlocks.map((block, index) => renderContentBlock(block, index))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}

