"use client";

import styles from "./page.module.css";
import Homeart from "@/components/homeart";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.innerContainer}>
        <Head>
          <script
            data-goatcounter="https://sjdev.goatcounter.com/count"
            async
            src="//gc.zgo.at/count.js"
            key="gc-1"
          ></script>
        </Head>
        <Homeart />
      </main>
    </div>
  );
}
