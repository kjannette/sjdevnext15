import React from "react";
import foundStyles from "./foundsub.module.css";
import TextInput from "./textinput";
//import sjPic from "../vector_art/sj_loop.jpg";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
});

const FoundSub = (props) => {
  const { introRan, typewriterText, onSubmit, inputValue, onChange, isBusy } =
    props;
  return (
    <div className={foundStyles.subContainer}>
      <div className={foundStyles.formContainer}>
        <div className={foundStyles.upper}>
          <div className={foundStyles.left}>
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
          <div className={foundStyles.right}>
            {" "}
            <img
              className={foundStyles.pixImg}
              src="https://res.cloudinary.com/dd8ewixm7/image/upload/v1740705223/geo_fmr4v0.gif"
              height={120}
              alt="artistic picture of a man in a suit"
            />
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
