"use client";
import { useState, useEffect } from "react";
import styles from "../app/styles.module.css";
import Head from "next/head";

export default function Homeart() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.gridColumn}>
        <div className={styles.imgBox}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className={styles.homeImg}
          >
            <source src="/sjBirds.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}