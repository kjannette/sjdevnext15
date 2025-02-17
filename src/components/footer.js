"use client";
import styles from "./component.module.css";
import Image from "next/image";
import nextLogo from "../../public/nextLogo.png";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerInnerBox}>
        <a href="" className={styles.footerLink} rel="noopener noreferrer">
          |{"   "} © 2023 - 2024 sjDev{"   "} |
        </a>
        <div className={styles.nextLogoBox}>
          <Image
            className={styles.nextLogo}
            src={nextLogo}
            height={30}
            alt="next js logo"
          />
        </div>
      </div>
    </div>
  );
}
