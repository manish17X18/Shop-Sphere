import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../features/cart/cartSlice'
import { useNavigate } from 'react-router-dom'
import CartProduct from './CartProduct'
const Cart = () => {
  const dispatch = useDispatch();
  const cartStore = useSelector((state) => (state.cartProducts.cartStore));
  const {isLoggedin}=useSelector((state)=>state.signIn.loginData)
  const navigate = useNavigate();
  // console.log(cartStore);
  console.log(cartStore);

  //calculat the price of cart using reducer
  const totalPrice=cartStore.reduce((acc,currVal)=>{
    return acc+currVal.price;
  },0)
  console.log(parseInt(totalPrice) )
  return (
    <div className='flex bg-mauve-100'>
      <div className='w-[75%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4'>

        {
          cartStore.length > 0 ?
            (
              cartStore.map((item) => (
                <CartProduct item={item} />
              ))
            )
            :
            (<div className="absolute top-50  w-full rounded-lg  border-gray-300 p-12 text-center hover:border-gray-400 ">
              <span className="mt-2 block text-sm font-semibold text-gray-900">No items in your Cart</span>
              <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v20c0 4.418 7.163 8 16 8 1.387 0 2.717-.087 3.998-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6" />
              </svg>
              <span onClick={() => navigate('/')} className="mt-5 block text-sm font-semibold text-gray-900 p-4 w-[15%] absolute
              left-[43%] rounded-2xl cursor-pointer hover:bg-purple-500 hover:outline-2 hover:outline-purple-900 
              transition-all duration-300">Add new items</span>
            </div>
            )
        }

      
      </div>
      { isLoggedin &&
        <div className='w-[25%] flex flex-col justify-between items-center mt-10'>
        <div className='p-4 w-[90%] bg-white'>
          <div className='text-center'>
            <h1 className='font-bold text-2xl'>Order Summary</h1>
          </div>
          <div className='flex flex-col p-4'>
            <span>Total Items: {cartStore.length}</span>
            <span>Total Cost: {totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
      }
      
    </div>
  )
}

export default Cart
