"use client";
import { useEffect, useState, useCallback } from "react";
import styles from "./founder.module.css";
import founderStyles from "./founder.module.css";
import FoundSub from "../../components/foundSub";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
});

const Founder = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const [text, setText] = useState(
    "G reetings.  I'm Pietho, an (AI) associate here at sjDev.  Our mission is to empower organizations to achieve their goals.  \n I’m here to answer questions about our services.  \n I can also discuss our founder, Steven Jannette's professional background and enthusiasm for technology as an engine of growth.  \n How can I help?"
  );
  const [isBusy, setIsBusy] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleOnChange = useCallback((e) => {
    setInputValue(e.target.value);
  });

  function checkRan() {
    // Retrieve the object from storage
    const temp = localStorage.getItem("didRun");
    const didRun = JSON.parse(temp);
    if (!didRun) {
      return false;
    } else {
      return didRun;
    }
  }

  useEffect(() => {
    if (!text || text.length < 2) {
      return;
    }

    const runCheck = checkRan();
    console.log("runCheck", runCheck);
    if (runCheck.ran === 1) {
      setText("Pietho here!  How can I help you?");
    }

    const didRun = { ran: 1 };
    localStorage.setItem("didRun", JSON.stringify(didRun));

    let index = 0;
    const timer = setInterval(() => {
      setTypewriterText(
        (prevTypewriterText) => prevTypewriterText + text?.charAt(index)
      );
      index++;
      if (index === text.length) {
        clearInterval(timer);
      }
    }, 30); // adjust timing here

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  useEffect(() => {
    if (!text || text.length < 2) {
      return;
    }
    if (runCheck.ran < 1) {
      return;
    }

    const didRun = { ran: 1 };
    localStorage.setItem("didRun", JSON.stringify(didRun));

    let index = 0;
    const timer = setInterval(() => {
      setTypewriterText(
        (prevTypewriterText) => prevTypewriterText + text?.charAt(index)
      );
      index++;
      if (index === text.length) {
        clearInterval(timer);
      }
    }, 30); // adjust timing here

    return () => clearInterval(timer); // cleanup on unmount
  }, [text]);

  function onSubmit(e) {
    setIsBusy(true);
    e.preventDefault();
    if (!inputValue || inputValue.length < 2) {
      setIsBusy(false);
      return;
    } else {
      const promptValue = inputValue;
      setInputValue("");
      setText(" ");
      setTypewriterText(" ");
      sendPrompt(promptValue);
    }
  }

  async function sendPrompt(promptValue) {
    const promptText = JSON.stringify({ prompt: promptValue });
    console.log("send prompt fired, request:", promptText);
    const response = await fetch(`https://www.sjdev.co/v1/lm-cr-query/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: promptText,
    });
    const data = await response.json();

    setText(data);
    setIsBusy(false);
  }

  return (
    <div className={founderStyles.foundContainer}>
      <div className={styles.foundSubContainer}>
        <FoundSub
          onSubmit={onSubmit}
          typewriterText={typewriterText}
          inputValue={inputValue}
          onChange={handleOnChange}
          isBusy={isBusy}
        />
      </div>
    </div>
  );
};

export default Founder;
