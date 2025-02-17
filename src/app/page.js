"use client";

import styles from "./page.module.css";
import Homeart from "@/components/homeart";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.innerContainer}>
        <Homeart />
      </main>
    </div>
  );
}
