import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (

  
    <div className=" flex gap-6 sm:hidden ">
      <Link to={"signIn"} className=" z-[99] h-11 text-white bg-blue-700 text-center p-2 w-[40%] rounded-full sign2">
        Login
      </Link>

      <Link
        to={"signUp"}
        className="h-11 text-center border-black border-[2px] dark:border-white  z-[99] p-2 w-[40%] rounded-full sign"
      >
        Sign Up
      </Link>

     
    </div>
  );
};

export default Login;
