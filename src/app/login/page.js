"use client";
import { useState } from "react";
import Button from "../../../src/components/button";
//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
//import { Link, useNavigate, createSearchParams } from "react-router-dom";
import Link from "next/link";
import loginStyles from "./login.module.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  display: "swap",
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500"],
  subsets: ["latin"],
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [isBusy, setIsBusy] = useState(false);
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  //const navigate = useNavigate();

  //const auth = getAuth();

  const [notice, setNotice] = useState("");
  //const [searchParams, setSearchParams] = useSearchParams();
  const userLogin = async (e) => {
    e.preventDefault();
    setShowAlert(!showAlert);
    return;
    if (isBusy) {
      return;
    }
    setIsBusy(true);
    setNotice("");

    try {
      console.log("auth, email, password", auth, email, password);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Signed in
      userCredential?.user && navigate("/dashboard");
    } catch (error) {
      console.log("error", error);
      if (
        ["auth/invalid-login-credentials", "auth/invalid-email"].includes(
          error.code
        )
      ) {
        setNotice("Incorrect email or password.");
      } else {
        setNotice(`Error occured (${error.code}).`);
      }
    } finally {
      setIsBusy(false);
    }
  };

  const mode = "enterEmail";

  function handleClick(e) {
    e.preventDefault();
    return;
    //searchParams.set("mode", mode);
    //setSearchParams(searchParams);
    //navigate(`/passwordreset/?mode=enterEmail`);
    navigate({
      pathname: "/passwordreset/",
      search: `?${createSearchParams({
        mode: "enterEmail",
      })}`,
    });
  }

  return (
    <main className={roboto.variable}>
      <div className={loginStyles.loginContainer}>
        <div className={loginStyles.loginInnerContainer}>
          <div className={loginStyles.loginFormWrapper}>
            <form className={loginStyles.loginForm}>
              <div className={loginStyles.loginHeader}>
                <h2 className={loginStyles.loginHeaderText}>
                  Login To Your Account
                </h2>
              </div>
              <div className={loginStyles.passwordInputContainer}>
                <label
                  htmlFor="emailInput"
                  className={loginStyles.loginLabelText}
                >
                  Email
                </label>
                <input
                  type="email"
                  className={loginStyles.input}
                  id="emailInput"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isBusy}
                ></input>
              </div>
              <div className={loginStyles.passwordInputContainer}>
                <label
                  htmlFor="emailInput"
                  className={loginStyles.loginLabelText}
                >
                  Password
                </label>
                <input
                  type="password"
                  id="passwordInput"
                  value={password}
                  className={loginStyles.input}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isBusy}
                ></input>
              </div>
              <div className={loginStyles.passwordInputContainer}>
                <div className={loginStyles.submitContainer}>
                  <Button
                    //className="primary-button"
                    onClick={(e) => userLogin(e)}
                    labelText="Submit"
                    disabled={isBusy}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;

/*

            <div className={loginStyles.loginHeader}>
              <h2 className={loginStyles.loginHeaderText}>
                Login to Your Account
              </h2>
            </div>
            <div className={loginStyles.passwordInputContainer}>
              <input
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isBusy}
              ></input>
              <label htmlFor="emailInput" className="formLabel">
                Email
              </label>
            </div>
            <div className={loginStyles.passwordInputContainer}>
              <div className={loginStyles.formFloating}>
                <input
                  type="password"
                  className="form-control"
                  id="passwordInput"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isBusy}
                ></input>
                <label
                  htmlFor="passwordInput"
                  className={loginStyles.formLabel}
                >
                  Password
                </label>
              </div>
            </div>
            <div className={loginStyles.alertBox}>
              {"" !== notice && (
                <div className={loginStyles.loginAlert} role="alert">
                  {notice}
                </div>
              )}
            </div>
            <div className={loginStyles.loginButtonWrapper}>
              <Button
                //className="primary-button"
                onClick={(e) => userLogin(e)}
                labelText="Submit"
                disabled={isBusy}
              />
            </div>
            <div>
              {" "}
              <button className={loginStyles.recoverLink} onClick={handleClick}>
                Forgot password?
              </button>
            </div>
*/
