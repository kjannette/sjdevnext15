"use client";
import homeStyles from "../styles.module.css";
import contactStyles from "./contact.module.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
});

export default function Contact() {
  return (
    <main className={roboto.className}>
      <div className={homeStyles.container}>
        <div className={homeStyles.innerContainer}>
          <div className={contactStyles.contactContainer}>
            <div className={contactStyles.contactInner}>
              <div className={contactStyles.contactLeftColumn}>
                <div className={contactStyles.imgBox}>
                  <div className={contactStyles.imgBoxOne}></div>
                  <div className={contactStyles.imgBoxTwo}></div>
                  <div className={contactStyles.imgBoxThree}>
                    <div className={contactStyles.threeInner}>
                      <img
                        className={contactStyles.fadeInUpAnimation}
                        src="https://res.cloudinary.com/dd8ewixm7/image/upload/v1739937493/pixelToo_s11w8u.png"
                        height={300}
                        alt="artistic picture of a man in a suit"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={contactStyles.contactRightColumn}>
                <div className={contactStyles.contactInfoBox}>
                  <div className={contactStyles.contactDetailOne}>
                    <a
                      className={contactStyles.contactLink}
                      href="mailto:sj@sjdev.co"
                    >
                      sj{""} | at |{""} sjdev | dot |{""} co
                    </a>
                  </div>
                  <div className={contactStyles.contactDetailTwo}>
                    <a
                      className={contactStyles.contactLinkTwo}
                      href=""
                    >
                      findandexec.com
                    </a>
                  </div>
                  <div className={contactStyles.contactDetailThree}>
                    <a
                      className={contactStyles.contactLinkThree}
                      href=""
               
                    >
                      novodraft.ai
                    </a>
                  </div>
                  <div className={contactStyles.contactDetailFour}>
                    <a
                      className={contactStyles.contactLinkFour}
                      href="https://twitter.com/ydfekt"
                    >
                      @ydefkt
                    </a>
                  </div>
                  <div className={contactStyles.contactDetailFive}>
                    <a
                      className={contactStyles.contactLinkFive}
                      href="https://www.github.com/kjannette"
                    >
                      github.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
