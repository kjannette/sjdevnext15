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
                  height={90}
                  alt="artistic picture of a man in a suit"
                />
              </div>
              <div className={foundStyles.rightLower}>
                <div className={foundStyles.rightLowerTextBox}>
                  <p className={foundStyles.rightLowerGraph}>
                    Peitho: An LLM Cluster Architecture
                  </p>

                  <p className={foundStyles.rightLowerGraph}>
                    Claude API is Peitho's inference engine. Proprietary data is transformed to vectorized embeddings via Amazon Titan and added to a FAISS index.
                  </p>

                  <p className={foundStyles.rightLowerGraph}>
                    LangChain orchestrates tooling and workflow, i.e. semantic retrieval at query time based on conceptual similarity and user intent.
                  </p>
                  <p className={foundStyles.rightLowerGraph}>
                    Finally, Custom Chain-of-Thought (CoT) prompting optimizes critical reasoning. Ask Peitho how sjDev can help your organization grow.
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
