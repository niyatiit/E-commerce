import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const backendUrl = "http://localhost:3000";
export const currency = '$'

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <>
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          {" "}
          <Navbar setToken={setToken} />
          <Sidebar />
          <Routes>
            <Route path="/add" element={<Add setToken={setToken}/>} />
            <Route path="/list" element={<List setToken={setToken}/>} />
            <Route path="/orders" element={<Orders setToken={setToken}/>} />
          </Routes>{" "}
        </>
      )}
    </>
  );
};

export default App;
