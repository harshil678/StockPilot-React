import React from "react";
import "@/components/pages/Dwarpal/auth.css";
import Signup from "./Signup";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";

const Auth = () => {
  const navigate = useNavigate();
  return (
    <div className="authContainer h-screen relative ">
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-opacity-50 bg-[#030712]">
        <div className="blurrish absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center  w-[30rem] h-[35rem] rounded-md z-50 bg-black bg-opacity-50 shadow-2xl shadow-primary px-15">
          <h1 className="text-6xl font-bold pb-9">StockPilot</h1>
          {location.pathname == "/signup" ? (
            <section className="w-full">
              <Signup />
              <div className="flex items-center justify-center mt-7">
                <span>Already have account?</span>
                <Button
                  className={"cursor-pointer text-[20px]"}
                  variant={"link"}
                  onClick={() => navigate("/signin")}
                >
                  Signin
                </Button>
              </div>
            </section>
          ) : location.pathname == "/forgot-password" ? (
            <section className="w-full">
              <ForgotPassword />
              <div className="flex items-center justify-center mt-7">
                <Button
                  className={"w-full text-xl cursor-pointer"}
                  variant={"link"}
                  onClick={() => navigate("/signin")}
                >
                  Login
                </Button>
              </div>
            </section>
          ) : (
            <section className="w-full">
              <Login />
              <div className="flex items-center justify-center mt-7">
                <span>Not Registered?</span>
                <Button
                  className={"cursor-pointer text-[20px]"}
                  variant={"link"}
                  onClick={() => navigate("/signup")}
                >
                  Signup
                </Button>
              </div>
              <div className="flex items-center justify-center mt-3">
                <Button
                  className={"w-full text-xl cursor-pointer"}
                  variant={"link"}
                  onClick={() => navigate("/forgot-password")}
                >
                  Reset Password
                </Button>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
