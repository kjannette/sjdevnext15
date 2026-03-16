import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import homeStyles from "../styles.module.css";
import styles from "./sopost.module.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
});

function getMarkdownContent() {
  const filePath = path.join(process.cwd(), "public", "model-collapse-and-discourse-embargo.md");
  return fs.readFileSync(filePath, "utf8");
}

export default function SoPost() {
  const content = getMarkdownContent();

  return (
    <main className={roboto.className}>
      <div className={homeStyles.container}>
        <div className={homeStyles.innerContainer}>
          <article className={styles.article}>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
          </article>
        </div>
      </div>
    </main>
  );
}
//