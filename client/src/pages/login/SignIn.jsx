import { useState } from "react";
import { logo } from "../../assets";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [inputValues, setInputValues] = useState({
    input1: "",
    input2: "",
  });
  // password visibility
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <section className=" dark:text-white flex-col justify-center  text-center fixed mx-auto w-full flex  items-center  ">
        {/* introduction section */}
        <section className="  ss:w-[80%] w-full flex-col  flex px-[20px] ">
          {/* Logo and language */}
          <div className=" flex items-center justify-between w-full ">
            <img src={logo} className=" w-[50px] mt-3 " alt="" />

            {/* Language changing */}
            <div className=" items-center flex text-[14px] pt-3 ">EN</div>
          </div>

          {/* Short intro */}
          <p className=" lx:mt-[4rem] text-[14px]">
            Welcom to{" "}
            <span className=" font-bold ">Gabriel Trading Academy</span>
          </p>
          <br />

          <p className=" text-[11px]  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt .{" "}
          </p>
        </section>

        <form className=" ss:w-[70%] lg:w-[55%] ss:p-[4rem]  flex rounded-lg shadow-lg p-[20px] w-[90%] text-[15px]  flex-col  gap-3 ">
          <div className="">
            <p className=" text-[17px] ">Sign In</p>
            <p className=" text-[12px] text-slate-500">
              to access your account
            </p>
          </div>

          <div>
            <label htmlFor="username"> </label>
            <input
              type="text"
              id="username"
              name="input1"
              value={inputValues.input1}
              onChange={(e) =>
                setInputValues({
                  ...inputValues,
                  [e.target.name]: e.target.value,
                })
              }
              placeholder="Username"
              className=" dark:bg-black dark:border-white  bg-white border-[1px] outline-none border-slate-700 rounded-lg p-2 w-full "
            />
          </div>

          <div className=" flex items-center">
            <label htmlFor="password"> </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="input2"
              value={inputValues.input2}
              onChange={(e) =>
                setInputValues({
                  ...inputValues,
                  [e.target.name]: e.target.value,
                })
              }
              placeholder="Password"
              className=" dark:bg-black dark:border-white  outline-none border-[1px] border-slate-700 rounded-lg p-2 w-full "
            />

            <i
              class={`fa-solid ${
                showPassword ? "fa-eye" : " fa-eye-slash "
              }  ml-[-2rem] text-slate-500 `}
              onClick={() => setShowPassword((prev) => !prev)}
            ></i>
          </div>

          <button
            type="submit"
            disabled={!inputValues.input1 || !inputValues.input2}
            className={`${
              !inputValues.input1 || !inputValues.input2
                ? "bg-slate-400"
                : "bg-blue-500"
            } p-[10px] lx:mt-[20px] rounded-[10px] text-white`}
          >
            Sign In
          </button>

          <p>
            <a href="http://" className=" text-blue-600 text-[12px] ">
              Forgot your password?
            </a>
          </p>
          <br />
        </form>
        <br />
        <div className="text-left text-[15px] ">
          Don't have an account?{" "}
          <Link to={"/signUp"} className=" text-[blue] ">
            {" "}
            Sign Up{" "}
          </Link>
        </div>
        <p className=" text-[12px] font-light text-slate-600 p-[30px] ">
          Contact us at{" "}
          <span className=" text-blue-600">
            gabrieltradingacademy@gmail.com
          </span>{" "}
          if you have problem
        </p>
      </section>
    </>
  );
};

export default SignIn;
