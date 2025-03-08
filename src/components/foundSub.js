"use client";
import { useState } from "react";
import foundStyles from "./foundsub.module.css";
import TextInput from "./textinput";
//import sjPic from "../vector_art/sj_loop.jpg";
import { Roboto } from "next/font/google";
import DotLoader from "react-spinners/DotLoader";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
});

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#2fbeea",
};

const FoundSub = (props) => {
  const { introRan, typewriterText, onSubmit, inputValue, onChange, isBusy } =
    props;

  return (
    <main className={roboto.className}>
      <div className={foundStyles.subContainer}>
        <div className={foundStyles.formContainer}>
          <div className={foundStyles.upper}>
            <div className={foundStyles.left}>
              {isBusy ? (
                <div className={foundStyles.loaderBox}>
                  <DotLoader
                    color="aqua"
                    loading={isBusy}
                    cssOverride={override}
                    size={40}
                    aria-label="Loading Spinner"
                  />
                </div>
              ) : (
                <div className={foundStyles.baz}>
                  {typewriterText?.split("\n").map((t, key) => {
                    return (
                      <p key={key} className={foundStyles.botGraph}>
                        {t}
                      </p>
                    );
                  })}
                </div>
              )}
            </div>
            <div className={foundStyles.right}>
              <div className={foundStyles.rightUpper}>
                <img
                  className={foundStyles.geoImg}
                  src="https://res.cloudinary.com/dd8ewixm7/image/upload/v1740705223/geo_fmr4v0.gif"
                  height={120}
                  alt="artistic picture of a man in a suit"
                />
              </div>
              <div className={foundStyles.rightLower}>
                <div className={foundStyles.rightLowerTextBox}>
                  <p className={foundStyles.rightLowerGraph}>
                    Peitho is a RAG-enhanced, agentic LLM cluster.
                  </p>

                  <p className={foundStyles.rightLowerGraph}>
                    Tool access includes web search, limited to domain-specific
                    queries, plus a local vector database.
                  </p>

                  <p className={foundStyles.rightLowerGraph}>
                    Chain of Thought plus proprietary prompt sequencing and
                    context provisioning optimize critical reasoning.
                  </p>
                  <p className={foundStyles.rightLowerGraph}>
                    Ask Peitho how sjDev can help your organization grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <form className={foundStyles.inputForm} onSubmit={onSubmit}>
            <TextInput
              name="prompt"
              value={inputValue}
              onChange={onChange}
              id="target-element"
            />
          </form>
        </div>
      </div>
    </main>
  );
};

export default FoundSub;

/*
      <div className={foundStyles.upperDialogBox}>
        <div className={foundStyles.leftTextBox}>
          <div className={foundStyles.foundScrollText}>
            <div className={foundStyles.baz}>
              {typewriterText?.split("\n").map((t, key) => {
                return (
                  <p key={key} className={foundStyles.botGraph}>
                    {t}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className={foundStyles.rightTextBox}>
          <div className={foundStyles.scrollText}>
            <div className={foundStyles.imageContainer}>
              <div className={foundStyles.imageContainer2}>
                {/* 
                  <img
                    style={{
                      borderRadius: "22px 0px",
                      margunRight: "5px",
                      height: "170px",
                    }}
                    src=""
                  />
                  
                  </div>
                  </div>
                </div>
              </div>
            </div>

                      <div className={foundStyles.right}>
            <img
              className={foundStyles.vector}
              src="../../public/budget.jpg"
              height={300}
              width={300}
              alt=""
            />
            test
          </div>
            */
