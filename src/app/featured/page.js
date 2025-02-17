"use client";
import homeStyles from "../styles.module.css";
import featuredStyles from "./featured.module.css";
import { Roboto } from "next/font/google";
import Image from "next/image";
import bookBrowser from "../../../public/bookBrowser.jpg";
import logoMatrixUltrafav from "../../../public/logoMatrixUltrafav.png";
import budget from "../../../public/budget.jpg";
import salesFlow from "../../../public/salesFlow.jpg";

const roboto = Roboto({
  weight: "300",
  subsets: ["latin"],
});

export default function Featured() {
  return (
    <div className={homeStyles.container}>
      <div className={homeStyles.innerContainer}>
        <div className={featuredStyles.featuredGrid}>
          {/****    NOVODRAFT START    *****/}
          <div className={homeStyles.cardImageRight}>
            <div className={featuredStyles.gitBoxRight}>Visit Site</div>
            <a href="" target="_blank">
              <Image
                className={featuredStyles.featureImage}
                src={logoMatrixUltrafav}
                height={130}
                alt="sjDev logo"
              />
            </a>
          </div>
          <a className={homeStyles.cardTextLeft} href="" target="_blank">
            <h3>Novdraft.ai </h3>
            <p>
              AI-assisted legal drafting. ML-augmented OCR plus CoT-prompt
              sequencing generates contextually-precise, persuasive content.
            </p>
          </a>

          {/****    EXF END    *****/}
          {/****    SF START    *****/}
          <a href="" className={homeStyles.cardTextRight}>
            <h3>Sales Flow</h3>
            <p>
              Node/React app demo, created for an automotive retailer, with ML
              processing of KPI and inventory data.
            </p>
          </a>
          <div className={homeStyles.cardImageLeft}>
            <a href="https://github.com/kjannette/salesflow" target="_blank">
              <Image
                className={featuredStyles.featureImage}
                src={salesFlow}
                height={130}
                alt="sjDev logo"
              />
            </a>
            <div className={featuredStyles.gitBox}>View on Github</div>
          </div>
          {/****    SF END    *****/}
          {/****    BB START    *****/}
          <div className={homeStyles.cardImageRight}>
            <div className={featuredStyles.gitBoxRight}>View on Github</div>
            <a
              href="https://github.com/kjannette/reactnd-project-bookbrowser"
              target="_blank"
            >
              <Image
                className={featuredStyles.featureImage}
                src={bookBrowser}
                height={130}
                alt="sjDev logo"
              />
            </a>
          </div>
          <a
            href="https://github.com/kjannette/reactnd-project-bookbrowser"
            target="_blank"
            className={homeStyles.cardTextLeft}
          >
            <h3>Book Browser</h3>
            <p>
              Node/React app. Use-case was a client in the rare, collectible and
              new book retail space, with a youthful user base.
            </p>
          </a>
          {/****    BB END    *****/}
          {/****    BT START    *****/}
          <a href="" className={homeStyles.cardTextRight}>
            <h3>Budgetize</h3>
            <p>
              JS app for member dashboard of a business assoc. site. Snippet
              demos the 'monthly' budget view component.
            </p>
          </a>
          <div className={homeStyles.cardImageLeft}>
            <a href="" target="_blank">
              <Image
                className={featuredStyles.featureImage}
                src={budget}
                height={130}
                alt="sjDev logo"
              />
            </a>
            <div className={featuredStyles.gitBox}>View on Github</div>
          </div>
          {/****    BT END    *****/}
        </div>
      </div>
    </div>
  );
}
