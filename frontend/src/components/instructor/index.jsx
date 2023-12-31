import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { inputData } from "../data/formdata";
import FormInput from "../components/form/input";
const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setEmail("edidie@gmail.com");
    setPassword("eAdg145%1");
  }, [setEmail, setPassword]);

  return (
    <HomeStyles className="flex column">
      <Header />
      <div className="login_wrapper">
        <div className="w-90 auto flex item-center justify-center">
          <div className="login_form_wrapper flex column item-start gap-2">
            <div className="flex w-100 column gap-1">
              <h4 className="fs-16 w-100 text-start text-extra-bold text-grey">
                Log in to your Cdemy account
              </h4>
              <div className="w-100 flex item-center gap-2 btn btn-1 fs-16 text-bold">
                <FcGoogle fontSize={"36px"} />
                Continue with Google
              </div>
              <div className="w-100 flex item-center gap-2 btn btn-1 fs-16 text-bold">
                <FaFacebook fontSize={"36px"} />
                Continue with Facebook
              </div>
              <div className="w-100 flex column gap-2">
                <FormInput
                  required={true}
                  value={email}
                  label={"Email"}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                />
                <FormInput
                  required={true}
                  value={password}
                  label={"Password"}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                />
              </div>
            </div>
            <button className="w-100 text-center gap-2 btn btn-2 fs-16 text-bold">
              Log in
            </button>
            <div className="auth_bottom w-100 flex item-center justify-center">
              <span
                style={{ gap: "4px" }}
                className="fs-14 text-light flex item-center justify-center text-grey"
              >
                Don't have an account?{" "}
                <Link
                  style={{ textDecoration: "underline" }}
                  to={"/register"}
                  className="text-blue fs-16 text-extra-bold"
                >
                  Sign up
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </HomeStyles>
  );
};

const HomeStyles = styled.div`
  width: 100%;
  position: relative;
  min-height: 100vh;
  .login_wrapper {
    /* width:100% */
    .login_form_wrapper {
      margin: 4rem auto;
      display: flex;
      width: 36%;
      align-items: center;
      padding: 2rem 5.5rem;
      flex-direction: column;
      .auth_bottom {
        padding-top: 1rem;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
      }
      @media (max-width: 780px) {
        width: 60%;
        padding: 4rem 2rem;
      }
      @media (max-width: 480px) {
        width: 90%;
        padding: 4rem 2rem;
      }
    }
  }
`;

export default Login;
