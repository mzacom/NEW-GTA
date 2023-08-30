import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage, Login, Register , InitSchool} from "./pages/pages";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="school" element={<InitSchool/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
