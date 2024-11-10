import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Home from '../Componenets/Home';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { name, email, password };

    axios
      .post("http://localhost:4000/signup", payload)
      .then((result) => {
        alert('Account created');
        console.log(result);
        navigate('/login');
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to create an account");
      });
  };

  const formHandle1 = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div>
      <Home /> {/* Home Component */}

      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/previews/006/262/479/large_2x/white-and-blue-tone-abstract-background-backdrop-for-presentation-design-for-website-concept-of-beauty-and-health-business-brochure-free-photo.jpg')",
        }}
      >
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
          {/* Right Side: Image */}
          <div className="hidden md:block md:w-1/2">
            <img
              src="https://i.pinimg.com/564x/3d/70/44/3d7044f4b0fe57dfb2f414ae643e8285.jpg"
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
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded transition"
                >
                  Signup
                </button>
              </div>
              <div className="text-sm text-gray-600">
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

export default Signup;
