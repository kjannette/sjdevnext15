import homeStyles from "../styles.module.css";
import blockchainStyles from "./blockchain.module.css";
import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
});

export default function Blockchain() {
  return (
    <div className={roboto.className}>
      <div className={homeStyles.container}>
        <div className={blockchainStyles.innerContainer}>
          <div className={blockchainStyles.blockchainContainer}>
            <div className={blockchainStyles.gridRow}>
              <div className={blockchainStyles.leftColumn}>
                <a 
                  href="https://www.chirper.live" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={blockchainStyles.imageLink}
                >
                  <Image
                    src="/three_bird.png"
                    alt="Chirper - Cross-chain bridge tool"
                    width={200}
                    height={200}
                    className={blockchainStyles.birdImage}
                  />
                </a>
              </div>
              <div className={blockchainStyles.rightColumn}>
                <div className={blockchainStyles.textWrapper}>
                  <p>
                    Chirper is a cross-chain bridge tool that finds the best route for transferring stablecoins between blockchain networks. It queries multiple protocols - Across, Stargate, Celer, Squid, Hop, and Wormhole - ranking them by fees, speed and other metrics. In one click, you find the optimal transfer path.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

