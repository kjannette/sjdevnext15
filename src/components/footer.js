"use client";
import styles from "./component.module.css";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerInnerBox}>
        <a href="" className={styles.footerLink} rel="noopener noreferrer">
          |{"   "} © 2023 - 2024 sjDev{"   "} |
        </a>
        <div className={styles.nextLogoBox}>
          <img
            className={styles.nextLogo}
            src="https://res.cloudinary.com/dd8ewixm7/image/upload/v1739937756/nextLogo_seodzo.png"
            height={30}
            alt="next js logo"
          />
        </div>
      </div>
    </div>
  );
}
