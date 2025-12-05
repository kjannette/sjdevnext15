import homeStyles from "../styles.module.css";
import blogStyles from "./blog.module.css";
import { Roboto } from "next/font/google";
import fs from "fs";
import path from "path";
import { parseBlogPosts } from "../../utils/blogParser";
import Link from "next/link";

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

export default function BlogDigest() {
  const posts = getBlogPosts();

  return (
    <main className={roboto.className}>
      <div className={homeStyles.container}>
        <div className={homeStyles.innerContainer}>
          <div className={blogStyles.blogDigestContainer}>
            <div className={blogStyles.digestList}>
              {posts.map((post) => (
                <div key={post.id} className={blogStyles.digestItem}>
                  <Link href={`/blog/${post.slug}`} className={blogStyles.digestLink}>
                    <span className={blogStyles.digestLinkTitle}>{post.title}</span>
                    {post.date && (
                      <span className={blogStyles.digestLinkDate}>{post.date}</span>
                    )}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

