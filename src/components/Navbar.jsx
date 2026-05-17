import React, { useEffect, useState } from 'react'
import { NavLink,Route,Routes, useSearchParams } from 'react-router-dom'
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
    const CartItems=useSelector((state)=>state.cartProducts.cartStore);
    //filtering products, updating the link
    const [search,setSearch]=useSearchParams();
    const [inputValue, setInputValue]=useState(
        search.get('search')||""
    );
    //to select
    const category=search.get('category')||"";
    function changeHandler(e){
        const val=e.target.value;
        console.log(val);
        setSearch((prev)=>{
            const next=new URLSearchParams(prev);
            if(val){
                next.set('category',val)
            }
            else{
                next.delete('category')
            }
            return next;
        })
    }

    //to search by user
    const searchItem=search.get('search')||"";
    function searchChangeHandler(e){
        // const val=e.target.value;
        // // console.log(val)
        // setSearch((prev)=>{
        //     const next=new URLSearchParams(prev);
        //     if(val){
        //         next.set('search',val)
        //     }
        //     else{
        //         next.delete('search')
        //     }
        //     return next;
        // })
        setInputValue(e.target.value)
    }
    function searchFilterHandler(e){
        setSearch((prev)=>{
            const next=new URLSearchParams(prev);
            if(inputValue.trim()){
                next.set('search',inputValue)
            }
            else next.delete('search');
            return next;
        });
    }
  return (
    <div> 
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
                    <select onChange={changeHandler} value={category} className='bg-gray-100 h-full w-[25%] md:text-[10px] text-gray-700 px-2 text-xs border-r cursor-pointer outline-none'>
                        <option value="">All</option>
                        <option value="beauty">Beauty</option>
                        <option value="fragrances">Fragrances</option>
                        <option value="skin-care">Skin-Care</option>
                        <option value="furniture">Furniture</option>
                        <option value="groceries">Groceries</option>
                        <option value="home-decoration">Home-Decoration</option>
                        <option value="kitchen-accessories">Kitchen-Accessories</option>
                        <option value="laptops">Laptops</option>
                        <option value="smart-phones">Smart-Phones</option>
                        <option value="tablets">Tablets</option>
                        <option value="mens">Mens</option>
                        <option value="womens">Womens</option>
                        <option value="motor-cycle">Motor-Cycle</option>
                        <option value="sports">Sports</option>
                        <option value="sunglasses">SunGlasses</option>

                    </select>
                    <input 
                    type='text'
                    placeholder='Search ShopSphere.in'
                    className='w-[70%] h-full outline-none placeholder:px-4 text-sm '
                    onChange={searchChangeHandler}
                    value={inputValue}
                    />
                    <button onClick={searchFilterHandler} className='inline  bg-orange-300 hover:bg-orange-400 h-full px-3 text-gray-800 transition-colors'>
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
        <Route path="/" element={<Home filteredCategory={category} searchItem={searchItem}/>} />
        <Route path="/orders" element={<Order/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path='/item/:id' element={<ProductDetails/>} />
      </Routes>
    </div>
  )
}

export default Navbar
