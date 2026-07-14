import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { signOut } from '../features/login/SignUp';
const AccountDetails = () => {
  const userData = useSelector((state) => state.signIn.loginData)
  const {isLoggedin}=useSelector((state)=>state.signIn.loginData)
  const { name } = useParams()
  const navigate=useNavigate();
  const dispatch=useDispatch();

  function logOutHandler(){
    dispatch(signOut())
    console.log(isLoggedin);
    navigate("/");
    return;
  }
  return (
    <div className='w-full min-h-[70vh] flex justify-center items-center bg-gray-50 py-8'>
      <div className='w-[55%] max-w-3xl bg-white rounded-xl shadow-2xl hover:shadow-purple-300 transition-all duration-300 p-8'>

        {/* Heading */}
        <div>
          <h1 className='text-4xl font-light text-center tracking-wide'>
            Your Details
          </h1>
        </div>

        <div className='w-[90%] mx-auto h-px bg-gray-300 my-6'></div>

        {/* Details */}
        <div className='space-y-5 text-lg'>

          <div>
            <span className='font-semibold'>Name:</span>
            <span className='pl-3 font-light'>
              {userData.firstName} {userData.lastName}
            </span>
          </div>

          <div>
            <span className='font-semibold'>Email:</span>
            <span className='pl-3 font-light'>
              {userData.email}
            </span>
          </div>

          <div>
            <span className='font-semibold'>Phone No:</span>
            <span className='pl-3 font-light'>
              {userData.PhNo}
            </span>
          </div>

          <div className='flex'>
            <span className='font-semibold min-w-23.75'>Address:</span>
            <span className='pl-3 font-light wrap-break-word'>
              {userData.address}
            </span>
          </div>

          <div>
            <span className='font-semibold'>City:</span>
            <span className='pl-3 font-light'>
              {userData.city}
            </span>
          </div>

          <div>
            <span className='font-semibold'>Pin Code:</span>
            <span className='pl-3 font-light'>
              {userData.pinCode}
            </span>
          </div>

          <div>
            <span className='font-semibold'>State:</span>
            <span className='pl-3 font-light'>
              {userData.state}
            </span>
          </div>

        </div>
        <div className="flex items-center rounded-lg justify-end gap-2 h-9 ">
          <button onClick={logOutHandler} className="w-27 h-10 flex gap-x-2 hover:bg-purple-400 justify-center items-center rounded-lg hover:cursor-pointer hover:text-amber-50 transition ease-in duration-300">
            Sign Out
            <FaSignOutAlt size={18} className='inline mt-1'/>
          </button>
        </div>
      </div>

    </div>
  )
}

export default AccountDetails