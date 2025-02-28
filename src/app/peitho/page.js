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
    "G reetings.  I'm Pietho, Steven Jannette's AI agent.  Steven is a technologist and full-stack engineer.  Ask me anything about him, I'm an expert."
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleOnChange = useCallback((e) => {
    setInputValue(e.target.value);
  });

  useEffect(() => {
    if (!text || text.length < 2) {
      return;
    }
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
    e.preventDefault();
    if (!inputValue || inputValue.length < 2) {
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
    console.log("send prompt fired");
    const promptText = JSON.stringify({ prompt: promptValue });
    const response = await fetch(`https://www.sjdev.co:3001/v1/lm-cr-query`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: promptText,
    });
    const data = await response.json();

    setText(data);
  }

  return (
    <div className={founderStyles.container}>
      <div className={styles.foundSubContainer}>
        <FoundSub
          onSubmit={onSubmit}
          typewriterText={typewriterText}
          inputValue={inputValue}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
};

export default Founder;
