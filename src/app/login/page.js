"use client";
import { useState } from "react";
import Button from "../../../src/components/button";
//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
//import { Link, useNavigate, createSearchParams } from "react-router-dom";
import Link from "next/link";
import "./login.module.css";

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
    <div className="login-container">
      <div className="login-form-wrapper">
        <form className="login-form">
          <div className="login-header">
            <h2 className="login-header-text">Login for Account Access</h2>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="emailInput"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isBusy}
            ></input>
            <label htmlFor="emailInput" className="form-label">
              Email
            </label>
          </div>
          <div className="password-input-container">
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
              <label htmlFor="passwordInput" className="form-label">
                Password
              </label>
              <button className="recover-link" onClick={handleClick}>
                Forgot password?
              </button>
            </div>
          </div>
          <div className="alert-box">
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
