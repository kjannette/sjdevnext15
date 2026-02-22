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
                  href="https://github.com/kjannette/Chirper/tree/main"
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
                    <span className={blockchainStyles.colorSpan}>Chirper</span> is a cross-chain bridge tool that finds the best route for transferring stablecoins between blockchain networks. It queries multiple protocols - Across, Stargate, Celer, Squid, Hop, and Wormhole - ranking them by fees, speed and other metrics. In one click, you find the optimal transfer path.
                  </p>
                </div>
              </div>
            </div>
            <div className={blockchainStyles.gridRowMargin}>
              <div className={blockchainStyles.rightColumn2}>
                <div className={blockchainStyles.textWrapper}>
                  <p>
                    <span className={blockchainStyles.colorSpan}>Koin Ping</span> is a lightweight, on-chain monitoring system that gives users situational awareness over blockchain addresses they care about. It observes on-chain activity and alerts users when predefined conditions are met. It does not execute transactions or manage wallets.
                  </p>
                </div>
              </div>
              <div className={blockchainStyles.leftColumn2}>
                <a
                  href="https://github.com/kjannette/koin_ping"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={blockchainStyles.imageLink}
                >
                  <Image
                    src="/three_bird_2.png"
                    alt="Koin Ping - Chain monitoring tool"
                    width={300}
                    height={300}
                    className={blockchainStyles.birdImage2}
                  />
                </a>
              </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
}

