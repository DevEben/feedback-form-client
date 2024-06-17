import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import FeedbackForm from "./pages/FeedbackForm";
import AdminDashboard from "./pages/AdminDashboard";
import LoginAndSignUp from "./pages/Login&SignUp";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route index element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/login-signUp" element={<LoginAndSignUp />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
