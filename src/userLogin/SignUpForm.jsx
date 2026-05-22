import React from 'react';
import { PiSignIn } from "react-icons/pi";
import { useForm } from 'react-hook-form';
import { addUser } from '../features/login/SignUp';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.signIn.loginData);
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm();

  async function submitHandler(data) {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Shortened to 3s for snappier feedback
    dispatch(addUser(data));
    console.log("User added", data);
    toast.success("Successfully logged in!");
    navigate('/');
  }

  // Watch password to validate confirmPassword match
  const password = watch('password');

  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center p-6 font-sans'>
      <div className='w-full max-w-2xl bg-white rounded-2xl shadow-md border border-gray-100 p-8 md:p-10 transition-all duration-300 hover:shadow-lg'>
        
        {/* Header */}
        <div className='text-center mb-8 border-b border-gray-100 pb-5'>
          <h1 className='text-3xl font-bold text-gray-800 flex items-center justify-center gap-2'>
            <span>Sign Up</span> 
            <PiSignIn className='text-purple-600' />
          </h1>
          <p className='text-gray-400 text-sm mt-1'>Create your ShopSphere account to start shopping</p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit(submitHandler)} className='space-y-6'>
          
          {/* Name Row */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='flex flex-col gap-1.5'>
              <label className='text-sm font-medium text-gray-700'>First Name</label>
              <input  
                type="text"
                placeholder="John"
                className={`w-full px-4 py-2.5 rounded-lg border bg-white text-gray-800 outline-none transition-all ${errors.firstName ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100'}`}
                {...register('firstName', {
                  required: "First name is required",
                  minLength: { value: 3, message: "Min length is 3 characters" }
                })}
              />
              {errors.firstName && <span className='text-xs font-medium text-red-500 mt-0.5'>{errors.firstName.message}</span>}
            </div>

            <div className='flex flex-col gap-1.5'>
              <label className='text-sm font-medium text-gray-700'>Last Name</label>
              <input  
                type="text"
                placeholder="Doe"
                className={`w-full px-4 py-2.5 rounded-lg border bg-white text-gray-800 outline-none transition-all ${errors.lastName ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100'}`}
                {...register('lastName', { required: "Last name is required" })}
              />
              {errors.lastName && <span className='text-xs font-medium text-red-500 mt-0.5'>{errors.lastName.message}</span>}
            </div>
          </div>

          {/* Phone Number */}
          <div className='flex flex-col gap-1.5'>
            <label className='text-sm font-medium text-gray-700'>Phone Number</label>
            <input 
              type="tel"
              placeholder="10-digit number"
              className={`w-full px-4 py-2.5 rounded-lg border bg-white text-gray-800 outline-none transition-all ${errors.PhNo ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100'}`}
              {...register('PhNo', {
                required: "Phone number is required",
                maxLength: { value: 10, message: "Maximum 10 digits allowed" },
                minLength: { value: 10, message: "Minimum 10 digits required" }
              })}
            />
            {errors.PhNo && <span className='text-xs font-medium text-red-500 mt-0.5'>{errors.PhNo.message}</span>}
          </div>

          {/* Passwords Row */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='flex flex-col gap-1.5'>
              <label className='text-sm font-medium text-gray-700'>Password</label>
              <input 
                type="password"
                placeholder="••••••••"
                className={`w-full px-4 py-2.5 rounded-lg border bg-white text-gray-800 outline-none transition-all ${errors.password ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100'}`}
                {...register('password', {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" }
                })}
              />
              {errors.password && <span className='text-xs font-medium text-red-500 mt-0.5'>{errors.password.message}</span>}
            </div>

            <div className='flex flex-col gap-1.5'>
              <label className='text-sm font-medium text-gray-700'>Confirm Password</label>
              <input 
                type="password"
                placeholder="••••••••"
                className={`w-full px-4 py-2.5 rounded-lg border bg-white text-gray-800 outline-none transition-all ${errors.confirmPassword ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100'}`}
                {...register('confirmPassword', {
                  required: "Please confirm your password",
                  validate: (value) => value === password || "Passwords do not match"
                })}
              />
              {errors.confirmPassword && <span className='text-xs font-medium text-red-500 mt-0.5'>{errors.confirmPassword.message}</span>}
            </div>
          </div>

          {/* Address */}
          <div className='flex flex-col gap-1.5'>
            <label className='text-sm font-medium text-gray-700'>Address</label>
            <textarea 
              rows="3"
              placeholder="Street layout, building name..."
              className={`w-full px-4 py-2.5 rounded-lg border bg-white text-gray-800 outline-none resize-none transition-all ${errors.address ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100'}`}
              {...register('address', {
                required: "Address is required",
                maxLength: { value: 50, message: "Should not exceed 50 characters" }
              })}
            />
            {errors.address && <span className='text-xs font-medium text-red-500 mt-0.5'>{errors.address.message}</span>}
          </div>

          {/* State and City Row */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='flex flex-col gap-1.5'>
              <label className='text-sm font-medium text-gray-700'>State</label>
              <input 
                type="text"
                placeholder="California"
                className={`w-full px-4 py-2.5 rounded-lg border bg-white text-gray-800 outline-none transition-all ${errors.state ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100'}`}
                {...register('state', { required: "State is required" })}
              />
              {errors.state && <span className='text-xs font-medium text-red-500 mt-0.5'>{errors.state.message}</span>}
            </div>

            <div className='flex flex-col gap-1.5'>
              <label className='text-sm font-medium text-gray-700'>City</label>
              <input 
                type="text"
                placeholder="Los Angeles"
                className={`w-full px-4 py-2.5 rounded-lg border bg-white text-gray-800 outline-none transition-all ${errors.city ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100'}`}
                {...register('city', { required: "City is required" })}
              />
              {errors.city && <span className='text-xs font-medium text-red-500 mt-0.5'>{errors.city.message}</span>}
            </div>
          </div>

          {/* Pin Code */}
          <div className='flex flex-col gap-1.5'>
            <label className='text-sm font-medium text-gray-700'>Pin Code</label>
            <input 
              type="text"
              placeholder="6-digit ZIP code"
              className={`w-full px-4 py-2.5 rounded-lg border bg-white text-gray-800 outline-none transition-all ${errors.pinCode ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100'}`}
              {...register('pinCode', {
                required: "Pin Code is required",
                maxLength: { value: 6, message: "Maximum 6 digits allowed" },
                minLength: { value: 6, message: "Minimum 6 digits required" }
              })}
            />
            {errors.pinCode && <span className='text-xs font-medium text-red-500 mt-0.5'>{errors.pinCode.message}</span>}
          </div>

          {/* Submit Button */}
          <div className='pt-2'>
            <button
              type='submit'
              disabled={isSubmitting}
              className={`w-full py-3 px-4 font-semibold text-white rounded-lg transition-all duration-200 flex items-center justify-center shadow-sm 
                ${isSubmitting 
                  ? 'bg-purple-400 cursor-not-allowed' 
                  : 'bg-purple-600 hover:bg-purple-700 active:transform active:scale-[0.99] focus:ring-4 focus:ring-purple-200'}`}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Submitting...
                </span>
              ) : "Submit"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default SignUpForm;