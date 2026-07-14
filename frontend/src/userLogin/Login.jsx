import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosLogIn } from "react-icons/io";
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  function changeHandler(e) {
    const { value, name } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    toast.success("Successfully logged In!");
    console.log(data);
    setData({ email: "", password: "" });
    navigate('/'); 
  }

  return (
    <div className='min-h-screen bg-gray-50 flex justify-center items-center p-6 font-sans'>
      <div className='w-full max-w-md bg-white rounded-2xl shadow-md border border-gray-100 p-8 md:p-10 transition-all duration-300 hover:shadow-lg'>
        
        <form onSubmit={submitHandler} className='space-y-6'>
          {/* Header */}
          <div className='text-center pb-2'>
            <h2 className='text-3xl font-bold text-gray-800'>Welcome Back</h2>
            <p className='text-gray-400 text-sm mt-1.5'>Login to access your ShopSphere account</p>
          </div>

          {/* Decorative Divider */}
          <div className='h-[1px] w-full bg-gray-100 rounded-full'></div>

          {/* Email Field */}
          <div className='flex flex-col gap-1.5'>
            <label className='text-sm font-medium text-gray-700'>Email Address</label>
            <input
              type='email'
              placeholder='Enter Your Email'
              required
              name='email'
              value={data.email}
              onChange={changeHandler}
              className='w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-800 outline-none transition-all duration-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-100'
            />
          </div>

          {/* Password Field */}
          <div className='flex flex-col gap-1.5'>
            <div className='flex justify-between items-center'>
              <label className='text-sm font-medium text-gray-700'>Password</label>
              <a href="#forgot" className='text-xs font-semibold text-purple-600 hover:underline'>Forgot password?</a>
            </div>
            <input
              type='password'
              placeholder='••••••••'
              required
              name='password'
              value={data.password} 
              onChange={changeHandler}
              className='w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-800 outline-none transition-all duration-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-100'
            />
          </div>

          {/* Login Button */}
          <div className='pt-2'>
            <button
              type='submit'
              className='w-full py-3 px-4 font-semibold text-white bg-purple-600 rounded-lg shadow-sm transition-all duration-200 hover:bg-purple-700 active:transform active:scale-[0.99] focus:ring-4 focus:ring-purple-200 flex items-center justify-center gap-2'
            >
              <span>Login</span>
              <IoIosLogIn className='text-xl' />
            </button>
          </div>

          {/* Footer Register Link */}
          <p className='text-center text-sm text-gray-500 pt-1'>
            Don't have an account?{' '}
            <span 
              onClick={() => navigate('/sign-up')} 
              className='text-purple-600 font-semibold cursor-pointer hover:underline'
            >
              Sign up
            </span>
          </p>

        </form>
      </div>
    </div>
  );
};

export default Login;