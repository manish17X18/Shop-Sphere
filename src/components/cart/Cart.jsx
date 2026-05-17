import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { removeFromCart } from '../../features/cart/cartSlice'
import { useNavigate } from 'react-router-dom'
import CartProduct from './CartProduct'
const Cart = () => {
  const dispatch=useDispatch();
  const cartStore=useSelector((state)=>(state.cartProducts.cartStore));
  const navigate=useNavigate();
  // console.log(cartStore);
  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {
          cartStore.length>0?
          (
            cartStore.map((item)=>(
              <CartProduct item={item}/>
            ))
          )
          :
          (<div className="absolute top-50  w-full rounded-lg  border-gray-300 p-12 text-center hover:border-gray-400 ">
              <span className="mt-2 block text-sm font-semibold text-gray-900">No items in your Cart</span>
              <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v20c0 4.418 7.163 8 16 8 1.387 0 2.717-.087 3.998-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6" />
              </svg>
              <span onClick={()=>navigate('/')} className="mt-5 block text-sm font-semibold text-gray-900 p-4 w-[15%] absolute
              left-[43%] rounded-2xl cursor-pointer hover:bg-purple-500 hover:outline-2 hover:outline-purple-900 
              transition-all duration-300">Add new items</span>
          </div>
          )
        }
      </div>
    </div>
  )
}

export default Cart
