import React from 'react'
import { NavLink,Route,Routes } from 'react-router-dom'
import logo from '../assets/logo.png'
import Home from './Home'
import Order from './cart/Order'
import Cart from './cart/Cart'
import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useSelector } from 'react-redux'
import ProductDetails from './dynamic_routing/ProductDetails'

const Navbar = () => {
    const CartItems=useSelector((state)=>state.cartProducts.cartStore)
  return (
    <div > 
        <nav className='px-4 py-2 gap-x-8 bg-purple-500 shadow-md'>
            <div className='flex items-center justify-between shrink-0'>
                <div className='bg-white p-1 rounded-2xl'>
                    <NavLink to="/">
                        <img src={logo} alt='home' width={100} height={100} className='mix-blend-multiply ml-3'/>
                    </NavLink>
                </div>
                <div className='  text-xs leading-tight rounded '>                   
                    <span className='text-sm text-white opacity-85'>Deliver to name?</span><br/>
                    <div className=''>
                        <HiOutlineLocationMarker size={20} className='inline text-white'/>
                        <span className='font-semibold text-white'>Location? Pin?</span>                  
                    </div>
                </div>
                {/* searchBar */}
                <div className='flex justify-between w-[50%] items-center h-10 rounded-md bg-white group focus-within:ring-2 focus-within:ring-orange-400'>
                    <select className='bg-gray-100 h-full w-[25%] text-gray-700 px-2 text-xs border-r cursor-pointer outline-none'>
                        <option>All</option>
                        <option>Beauty</option>
                        <option>Fragrances</option>
                        <option>Skin-Care</option>
                        <option>Furniture</option>
                        <option>Groceries</option>
                        <option>Home-Decoration</option>
                        <option>Kitchen-Accessories</option>
                        <option>Laptops</option>
                        <option>Mobiles</option>
                        <option>Tablets</option>
                        <option>Mens</option>
                        <option>Womens</option>
                        <option>Motor-Cycle</option>
                        <option>Sports</option>
                        <option>SunGlasses</option>
                    </select>
                    <input 
                    type='text'
                    placeholder='Search ShopSphere.in'
                    className='w-[70%] h-full outline-none placeholder:px-4 text-sm '
                    />
                    <button className='inline  bg-orange-300 hover:bg-orange-400 h-full px-3 text-gray-800 transition-colors'>
                        <IoIosSearch size={24} />
                    </button>
                </div>
                <div className='flex flex-col items-center leading-0.5'>
                    <span className='text-sm  text-white'>
                        Hello, Phno?<br/>
                    </span>
                    <select className='text-sm text-white  border-r cursor-pointer outline-none'>
                        <option className='text-gray-900 '>Accounts & Lists</option>
                        <option className='text-gray-900 '>Your Account</option>
                        <option className='text-gray-900 '>SignOut</option>
                    </select>
                    
                </div>
                <div className='flex gap-x-4'>
                    <NavLink to="/orders" className="hidden md:flex flex-col justify-center items-center px-3 py-1 rounded-sm border border-transparent hover:text-white hover:border-white hover:translate-y-[-4px] hover:shadow-amber-200 transition-all duration-300">Orders</NavLink>
                    <NavLink to="/cart" className='relative'>
                        <FiShoppingCart size={33} className='inline'/>
                        <span className='absolute right-8.5 top-2 text-xs text-orange-400 animate-bounce'>{CartItems.length}</span>
                        <span>Cart</span>
                    </NavLink>
                </div>
            </div>
        </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/orders" element={<Order/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path='/item/:id' element={<ProductDetails/>} />
      </Routes>
    </div>
  )
}

export default Navbar
