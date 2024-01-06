import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";

const Login = () => {
  return (
    <div className=" flex gap-6 sm:w-[160%] ">
      <Link to={"signIn"} className="h-11 text-center p-2 w-[40%] rounded-full sign2">
        Login
      </Link>

      <Link
        to={"signUp"}
        className="h-11 text-center p-2 w-[40%] rounded-full sign"
      >
        Sign Up
      </Link>
    </div>
  );
};

export default Login;
