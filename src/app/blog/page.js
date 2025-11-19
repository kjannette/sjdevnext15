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

  return (
    <main className={roboto.className}>
      <div className={homeStyles.container}>
        <div className={homeStyles.innerContainer}>
          <div className={blogStyles.blogContainer}>
            {posts.map((post) => (
              <article key={post.id} className={blogStyles.blogPost}>
                <h1 className={blogStyles.blogTitle}>{post.title}</h1>
                <div className={blogStyles.blogContent}>
                  {post.paragraphs.map((paragraph, index) => (
                    <p key={index} className={blogStyles.blogParagraph}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

