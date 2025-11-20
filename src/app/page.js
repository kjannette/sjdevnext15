"use client";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div  className={styles.homeBox}>
      <div className={styles.imgBoxContainer}> 
        <div className={styles.imgBox}>
        <div className={styles.videoContainer}>
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
    </div>
  );
}
