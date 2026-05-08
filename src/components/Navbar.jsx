import React from 'react'
import { NavLink,Route,Routes } from 'react-router-dom'
import logo from '../assets/logo.png'
import Home from './Home'
import Order from './Order'
import Cart from './Cart'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <div > 
        <nav>
            <div className='flex '>
                <NavLink to="/">
                    <img src={logo} alt='home' width={100} height={100}/>
                </NavLink>
                <p>
                    Deliver to name?<br/>
                    <FaLocationDot size={15} className='inline'/><span>Location? Pin?</span>

                </p>
                {/* searchBar */}
                <div>
                    <select>
                        <option>Electronics</option>
                        <option>Clothing</option>
                        <option>Books</option>
                        <option>Home</option>
                        <option>Sports</option>
                    </select>
                    <input 
                    type='text'
                    placeholder='Search ShopSphere.in'
                    />
                    <IoIosSearch className='inline'/>
                </div>
                <span>
                    Hello, Phno?<br/>
                    <select>
                        <option>Accounts & Lists</option>
                        <option>Your Account</option>
                        <option>SignOut</option>
                    </select>
                </span>
                <NavLink to="/orders">Orders</NavLink>
                <NavLink to="/cart">
                    <FiShoppingCart className='inline'/>
                    <span>0?</span>
                    Cart
                </NavLink>
            </div>
        </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/orders" element={<Order/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default Navbar
