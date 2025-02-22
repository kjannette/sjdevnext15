"use client";

import styles from "./page.module.css";
import Homeart from "@/components/homeart";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.innerContainer}>
        <Homeart />
      </main>
    </div>
  );
}
