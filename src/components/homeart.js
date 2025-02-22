"use client";
import styles from "../app/styles.module.css";
import Head from "next/head";

export default function Homeart() {
  return (
    <main>
      <div className={styles.homeContainer}>
        <div className={styles.gridColumn}>
          <div className={styles.imgBox}>
            <img
              src="https://res.cloudinary.com/dd8ewixm7/image/upload/v1739933776/seqTheFut_uepaah.gif"
              className={styles.homeImg}
              alt="An interesting cubist animation inspired by the Bauhaus school."
            />
          </div>
        </div>
      </div>
    </main>
  );
}
