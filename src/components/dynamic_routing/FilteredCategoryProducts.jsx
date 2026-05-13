import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const FilteredCategoryProducts = ({item}) => {
  return (
    <div>
      <div className='group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-112.5 w-full max-w-[320px] mx-auto'>
            
            
            <div className='relative w-full h-48 bg-gray-50 flex items-center justify-center p-4 overflow-hidden'>
              <img 
                src={item.thumbnail} 
                alt={item.title} 
                className='max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300'
              />
              
              <span className='absolute top-2 left-2 bg-purple-100 text-purple-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider'>
                {item.category}
              </span>
            </div>
      
            {/* 2. Content Area*/}
            <div className='p-4 flex flex-col grow text-left'>
              
              {/* Title*/}
              <h3 className='font-bold text-gray-800 text-sm line-clamp-1 group-hover:text-purple-600 transition-colors'>
                {item.title}
              </h3>
              
              {/* Rating Section */}
              <div className='flex items-center my-1 '>
                <div className='flex'>
                  {
                    [1,2,3,4,5].map((star)=>(
                      <span className='text-yellow-400 text-xs group-hover:text-purple-700'>{star<=Math.round(item.rating)?<FaStar/>:<FaRegStar/>}</span>
                    ))
                  }
                </div>
                <span className='text-gray-400 text-[10px] ml-1 font-medium'>({item.rating})</span>
              </div>
      
              {/* Description*/}
              <p className='text-gray-500 text-xs line-clamp-3 leading-relaxed mt-1 mb-4 grow'>
                {item.description}
              </p>
      
              {/* 3. Footer Section*/}
              <div className='flex items-center justify-between border-t border-gray-100 pt-3'>
                <div className='flex flex-col'>
                  <span className='text-[10px] text-gray-400 uppercase font-bold tracking-tighter'>Price</span>
                  <span className='text-lg font-extrabold text-gray-900'>${item.price}</span>
                </div>
                
                <button className='bg-purple-600 cursor-pointer hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md text-xs transition-colors shadow-sm active:scale-95'>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default FilteredCategoryProducts
