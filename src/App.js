import React from "react";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import EnrollCourse from "./pages/EnrollCourse";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="enroll" element={<EnrollCourse />} />
        <Route path="dashboard/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
