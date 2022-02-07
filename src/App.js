import React, { useEffect } from "react";
import Container from "./components/Container";
import Sidebar from "./components/Sidebar";
import { Routes, Route, useNavigate } from "react-router-dom";
import { fetchUser } from "./utils/fetchUser";
import Login from "./pages/Login";
import Home from "./pages/Home";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = fetchUser();
    if (!user) navigate("/login");
  }, [navigate]);

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
