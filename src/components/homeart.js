"use client";
import styles from "../app/styles.module.css";
import Image from "next/image";
import seqTheFut from "../../public/seqTheFut.gif";

export default function Homeart() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.gridColumn}>
        <div className={styles.imgBox}>
          <Image
            src={seqTheFut}
            className={styles.homeImg}
            alt="an interesting cubist animation inspired by the Bauhaus school."
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}
