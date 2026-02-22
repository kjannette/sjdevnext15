"use client";
import styles from "./component.module.css";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerInnerBox}>
        <a href="" className={styles.footerLink} rel="noopener noreferrer">
          |{"   "} © 2023 - 2026 sjDev{"   "} |
        </a>
      </div>
    </div>
  );
}
