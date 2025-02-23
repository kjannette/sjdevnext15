"use client";
import { useState } from "react";
import Button from "../../../src/components/button";
//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
//import { Link, useNavigate, createSearchParams } from "react-router-dom";
import Link from "next/link";
import loginStyles from "./login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [isBusy, setIsBusy] = useState(false);
  const [password, setPassword] = useState("");

  //const navigate = useNavigate();

  //const auth = getAuth();

  const [notice, setNotice] = useState("");
  //const [searchParams, setSearchParams] = useSearchParams();
  const userLogin = async (e) => {
    e.preventDefault();
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
    <div className={loginStyles.loginContainer}>
      <div className="loginForm-Wrapper">
        <form className="login-form">
          <div className="loginHeader">
            <h2 className="loginHeaderText">Login to Your Account</h2>
          </div>
          <div className="formFloating">
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
          <div className="passwordInputContainer">
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="passwordInput"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isBusy}
              ></input>
              <label htmlFor="passwordInput" className="formLabel">
                Password
              </label>
              <button className="recoverLink" onClick={handleClick}>
                Forgot password?
              </button>
            </div>
          </div>
          <div className="alertBox">
            {"" !== notice && (
              <div className="login-alert" role="alert">
                {notice}
              </div>
            )}
          </div>
          <div className="login-button-wrapper">
            <Button
              className="primary-button"
              onClick={(e) => userLogin(e)}
              labelText="Submit"
              disabled={isBusy}
            />
          </div>
          <div className="mt-3 text-center">
            <div className="register-box">
              <Link className="create-link" href="/signup">
                Create an account.
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
