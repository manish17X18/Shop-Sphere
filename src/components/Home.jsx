import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
// import products from '../data/products.json'
// import categories from '../data/categories'

const Home = () => {
    const [visibleCount,setVisibleCount]=useState(20)
    const [products,setProducts]=useState([])
    const allProducts=products
    const visibleProducts=allProducts.slice(0,visibleCount)

    useEffect(()=>{
        fetch("https://dummyjson.com/products?limit=100")
        .then(res=>res.json())
        .then((data)=>setProducts(data.products))
        const handleScroll=()=>{
            if(window.innerHeight+window.scrollY>=document.body.offsetHeight-200){
                setVisibleCount((prev)=>prev+20)
            }  
        };
        window.addEventListener("scroll",handleScroll)

        return ()=>window.removeEventListener("scroll",handleScroll)
    },[])
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {visibleProducts.map((product)=>(
            <ProductCard key={product.id} product={product}/>
        ))}
    </div>
  )
}

export default Home
