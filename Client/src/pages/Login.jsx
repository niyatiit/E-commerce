import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ShopContext } from "../context/ShopContext";

const Login = () => {
  // const [currentState, setCurrentState] = useState("Sign Up");
  const [currentState, setCurrentState] = useState("Login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { backendUrl, token, setToken, navigate } = useContext(ShopContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          password,
          email,
        });
        console.log(response.data);
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        console.log(response.data);
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  });

   useEffect(()=>{
      if(!token && localStorage.getItem('token'))
      {
        setToken(localStorage.getItem('token'))
      }
    },[])
  return (
    <main className="flex justify-center items-center h-screen bg-white ">
      <form className="flex flex-col w-[350px] p-6" onSubmit={onSubmitHandler}>
        <h2 className="text-3xl text-center mb-6">{currentState} —</h2>

        {currentState === "Login" ? (
          ""
        ) : (
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Name"
            className="border border-gray-400 px-4 py-2 mb-4 focus:outline-none"
            required
          />
        )}

        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
          className="border border-gray-400 px-4 py-2 mb-4 focus:outline-none"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
          className="border border-gray-400 px-4 py-2 mb-2 focus:outline-none"
          required
        />

        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <a href="#" className="hover:font-bold">
            Forgot your password?
          </a>

          {currentState === "Login" ? (
            <a
              href="#"
              className="hover:font-bold"
              onClick={() => setCurrentState("Sign Up")}
            >
              Create a Account
            </a>
          ) : (
            <a
              href="#"
              className="hover:font-bold"
              onClick={() => setCurrentState("Login")}
            >
              Login Here
            </a>
          )}
        </div>
        <button className="border-1 w-full mt-5 p-2 rounded-lg text-bold bg-black text-white hover:bg-gray-900 cursor-pointer">
          {" "}
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>
      </form>
    </main>
  );
};

export default Login;
