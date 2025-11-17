"use client";
import homeStyles from "../styles.module.css";
import blogStyles from "./blog.module.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
});

export default function Blog() {
  return (
    <main className={roboto.className}>
      <div className={homeStyles.container}>
        <div className={homeStyles.innerContainer}>
          <div className={blogStyles.blogContainer}>
            <h1>Blog</h1>
            {/* Blog content will go here */}
          </div>
        </div>
      </div>
    </main>
  );
}

