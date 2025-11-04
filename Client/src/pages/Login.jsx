import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  // const [currentState, setCurrentState] = useState("Login");

  const onSubmitHandler = (e) =>{
    e.preventDefault()
  }
  return (
    <main className="flex justify-center items-center h-screen bg-white ">
      <form className="flex flex-col w-[350px] p-6" onSubmit={onSubmitHandler}>
        <h2 className="text-3xl text-center mb-6">{currentState} —</h2>

        {currentState === "Login" ? (
          ""
        ) : (
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-400 px-4 py-2 mb-4 focus:outline-none"
            required
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="border border-gray-400 px-4 py-2 mb-4 focus:outline-none"
          required
        />
        <input
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
            <a href="#" className="hover:font-bold">
              Login Here
            </a>
          ) : (
            <a href="#" className="hover:font-bold">
              Create a account
            </a>
          )}
        </div>
        <button className="border-1 w-full mt-5 p-2 rounded-lg text-bold bg-black text-white hover:bg-gray-900 cursor-pointer"> {currentState === 'Login' ? 'Sign In' : 'Sign Up' }</button>
      </form>
    </main>
  );
};

export default Login;
