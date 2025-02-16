import { useState, useEffect } from "react";
import homeStyles from "../app/styles.module.css";
import aboutStyles from "./about.module.css";
import Image from "next/image";
import purpleMe from "../../public/purpleMe.png";
import flipitFinalz from "../../public/images/flipitFinalz.png";

import Link from "next/link";
import { Roboto } from "next/font/google";
import Navpanel from "../pageElements/navpanel.js";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
});

export default function About() {
  const [index, setIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  function navToggle() {
    setMenuOpen(!menuOpen);
  }

  let interval = null;

  interval = setInterval(log, 5000);

  function log() {
    let arr = [];
    let num = Math.floor(Math.random() * 87);
    if (arr.indexOf(num) === -1) {
      arr.push(num);
      setIndex(num);
      clearInterval(interval);
    }
  }

  const textArray = [
    "searching the web.",
    "making fondue.",
    "living a dream.",
    "writing a song.",
    "adjusting coefficients.",
    "cardio interval training.",
    "calculating CAG.",
    "with interview questions.",
    "speaking Chinese.",
    "controlling concept drift.",
    "with learning calculus.",
    "with time-series analysis ",
    "starting a nonprofit.",
    "calculating your TAM.",
    "with Gap analysis.",
    "winning at chess.",
    "writing a speech.",
    "compensating for drift.",
    "simulating contrast decay.",
    "mastering photoshop.",
    "plotting vectors.",
    "with Kubernetes.",
    "with tomography scanning.",
    "with flow cytometry.",
    "training your dog.",
    "with Monte Carlo simulation.",
    "drawing a horse.",
    "dynamic pricing adjustment.",
    "with your yoga.",
    "planning a trip.",
    "training an LLM.",
    "calculating cost basis.",
    "with project documentation.",
    "understanding Brownian motion.",
    "playing the piano.",
    "drafting a petition.",
    "composing a sonnet.",
    "organizing your closet.",
    "organizing your life.",
    "finding nontrivial prime factors.",
    "with Pythagoras' theorem.",
    "speaking Italian.",
    "remembering birthdays.",
    "forging ahead.",
    "in resource allocation",
    "with the Bayesian method.",
    "playing poker.",
    "writing temporal queries.",
    "level setting.",
    "losing weight.",
    "broaden one's perspective.",
    "winning non-zero sum games.",
    "formulating Taylor expansions.",
    "with regression analysis.",
    "with learning to play free jazz.",
    "shaving a yak.",
    "setting a stop loss.",
    "catching a wave.",
    "with backward deduction.",
    "mixing records.",
    "with mean-variance curves.",
    "external benchmarking.",
    "spotting sell signals.",
    "slow-cooking brisket.",
    "making perfect July lemonade.",
    "making a crepe.",
    "fighting for change.",
    "with term models.",
    "reducing carbon footprints.",
    "in the garden.",
    "in the office.",
    "writing a pitch.",
    "making the grade.",
    "riding a camel.",
    "prompt engineering.",
    "deriving a yield curve.",
    "studying history.",
    "making history.",
    "plotting a gradient.",
    "writing a motion in limine.",
    "citing USDC precedent.",
    "with clinical questions.",
    "understanding risk.",
    "setting stop losses.",
    "buying on margin.",
    "de-leveraging assets.",
    "understanding delta.",
    "spotting a breakout.",
  ];

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(true);

  useEffect(() => {
    let timerA = setTimeout(() => setShow(true), 2000); // TODO RENUMBER
    let timer1 = setTimeout(() => setShow1(true), 1500);
    let timer2 = setTimeout(() => setShow2(true), 1000);
    let timer3 = setTimeout(() => setShow3(true), 500);
    return () => {
      clearTimeout(timerA);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className={roboto.className}>
      <div className={homeStyles.container}>
        <div className={homeStyles.innerContainer}>
          <Header
            navToggle={navToggle}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />
          <Navpanel
            navToggle={navToggle}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />
          <div className={aboutStyles.aboutContainer}>
            <div className={homeStyles.gridRow}>
              <div className={aboutStyles.aboutHeadingOuter}></div>
            </div>
            {/****** Start Content ******/}
            <div className={aboutStyles.aboutRow}>
              <div className={aboutStyles.aboutColumnTL}>
                <div className={aboutStyles.leftTextWrapper}>
                  <p>
                    <></>
                  </p>
                  <p>
                    In an algorithmically-generated, heuristically-driven world,
                    creativity is the highest-value attribute.
                  </p>
                  <div className={aboutStyles.aboutFastSection}>
                    <span className="fast-text">
                      I’ve created innovative solutions at companies from
                      Fortune Top-20 Ford Motor, to a startup named alongside
                      Apple as one of{" "}
                      <span className="about-italics-text">Fast Company</span>{" "}
                      magazine's
                      <Link
                        className={aboutStyles.aboutLink}
                        href="https://www.fastcompany.com/90846903/most-innovative-companies-consumer-electronics-2023"
                      >
                        {" "}
                        “World's Most Innovative 2023”
                      </Link>{" "}
                    </span>
                  </div>

                  <>
                    <p className={aboutStyles.solutionsText}>
                      I bring that creativity to every solution I create for
                      clients. While “solution” might imply a problem, I frame
                      it optimistically, as an opportunity realized. Like
                      leveraging technology to give professionals an edge.
                    </p>
                    <p>
                      While in the popular media, "chatbots" are making a
                      splash...
                    </p>
                  </>

                  <>
                    <p> They help {`${textArray[index]}`}</p>
                  </>
                  <p>
                    Understanding how large language models (LLMs/AI) and
                    machine learning (ML) can improve your business in a
                    practical way is nuanced.
                  </p>
                </div>
              </div>
              <div className={aboutStyles.aboutColumnTR}>
                <div className={aboutStyles.rightBox}>
                  <div className={aboutStyles.rightBoxInner}>
                    <div className={aboutStyles.imageBoxOne}>
                      {show ? (
                        <div className={aboutStyles.colorCell1}>
                          <Image
                            className={aboutStyles.imgOne}
                            src={purpleMe}
                            height={130}
                            alt="sjDev logo"
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className={aboutStyles.imageBoxTwo}>
                      {show1 ? (
                        <div className={aboutStyles.colorCell2}>
                          <Image
                            className={aboutStyles.imgOne}
                            src={purpleMe}
                            height={190}
                            alt="sjDev logo"
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className={aboutStyles.imageBoxThree}>
                      {show2 ? (
                        <div className={aboutStyles.colorCell3}>
                          <Image
                            classname={aboutStyles.imgTwo}
                            src={purpleMe}
                            height={230}
                            alt="sjDev logo"
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className={aboutStyles.imageBoxFour}>
                      {show3 ? (
                        <div className={aboutStyles.colorCell4}>
                          <Image
                            classname={aboutStyles.imgThree}
                            src={purpleMe}
                            height={275}
                            alt="sjDev logo"
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className={aboutStyles.imageBoxFive}>
                      {show4 ? (
                        <div className={aboutStyles.colorCell5}>
                          <Image
                            classname={aboutStyles.imgFour}
                            src={purpleMe}
                            height={310}
                            alt="sjDev logo"
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>

                {/**********************************    MOBILE ONLY TEXT BLOCK    ****/}

                <div className={aboutStyles.mobileTextOne}>
                  <>
                    <p>
                      In a heuristically-generated, algorithmically-driven
                      world, creativity is the highest-value attribute.
                    </p>
                  </>
                  <p>
                    <span className="fast-text">
                      I’ve created innovative solutions at companies from
                      Fortune Top-20 Ford Motor, to a startup named alongside
                      Apple as one of{" "}
                      <span className="about-italics-text">Fast Company</span>{" "}
                      magazine's
                      <Link
                        className={aboutStyles.aboutLink}
                        href="https://www.fastcompany.com/90846903/most-innovative-companies-consumer-electronics-2023"
                      >
                        {" "}
                        "World's Most Innovative 2023”.
                      </Link>{" "}
                    </span>
                  </p>

                  <>
                    <p>
                      <Link className={aboutStyles.aboutLink} href="/contact">
                        Let me show you{" "}
                      </Link>
                      how to leverage technology so your business can realize
                      its potential.
                    </p>
                  </>
                </div>
                {/**********************************   END MOBILE ONLY TEXT BLOCK    ****/}
              </div>
            </div>
            <div className={aboutStyles.aboutRow}>
              <div className={aboutStyles.aboutColumnBL}>
                <div className={aboutStyles.hotBackBox}>
                  <div className={aboutStyles.pixImgBox}>
                    <Image
                      className={aboutStyles.pixelBlast}
                      src={flipitFinalz}
                      height={350}
                      alt="beautiful javascript art deco picture"
                    />
                  </div>
                </div>
              </div>
              <div className={aboutStyles.aboutColumnBR}>
                <div className={aboutStyles.leftTextWrapper2}>
                  <></>
                  <>
                    <p>
                      {" "}
                      I’ve developed practical LLM applications. One, using
                      ML-augmented OCR and CoT prompting, generates
                      contextually-precise completions for
                      <Link
                        className={aboutStyles.aboutLink}
                        href="https://www.novodraft.ai"
                      >
                        {" "}
                        legal drafting.
                      </Link>{" "}
                      This makes trial attorney's work more efficient, but, more
                      broadly, shows that you can leverage AI to do whatever you
                      do faster and smarter.
                    </p>
                    <p>
                      Do you retail? Imagine deploying a 24/7
                      associate-force-multiplier that has one purpose: widening
                      your mote. In sales, AI offers customers a
                      conversion-increasing, bespoke concierge experience,{" "}
                      <Link
                        className={aboutStyles.aboutLink}
                        href="https://arxiv.org/pdf/2304.03516.pdf"
                      >
                        {" "}
                        superior to shopworn search bars.
                      </Link>{" "}
                    </p>
                  </>
                  <>
                    <p>
                      Do you finance? Operationally, machine-learning has{" "}
                      <Link
                        className={aboutStyles.aboutLink}
                        href="https://www.forbes.com/sites/tomdavenport/2019/07/10/from-analytics-first-to-ai-first-at-capital-one/?sh=423a14372f1b"
                      >
                        redefined what's possible,{" "}
                      </Link>
                      by recognizing patterns in complex data that yield
                      actionable paths to once-hidden revenue streams.
                    </p>{" "}
                  </>
                  <>
                    <p>
                      For example, through ML analysis of customer behavior, a
                      bank gained account-use insight that inspired novel loan
                      products. The result was impressive YOY growth versus
                      sector rivals.
                    </p>
                    <p>
                      <Link className={aboutStyles.aboutLink} href="/contact">
                        Let's talk{" "}
                      </Link>
                      about how AI, ML and analytics, along with technology you
                      already use, can grow your opportunities. Don't wait for
                      the future, sequence it yourself.
                    </p>
                  </>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
