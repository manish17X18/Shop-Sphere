import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FaStar, FaRegStar } from "react-icons/fa";
import { addToCart } from '../../features/cart/cartSlice';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import FilteredCategoryProducts from './FilteredCategoryProducts'

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {isLoggedin}=useSelector((state)=>state.signIn.loginData)

  //redirect the page to top of the page
  useEffect(()=>{
    window.scroll(0,0)
  },[id]);

  const product = useSelector((state) =>
    state.fetchProducts.allProducts.find((item) => item.id === Number(id))
  );
  //for selecting all items to show the required items below
  
  if (!product) {
    return (
      <div className='h-screen flex flex-col items-center justify-center bg-gray-50'>
        <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600 mb-4'></div>
        <p className='text-gray-500 animate-pulse'>Fetching product details...</p>
      </div>
    );
  }
  const categoryProducts=useSelector((state)=>state.fetchProducts.allProducts);
  const filteredCategoryProducts=categoryProducts.filter((item)=>product.category===item.category)

  const toCart = () => {
    if(!isLoggedin){
      toast.warning("SignIn required")
      return;
    }
    dispatch(addToCart(product));
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      {/* Main Wrapper: Max width and centered */}
      <div className='max-w-5xl mx-auto bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100'>

        {/* Responsive Layout: Vertical on mobile, Horizontal on MD+ */}
        <div className='flex flex-col md:flex-row'>

          {/* 1. Image Section: Clean background and prominent display */}
          <div className='md:w-1/2 bg-white flex items-center justify-center p-12 border-b md:border-b-0 md:border-r border-gray-50'>
            <img
              src={product.thumbnail}
              alt={product.title}
              className='max-h-80 w-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-110'
            />
          </div>

          {/* 2. Content Area */}
          <div className='md:w-1/2 p-8 md:p-12 flex flex-col'>

            {/* Category & Breadcrumb-style label */}
            <div className='flex items-center gap-2 mb-4'>
              <span className='bg-purple-50 text-purple-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest'>
                {product.category}
              </span>
              {product.brand && (
                <span className='text-gray-400 text-xs font-medium'>• {product.brand}</span>
              )}
            </div>

            {/* Title */}
            <h1 className='text-3xl font-extrabold text-gray-900 mb-4 leading-tight'>
              {product.title}
            </h1>

            {/* Rating Section */}
            <div className='flex items-center gap-3 mb-6'>
              <div className='flex text-amber-400 text-sm'>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star}>
                    {star <= Math.round(product.rating) ? <FaStar /> : <FaRegStar />}
                  </span>
                ))}
              </div>
              <span className='text-sm text-gray-500 font-semibold'>
                {product.rating} <span className='text-gray-300 ml-1'>| 120 Reviews</span>
              </span>
            </div>

            {/* Description: Increased text size for readability */}
            <p className='text-gray-600 text-base leading-relaxed mb-8 grow'>
              {product.description}
            </p>

            {/* 3. Footer / Price & Call to Action */}
            <div className='pt-8 border-t border-gray-100 flex items-center justify-between mt-auto'>
              <div className='flex flex-col'>
                <span className='text-xs text-gray-400 uppercase font-bold tracking-wider'>Total Price</span>
                <div className='flex items-baseline gap-1'>
                  <span className='text-3xl font-black text-gray-900'>${product.price}</span>
                </div>
              </div>

              <button
                onClick={toCart}
                className='bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-sm transition-all shadow-lg shadow-purple-100 active:scale-95'
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* here the other same category products to be shown */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
        {
          filteredCategoryProducts.length>0?
          (
            filteredCategoryProducts.map((item)=>(
              <FilteredCategoryProducts key={item.id} item={item}/>
            ))
          )
          :
          (<div>No Items was found in this category</div>)
        }
      </div>

    </div>
  )
}

export default ProductDetails