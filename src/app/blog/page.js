import homeStyles from "../styles.module.css";
import blogStyles from "./blog.module.css";
import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
});

export default function BlogDigest() {
  return (
    <main className={roboto.className}>
      <div className={homeStyles.container}>
        <div className={homeStyles.innerContainer}>
          <div className={blogStyles.blogDigestContainer}>
            <div className={blogStyles.digestList}>
              <div className={blogStyles.digestItem}>
                <Link href="/letsembargostackoverflow" className={blogStyles.digestLink}>
                  <span className={blogStyles.digestLinkTitle}>
                    Model Collapse And The Death of Populist Peer-Review
                  </span>
                  <span className={blogStyles.digestLinkSubtitle}>
                    Or, <em>Let&#39;s Embargo Stack Overflow Like The MF&#39;in Strait of Hormuz</em>
                  </span>
                </Link>
                <span className={blogStyles.digestDate}>March 16, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

