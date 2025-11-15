import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const backendUrl = "http://localhost:3000";
export const currency = '$'

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  useEffect(() => {
    setToken(token);
    localStorage.setItem("token", token);
  }, [token]);
  useEffect(()=>{
    setToken(token);
  },[token])
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
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List/>} />
            <Route path="/orders" element={<Orders token={token}/>} />
          </Routes>{" "}
        </>
      )}
    </>
  );
};

export default App;
