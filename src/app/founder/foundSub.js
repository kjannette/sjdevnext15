import React from "react";
import styles from "./page.module.css";
import foundStyles from "./founder.module.css";
import TextInput from "./TextInput";
import sjPic from "..//vector_art/sj_loop.jpg";
import { DominoSpinner } from "react-spinners-kit";

const FoundSub = (props) => {
  const { introRan, typewriterText, onSubmit, inputValue, onChange, isBusy } =
    props;
  return (
    <div className={foundStyles.subContainer}>
      <div
        style={{
          fontSize: "1.1rem",
          letterSpacing: ".3rem",
          textAlign: "left",
          lineHeight: "1.32",
          height: "540px",
        }}
      >
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
                  <img
                    style={{
                      borderRadius: "22px 0px",
                      margunRight: "5px",
                      height: "170px",
                    }}
                    src={sjPic}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={foundStyles.formContainer}>
        <form className={styles.inputForm} onSubmit={onSubmit}>
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
