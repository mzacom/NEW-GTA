import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LandingPage,
  SignIn,
  SignUp,
  DashBoard,
  Notification,
  Window,
  Academcy,
} from "./pages/pages";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="window" element={<Window />} />
          <Route path="notification" element={<Notification />} />
          <Route path="dashBoard" element={<DashBoard />} />
          <Route path="academy" element={<Academcy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
