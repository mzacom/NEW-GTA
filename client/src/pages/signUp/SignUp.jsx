import React, { useState } from "react";
import { logo } from "../../assets";
import { Link } from "react-router-dom";
import { countries } from "../../constants";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const SignUp = () => {

  

  // agree
  const [isChecked, setIsChecked] = useState(false);

  // password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  // password confirmation

  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // phone
  const [phone, setPhone] = useState("");

  // password correct
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    // Password validation using regular expressions
    const regexLowercase = /[a-z]/;
    const regexUppercase = /[A-Z]/;
    const regexNonLetter = /[^A-Za-z]/;

    if (
      newPassword.length < 6 ||
      !regexLowercase.test(newPassword) ||
      !regexUppercase.test(newPassword) ||
      !regexNonLetter.test(newPassword)
    ) {
      setErrorMessage(
        "Password must have at least 6 characters, 1 lowercase letter, 1 uppercase letter, and 1 non-letter character."
      );
    } else {
      setErrorMessage("");
    }

    setPassword(event.target.value);
    setEmail(e.target.value)
  };

  // confirm password
  const handleConfirmPasswordChange = (event) => {
    const newConfirmPassword = event.target.value;
    setConfirmPassword(newConfirmPassword);

    // Check if the confirm password matches the password
    if (password !== newConfirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
      // Proceed with form submission
    }
  };

  // First name
  const [inputValue, setInputValue] = useState("");
  const [showEmptyMessage, setShowEmptyMessage] = useState(false);
  const handleBlur = () => {
    if (inputValue === "") {
      setShowEmptyMessage(true);
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setShowEmptyMessage(false);
  };

  // last name
  const [inputValue2, setInputValue2] = useState("");
  const [showEmptyMessage2, setShowEmptyMessage2] = useState(false);
  const handleBlur2 = () => {
    if (inputValue2 === "") {
      setShowEmptyMessage2(true);
    }
  };

  {
    /* password*/
  }
  const [inputValue3, setInputValue3] = useState("");
  const [showEmptyMessage3, setShowEmptyMessage3] = useState(false);
  const handleBlur3 = () => {
    if (inputValue3 === "") {
      setShowEmptyMessage3(true);
    }
  };

  const handleChange2 = (e) => {
    setInputValue2(e.target.value);
    setShowEmptyMessage2(false);
  };

  return (
    <section className=" dark:text-white flex-col justify-center  text-center  mx-auto w-full flex  items-center  ">
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
          Welcom to <span className=" font-bold ">Gabriel Trading Academy</span>
        </p>
        <br />

        <p className=" text-[11px]  ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt .{" "}
        </p>
      </section>

      <form
        onSubmit={handleSubmit}
        className=" ss:w-[70%] mt-4 lg:w-[55%] ss:p-[4rem]  flex rounded-lg shadow-lg p-[20px] w-[90%] text-[15px]  flex-col  gap-3 "
      >
        <div className="">
          <p className=" text-[17px] ">Sign Up</p>
          <p className=" text-[12px] text-slate-500">to open your account</p>
        </div>

        {/* First name  */}
        <div>
          <label htmlFor="firstName"> </label>
          <p className=" text-slate-600 mb-1 text-left">First name: </p>
          <input
            type="text"
            id="username"
            value={inputValue}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="e.g: John"
            className={`bg-white dark:bg-black dark:border-white  border-[1px] ${
              showEmptyMessage ? " border-red-600 " : "border-slate-700 "
            }  rounded-lg p-2 w-full`}
          />
          {showEmptyMessage && (
            <p className=" text-[12px] empty-text text-left md:pl-0 md:ml-[5rem] mt-2 text-red-500 ">
              field is required{" "}
            </p>
          )}
        </div>

        {/* Last name */}
        <div className=" mt-2">
          <label htmlFor="firstName"> </label>
          <p className=" text-slate-600 mb-1 text-left">Last name: </p>
          <input
            type="text"
            id="username"
            value={inputValue2}
            onChange={handleChange2}
            onBlur={handleBlur2}
            placeholder="e.g: Huckels"
            className={`bg-white border-[1px] dark:bg-black dark:border-white  ${
              showEmptyMessage2 ? " border-red-600 " : "border-slate-700 "
            }  rounded-lg p-2 w-full`}
          />
          {showEmptyMessage2 && (
            <p className=" text-[12px] empty-text text-left md:pl-0 md:ml-[5rem] mt-2 text-red-500 ">
              field is required{" "}
            </p>
          )}
        </div>

        {/* Country */}
        <label
          className="text-slate-600  mb-[-9px] text-left"
          htmlFor="countries"
        >
          Countries
        </label>
        <select
          className={`bg-white border-[1px] dark:bg-black dark:border-white  outline-none border-slate-700 rounded-lg p-2 w-full`}
          name="countries"
          id="countries"
        >
          {countries.map((country, index) => (
            <option key={index} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>

        {/* phone number  */}
        <div>
          <p className="  text-slate-600 mb-1 text-left">Phone number: </p>

          <PhoneInput
            value={phone}
            className={` dark:bg-black dark:border-white  bg-white border-[1px] border-slate-700 rounded-lg  w-full`}
          />
        </div>

        {/* password */}
        <div className="  w-full flex-col gap-3 flex">
          <label className="text-slate-600 text-left mb-[-9px]">
            Password:
          </label>
          <div className=" w-full flex items-center text-left ">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className={` dark:bg-black dark:border-white bg-white border-[1px] border-slate-700 "
              } rounded-lg p-2 w-full outline-none `}
            />{" "}
            <i
              class={`fa-solid ${
                showPassword ? "fa-eye" : " fa-eye-slash "
              }  ml-[-2rem] text-slate-500 `}
              onClick={() => setShowPassword((prev) => !prev)}
            ></i>
          </div>

          {errorMessage && (
            <p style={{ color: "red", fontSize: "11px", textAlign: "left" }}>
              {errorMessage}
            </p>
          )}
        </div>

        {/* confirm password */}
        <div className="  w-full flex-col gap-3 flex">
          <label className="text-slate-600 mb-[-9px] text-left">
            Confirm password:
          </label>
          <div className=" w-full flex items-center text-left ">
            <input
              type={showPassword2 ? "text" : "password"}
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className={` dark:bg-black dark:border-white bg-white border-[1px] ${
                showEmptyMessage2 ? " border-red-600 " : "border-slate-700 "
              } rounded-lg p-2 w-full outline-none `}
            />
            <i
              class={`fa-solid ${
                showPassword2 ? "fa-eye" : " fa-eye-slash "
              }  ml-[-2rem] text-slate-500 `}
              onClick={() => setShowPassword2((prev) => !prev)}
            ></i>
          </div>
          {error && (
            <p style={{ color: "red", fontSize: "11px", textAlign: "left" }}>
              {error}
            </p>
          )}
        </div>

        {/* agreement */}
        <div className=" mt-3  gap-2 flex w-full ">
          <input
            type="checkbox"
            checked={isChecked}
            className=" outline-none w-4"
            onChange={() => setIsChecked(!isChecked)}
          />
          <p className="text-[13px]  ">
            I agree with{" "}
            <span className=" text-blue-600 ">Customer Agreement</span>
          </p>
        </div>

        {/* sign up button  */}
        <button
          type="submit"
          disabled={!isChecked}
          className={`${
            !isChecked ? " bg-slate-400 " : " bg-blue-700 "
          }  p-[10px] lx:mt-[20px] rounded-[10px] text-white `}
        >
          {" "}
          Sign Up{" "}
        </button>

        <br />
      </form>
      <br />
      <div className="text-left text-[15px] ">
        Already a member?{" "}
        <Link to={"/signUp"} className=" text-blue-600 ">
          {" "}
          Sign In{" "}
        </Link>
      </div>
      <p className=" text-[12px] font-light text-slate-600 p-[30px] ">
        Contact us at{" "}
        <span className=" text-blue-600">gabrieltradingacademy@gmail.com</span>{" "}
        if you have problem
      </p>
    </section>
  );
};

export default SignUp;
