"use client";

import styles from "./page.module.css";
import Homeart from "@/components/homeart";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Homeart />
      </main>
    </div>
  );
}
