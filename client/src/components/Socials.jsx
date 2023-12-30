import React from "react";
import { useState } from "react";

const Socials = () => {
  const [showMessage, showCancle] = useState(false);

  function overlay() {
    showCancle(false);
  }

  return (
    <>
      {/* Contact btn */}
      <div className=" z-[1000] " onClick={() => showCancle(!showMessage)}>
        <i
          class={` blury py-2 rounded-full shadow-lg flex items-center justify-center ${
            showMessage ? "px-4" : "px-3"
          } fixed top-[90%] text-3xl text-blue-600 right-6  fa-solid ${
            showMessage ? "fa-xmark " : "fa-comment-dots"
          } `}
        ></i>
      </div>

      {/* Social media */}
      <section
        className={` z-[1000] top-[90%] shadow-lg dark:shadow-slate-900  blury  fixed  right-[75px] flex rounded-full flex-row gap-[50px] p-6 ${
          showMessage ? "flex" : "hidden"
        } `}
      >
        <i class="fa-brands fa-twitter fa-2xl text-[#347af4] "></i>
        <i class="fa-brands fa-instagram text-black dark:text-white fa-2xl"></i>
        <i class="fa-brands fa-whatsapp fa-2xl text-[#19f027]"></i>
      </section>

      {/* Overlay */}
      <div onPointerEnter={overlay}
        className={` ${
          showMessage ? "block" : "hidden"
        } fixed w-full h-full bg-[#00000000] top-0 left-0 right-0 z-[900]`}
      ></div>
    </>
  );
};

export default Socials;
