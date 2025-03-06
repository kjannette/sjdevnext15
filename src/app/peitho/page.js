"use client";
import { useEffect, useState, useCallback } from "react";
import styles from "./founder.module.css";
import founderStyles from "./founder.module.css";
import FoundSub from "../../components/foundSub";
import { Roboto } from "next/font/google";
import { useRouter } from "next/navigation";
import { collection, setDoc, doc } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { v4 as uuidv4 } from "uuid";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
});

const Founder = () => {
  const [typewriterText, setTypewriterText] = useState(" ");
  const [text, setText] = useState("");
  const [isBusy, setIsBusy] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleOnChange = useCallback((e) => {
    setInputValue(e.target.value);
  });
  const [visited, setVisited] = useState(false);
  async function savePromptData(data) {
    const currentdate = new Date();
    const datetime =
      "Posted: " +
      currentdate.getDate() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear() +
      " @ " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();
    const promptString = JSON.stringify(data);
    const promptObj = { promptValue: promptString, date: datetime };
    const queryId = uuidv4();
    try {
      const collecRef = collection(db, "peitho");
      await setDoc(doc(collecRef, `${queryId}`), promptObj);
    } catch (error) {
      console.log(`Error saving new user to db: ${error}`);
    }
  }

  function type(newText) {
    const timer = setInterval(() => {
      setTypewriterText(
        (prevTypewriterText) => prevTypewriterText + newText?.charAt(index)
      );
      index++;
      if (index === text.length) {
        clearInterval(timer);
      }
    }, 30); // adjust timing here
  }

  useEffect(() => {
    const visited = localStorage.getItem("visited");
    if (visited) {
      setText(" ");
      setText("How can I help?");
      return;
    } else {
      localStorage.setItem("visited", true);
      setText(
        "Greetings.  I'm Peitho, here to answer questions about the services offered by sjDev and founder, Steven. How can I help?"
      );
    }
  }, []);

  useEffect(() => {
    if (!text || text.length < 2) {
      return;
    }
    if (visited) {
      return;
    }
    let index = -1;
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
      savePromptData(promptValue);
      sendPrompt(promptValue);
    }
  }

  async function sendPrompt(promptValue) {
    const promptText = JSON.stringify({ prompt: promptValue });

    //console.log("send prompt fired, request:", promptText);
    const response = await fetch(`https://www.sjdev.co/v1/lm-cr-query/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: promptText,
    });
    const data = await response.json();

    //setText(data);

    setIsBusy(false);
    type(data);
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

/*

    const visited = localStorage.getItem("visited");
    if (visited) {
      setVisited({ visited });
    } else {
      localStorage.setItem("visited", true);
    }
    console.log("visited:", visited);
    if (visited) {
      setText("How can I help?");
    }


    https://stackoverflow.com/questions/57693120/show-specific-text-when-first-page-loads-up
      */
