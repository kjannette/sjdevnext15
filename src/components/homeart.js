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
  const [spinDuration, setSpinDuration] = useState(240);
  const [isShrinking, setIsShrinking] = useState(false);
  const [isFastSpin, setIsFastSpin] = useState(false);
  const [showFlashImage, setShowFlashImage] = useState(false);
  const [flashImageCounter, setFlashImageCounter] = useState(0);
  const [currentFlashImage, setCurrentFlashImage] = useState("/girls_laughing.png");
  const [antlersCount, setAntlersCount] = useState(0);
  const [showAntlersShadow, setShowAntlersShadow] = useState(false);

  // Image rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 500);
      
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  // Random disappear/reappear effect with speed changes
  useEffect(() => {
    const scheduleNextDisappear = () => {
      // Random interval between 2-6 seconds (more frequent)
      const randomInterval = Math.random() * 4000 + 4000;
      
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
          
          // Dramatic speed changes: very fast (42-80s) or very slow (240-374s)
          const speedChoice = Math.random();
          let newSpinDuration;
          let isFast = false;
          
          if (speedChoice < 0.5) {
            // Fast spin: 42-80 seconds
            newSpinDuration = Math.random() * 38 + 42;
            isFast = true;
          } else {
            // Slow spin: 240-374 seconds
            newSpinDuration = Math.random() * 134 + 240;
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
                // Increment counter and determine which image to show
                setFlashImageCounter(prev => {
                  const newCount = prev + 1;
                  const position = newCount % 5;
                  
                  // Flashes 1-2: girls_laughing, 3-4: antlers, 5: poke
                  if (position === 0) { // Every 5th
                    setCurrentFlashImage("/poke.png");
                  } else if (position === 3 || position === 4) { // 3rd and 4th
                    setCurrentFlashImage("/antlers.png");
                    // Track antlers count for shadow display
                    setAntlersCount(prev => prev + 1);
                  } else { // 1st and 2nd
                    setCurrentFlashImage("/girls_laughing.png");
                  }
                  
                  return newCount;
                });
                
                setShowFlashImage(true);
                
                // Determine display duration based on image type
                const nextPosition = (flashImageCounter + 1) % 5;
                let displayDuration;
                let isAntlers = false;
                
                if (nextPosition === 0) {
                  displayDuration = 250; // poke.png: 0.25s
                } else if (nextPosition === 3 || nextPosition === 4) {
                  displayDuration = 300; // antlers: 0.3s (to allow fade)
                  isAntlers = true;
                  // Show shadow every other time antlers appears
                  if (antlersCount % 2 === 1) {
                    setShowAntlersShadow(true);
                    setTimeout(() => {
                      setShowAntlersShadow(false);
                    }, displayDuration);
                  }
                } else {
                  displayDuration = 200; // girls_laughing: 0.2s
                }
                
                setTimeout(() => {
                  setShowFlashImage(false);
                }, displayDuration);
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
              className={`${styles.homeImg} ${isTransitioning ? styles.fadeFlash : ''}`}
              alt="An interesting cubist animation inspired by the Bauhaus school."
            />
          </div>
          {showFlashImage && (
            <div 
              className={`${styles.flashImageContainer} ${
                currentFlashImage === "/antlers.png" ? styles.antlersContainer : 
                currentFlashImage === "/girls_laughing.png" ? styles.girlsLaughingContainer : ''
              }`}
              style={{
                animationDuration: currentFlashImage === "/antlers.png" ? "0.3s" : (currentFlashImage === "/poke.png" ? "0.25s" : "0.2s")
              }}
            >
              <img
                src={currentFlashImage}
                className={styles.flashImage}
                alt="Flash"
              />
            </div>
          )}
          {showAntlersShadow && (
            <div className={styles.antlersShadowContainer}>
              <img
                src="/antlers_shadow.png"
                className={styles.antlersShadowImage}
                alt="Shadow"
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
