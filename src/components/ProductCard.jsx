import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div>
        <div className='w-[300px] h-[400px]'>
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.category}</p>
            <p>{product.rating}</p>
            <img src={product.thumbnail || product.images} alt={product.title} width={50} height={50}/>
        </div>
    </div>
  )
}

export default ProductCard
