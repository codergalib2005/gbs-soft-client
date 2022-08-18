import React, { createContext, useEffect, useState } from "react";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import EnrollCourse from "./pages/EnrollCourse";
import Dashboard from "./pages/Dashboard";
import 'react-toastify/dist/ReactToastify.css';
import { authorization, token } from "./API";
import axios from "axios";
import Home from "./pages/Home";
import Courses from "./pages/Courses";


export const UserToken = createContext();
const App = () => {
  const [user, setUser] = useState(null);
  const getPersonalDashboard = async () => {
    try {
      const response = await axios.get("/personal_dashboard", authorization);
      console.log(response);
    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    console.log(getPersonalDashboard(token));
  }, [])
  return (
    <UserToken.Provider value={{ user }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="enroll" element={<EnrollCourse />} />
          <Route path="courses" element={<Courses />} />
          <Route path="dashboard/*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </UserToken.Provider>
  );
};

export default App;
