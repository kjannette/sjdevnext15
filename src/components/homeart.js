"use client";
import { useState, useEffect } from "react";
import styles from "../app/styles.module.css";
import Head from "next/head";

export default function Homeart() {
  const images = [
    "/seqTheFut.gif",
    "/sjdevgiffy2.gif",
    "/SJDEV_SLANT.gif"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [spinReverse, setSpinReverse] = useState(false);
  const [fadeDuration, setFadeDuration] = useState(1);
  const [spinDuration, setSpinDuration] = useState(45);
  const [isShrinking, setIsShrinking] = useState(false);
  const [isFastSpin, setIsFastSpin] = useState(false);
  const [showFlashImage, setShowFlashImage] = useState(false);

  // Image rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 400);
      
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // Random disappear/reappear effect with speed changes
  useEffect(() => {
    const scheduleNextDisappear = () => {
      // Random interval between 2-6 seconds (more frequent)
      const randomInterval = Math.random() * 4000 + 2000;
      
      setTimeout(() => {
        // Random fade duration between 0.2s and 1.5s
        const randomFadeDuration = Math.random() * 1.3 + 0.2;
        setFadeDuration(randomFadeDuration);
        
        // Fade out
        setIsVisible(false);
        
        // Wait for fade out, then reappear with reversed spin and new speed
        setTimeout(() => {
          setSpinReverse(prev => !prev);
          setIsShrinking(false);
          
          // Dramatic speed changes: very fast (8-15s) or very slow (45-70s)
          const speedChoice = Math.random();
          let newSpinDuration;
          let isFast = false;
          
          if (speedChoice < 0.5) {
            // Fast spin: 8-15 seconds
            newSpinDuration = Math.random() * 7 + 8;
            isFast = true;
          } else {
            // Slow spin: 45-70 seconds
            newSpinDuration = Math.random() * 25 + 45;
            isFast = false;
          }
          
          setSpinDuration(newSpinDuration);
          setIsFastSpin(isFast);
          setIsVisible(true);
          
          // If it's a fast spin, trigger shrink after a short delay
          if (isFast) {
            const shrinkDelay = Math.random() * 1000 + 800; // 0.8-1.8 seconds
            setTimeout(() => {
              setIsShrinking(true);
              
              // Show flash image briefly during shrink
              setTimeout(() => {
                setShowFlashImage(true);
                
                // Hide flash image after brief display
                setTimeout(() => {
                  setShowFlashImage(false);
                }, 400); // Show for 0.4 seconds
              }, 400); // Start flash 0.4s into the shrink
              
              // Disappear after shrinking (shrink takes 1.5s)
              setTimeout(() => {
                setIsVisible(false);
                
                // Immediately schedule next appearance
                setTimeout(() => {
                  scheduleNextDisappear();
                }, 500);
              }, 1500);
            }, shrinkDelay);
          } else {
            // Normal scheduling for slow spin
            scheduleNextDisappear();
          }
        }, randomFadeDuration * 1000);
        
      }, randomInterval);
    };
    
    scheduleNextDisappear();
  }, []);

  return (
    <main>
      <div className={styles.homeContainer}>
        <div className={styles.gridColumn}>
          <div 
            className={`${styles.imgBox} ${isShrinking ? styles.shrinkWrapper : ''}`}
            style={{
              opacity: isVisible ? 1 : 0,
              transition: `opacity ${fadeDuration}s ease-in-out`
            }}
          >
            <img
              src={images[currentImageIndex]}
              className={`${styles.homeImg} ${isTransitioning ? styles.fadeFlash : ''} ${spinReverse ? styles.spinReverse : ''}`}
              style={{
                animationDuration: `${isTransitioning ? '0.4s, ' : ''}${spinDuration}s`
              }}
              alt="An interesting cubist animation inspired by the Bauhaus school."
            />
          </div>
          {showFlashImage && (
            <div className={styles.flashImageContainer}>
              <img
                src="/girls_laughing.png"
                className={styles.flashImage}
                alt="Flash"
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
