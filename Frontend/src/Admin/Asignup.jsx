// src/pages/Asignup.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Home from '../Componenets/Home';

const Asignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { name, email, password };

    axios
      .post("http://localhost:4000/asignup", payload)
      .then((result) => {
        alert('Account created');
        console.log(result);
        navigate('/alogin');
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to create an account");
      });
  };

  let formHandle1 = (e) => {
    e.preventDefault();
    navigate("/alogin");
  };

  return (
    <div>
      {/* Navbar */}
      <Home />

      {/* Signup Page Content */}
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/006/262/479/large_2x/white-and-blue-tone-abstract-background-backdrop-for-presentation-design-for-website-concept-of-beauty-and-health-business-brochure-free-photo.jpg')" }}
      >
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">

          {/* Right Side: Image */}
          <div className="hidden md:block md:w-1/2">
            <img
              src="https://i.pinimg.com/564x/64/7b/9e/647b9e01337f59a80c776c2d0bd7e317.jpg"
              alt="Signup Image"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Left Side: Signup Form */}
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Seller Registration</h2>
            <form className="space-y-6 w-80" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Type your name here..."
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Type your email here..."
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Type your password here..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded transition"
              >
                Sign Up
              </button>
              <div className="mt-4 text-sm text-gray-600">
                <span>
                  Already have an account?{" "}
                  <button
                    onClick={formHandle1}
                    className="text-blue-500 hover:underline"
                  >
                    Login
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Asignup;
