"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import homeStyles from "../styles.module.css";
import aboutStyles from "./about.module.css";
import featuredStyles from "../webapps/featured.module.css";
//import Image from "next/image";
//import purpleMe from "../../../public/purpleMe.png";
//import flipitFinalz from "../../../public/flipitFinalz.png";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
});

export default function About() {
  const [index, setIndex] = useState(0);
  const router = useRouter();
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
    "with learning Mandarin.",
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
    "deleveraging assets.",
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

  const handleClick = (route) => {
    router.push(route);
  };

  return (
    <div className={roboto.className}>
      <div className={homeStyles.container}>
        <div className={homeStyles.innerContainer}>
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
                      I've created innovative technology for companies from{" "}
                      <i>Fortune</i> Top-10 Ford Motor, to a startup named
                      alongside Apple as a{" "}
                      <span className="about-italics-text">
                        <i>FastCompany</i>{" "}
                      </span>{" "}
                      <Link
                        className={aboutStyles.aboutLink}
                        href="https://www.fastcompany.com/90846903/most-innovative-companies-consumer-electronics-2023"
                      >
                        {" "}
                        “World's Most Innovative”
                      </Link>
                      .{" "}
                    </span>
                  </div>
                  <>
                    <p className={aboutStyles.solutionsText}>
                      Innovation means "a new method or idea": consider
                      Artificial Intelligence (aka the "chatbot") which has
                      captivated popular attention.
                    </p>
                  </>
                  <>
                    <p> It helps with {`${textArray[index]}`} </p>
                  </>
                  <p>
                    Beguiling. But only a hint at AI's potential to enrich our
                    lives and professional pursuits. From{" "}
                    <Link
                      className={aboutStyles.aboutLink}
                      href="https://arxiv.org/pdf/2304.03516.pdf"
                    >
                      {" "}
                      increasing conversions
                    </Link>
                    , to{" "}
                    <Link
                      className={aboutStyles.aboutLink}
                      href="https://www.forbes.com/sites/tomdavenport/2019/07/10/from-analytics-first-to-ai-first-at-capital-one/?sh=423a14372f1b"
                    >
                      revealing new revenue streams{" "}
                    </Link>
                    by recognizing patterns in complex data, AI empowers amazing
                    outcomes...
                  </p>

                  <p>
                    Introducing{" "}
                    <Link className={aboutStyles.aboutLink} href="/contact">
                      Novodraft
                    </Link>
                    , an AI application empowering attorneys to draft persuasive
                    content at light speed.
                  </p>
                  <p>
                    Novodraft also shows that intrepidly-applied AI can help do
                    anything faster and smarter.
                  </p>
                  <p>
                    {" "}
                    <Link className={aboutStyles.aboutLink} href="/contact">
                      Let's talk{" "}
                    </Link>
                    about how AI and ML, along with{" "}
                    <Link className={aboutStyles.aboutLink} href="/webapps">
                      technology your business already uses{" "}
                    </Link>
                    can empower you, too.
                  </p>
                </div>
              </div>
              <div className={aboutStyles.aboutColumnTR}>
                <div className={aboutStyles.rightBox}>
                  <div className={aboutStyles.rightBoxInner}>
                    <div className={aboutStyles.imageBoxOne}>
                      {show ? (
                        <div className={aboutStyles.colorCell1}>
                          <img
                            className={aboutStyles.imgOne}
                            src="https://res.cloudinary.com/dd8ewixm7/image/upload/v1739936788/purpleMe_rf5gpm.png"
                            height={130}
                            alt="sjDev man"
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className={aboutStyles.imageBoxTwo}>
                      {show1 ? (
                        <div className={aboutStyles.colorCell2}>
                          <img
                            className={aboutStyles.imgOne}
                            src="https://res.cloudinary.com/dd8ewixm7/image/upload/v1739936788/purpleMe_rf5gpm.png"
                            height={190}
                            alt="sjDev man"
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className={aboutStyles.imageBoxThree}>
                      {show2 ? (
                        <div className={aboutStyles.colorCell3}>
                          <img
                            className={aboutStyles.imgTwo}
                            src="https://res.cloudinary.com/dd8ewixm7/image/upload/v1739936788/purpleMe_rf5gpm.png"
                            height={230}
                            alt="sjDev man"
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className={aboutStyles.imageBoxFour}>
                      {show3 ? (
                        <div className={aboutStyles.colorCell4}>
                          <img
                            className={aboutStyles.imgThree}
                            src="https://res.cloudinary.com/dd8ewixm7/image/upload/v1739936788/purpleMe_rf5gpm.png"
                            height={275}
                            alt="sjDev man"
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className={aboutStyles.imageBoxFive}>
                      {show4 ? (
                        <div className={aboutStyles.colorCell5}>
                          <img
                            className={aboutStyles.imgFour}
                            src="https://res.cloudinary.com/dd8ewixm7/image/upload/v1739936788/purpleMe_rf5gpm.png"
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
                    <p className={aboutStyles.mobileParagraph}>
                      In a heuristically-generated, algorithmically-driven
                      world, creativity is the highest-value attribute.
                    </p>
                  </>
                  <p className={aboutStyles.mobileParagraph}>
                    I’ve created innovative solutions at companies from{" "}
                    <i>Fortune</i> top-10 Ford Motor Company, to a startup named
                    alongside Apple as one of{" "}
                    <span className="about-italics-text">Fast Company</span>{" "}
                    magazine's
                    <Link
                      className={aboutStyles.aboutLink}
                      href="https://www.fastcompany.com/90846903/most-innovative-companies-consumer-electronics-2023"
                    >
                      {" "}
                      "World's Most Innovative 2023”.
                    </Link>{" "}
                  </p>
                  <p className={aboutStyles.mobileParagraph}>
                    Innovation is defined as "a new method or idea"; leveraging
                    technology in novel ways.
                  </p>
                  <p className={aboutStyles.mobileParagraph}>
                    Consider Artificial Intelligence (so-called "chatbots"),
                    which captivate popular attention.
                  </p>
                  <p className={aboutStyles.mobileParagraph}>
                    They help {`${textArray[index]}`}
                  </p>
                  <p className={aboutStyles.mobileParagraph}>
                    Beguiling. But effectively, a conversational search engine
                    only hinting at the technology's transformative potential.
                  </p>
                  <p className={aboutStyles.mobileParagraph}>
                    Deep application of AI/ML
                    <Link
                      className={aboutStyles.aboutLink}
                      href="https://arxiv.org/pdf/2208.04560"
                    >
                      {" "}
                      to increase user satisfaction
                    </Link>{" "}
                    and realize growth demands both the passion of art and
                    discipline of science: inspiration guided by data.
                  </p>
                  <>
                    <p className={aboutStyles.mobileParagraph}>
                      From optimizing existing{" "}
                      <Link className={aboutStyles.aboutLink} href="/webapps">
                        applications
                      </Link>
                      , to deploying AI and machine learning,{" "}
                      <Link className={aboutStyles.aboutLink} href="/contact">
                        let me show you{" "}
                      </Link>
                      how to leverage technology so your business can realize
                      its potential.
                    </p>
                  </>
                </div>
                {/**********************************   END MOBILE ONLY TEXT BLOCK    ****/}
              </div>
            </div>
            <div className={aboutStyles.appContainer}>
              {/****    NOVODRAFT START    *****/}
              <div className={aboutStyles.novoLeft}>
                <div className={featuredStyles.gitBoxRight}>Visit Site</div>
                <a href="https://www.novodraft.ai" target="_blank">
                  <img
                    className={featuredStyles.featureImage}
                    src="https://res.cloudinary.com/dd8ewixm7/image/upload/v1739937570/logoMatrixUltrafav_nxpx29.png"
                    height={130}
                    alt="sjDev logo"
                  />
                </a>
              </div>
              <div className={aboutStyles.novoRight}>
                <a
                  className={aboutStyles.foo}
                  href="https://www.novodraft.ai"
                  target="_blank"
                >
                  <h3 className={aboutStyles.novoTitleText}>Novdraft.ai </h3>
                  <p className={aboutStyles.novoGraph}>
                    {" "}
                    AI-assisted legal drafting for attorney use in litigation
                    and discovery.
                  </p>
                  <p className={aboutStyles.novoGraph}>
                    Machine-learning-augmented optical character recognition
                    plus chain of thought LLM prompt sequencing generates
                    contextually-precise, persuasive content.
                  </p>
                  <p className={aboutStyles.novoGraph}>
                    Discovery and motions, ready to serve, done in minutes.
                  </p>
                </a>
              </div>

              {/****    NOVODRAFT END    *****/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*



            <div className={aboutStyles.aboutRow}>
              <div className={aboutStyles.aboutColumnBL}>
                <div className={aboutStyles.hotBackBox}>
                  <div className={aboutStyles.pixImgBox}>
                    <img
                      className={aboutStyles.pixelBlast}
                      src="https://res.cloudinary.com/dd8ewixm7/image/upload/v1739937237/flipitFinalz_qktwbf.png"
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
                      Finding them, and developing practical AI applications is
                      my business. For example:{" "}
                      <Link
                        className={aboutStyles.aboutLink}
                        href="https://www.novodraft.ai"
                      >
                        Novodraft.
                      </Link>
                    </p>
                    <p>
                      Leveraging ML-augmented OCR and CoT LLM prompting, it
                      generates contextually-precise rhetorical content for
                      lawyers. It also demonstrates that intrepidly-applied AI
                      can help do just about anything faster and smarter.
                    </p>
                    <p>
                      Do you retail? Imagine deploying a 24/7
                      associate-force-multiplier with one purpose: widening your
                      mote. In sales, AI offers customers a
                      conversion-increasing, bespoke{" "}
                      <span
                        className={aboutStyles.peithoLink}
                        onClick={() => handleClick("/peitho")}
                      >
                        concierge experience,{" "}
                      </span>
                      superior to
                      <Link
                        className={aboutStyles.aboutLink}
                        href="https://arxiv.org/pdf/2304.03516.pdf"
                      >
                        {" "}
                        shopworn search bars.
                      </Link>{" "}
                    </p>
                  </>
                  <>
                    <p>
                      Do you finance? Machine-learning has{" "}
                      <Link
                        className={aboutStyles.aboutLink}
                        href="https://www.forbes.com/sites/tomdavenport/2019/07/10/from-analytics-first-to-ai-first-at-capital-one/?sh=423a14372f1b"
                      >
                        redefined what is operationally feasible.{" "}
                      </Link>
                      ML, by recognizing patterns in data once obfuscated by
                      sheer volume, has yielded actionable paths to new revenue.
                    </p>{" "}
                  </>
                  <>
                    <p>
                      Recently, through ML analysis of customer behavior, a bank
                      gained account-use insight that inspired novel loan
                      products. The result was impressive YOY growth versus
                      rivals.
                    </p>
                    <p>
                      <Link className={aboutStyles.aboutLink} href="/contact">
                        Let's talk{" "}
                      </Link>
                      about how AI and ML, along with{" "}
                      <Link className={aboutStyles.aboutLink} href="/webapps">
                        technology you already use{" "}
                      </Link>
                      can grow your opportunities.
                    </p>
                  </>
                </div>
              </div>
            </div>


*/
