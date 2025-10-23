"use client";
import { useState, useEffect } from "react";
import styles from "../app/styles.module.css";
import Head from "next/head";
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
            alt="Would you like to play a game?"
          />
        </div>
      </div>
    </div>
  );
}