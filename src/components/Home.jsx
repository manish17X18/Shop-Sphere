import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
//import react thunk
import { shopSphereProducts } from '../features/products/ProjectThunk'
import { useDispatch, useSelector } from 'react-redux'


const Home = () => {
    // const [products, setProducts] = useState([])
    // const allProducts = products

    const [visibleCount, setVisibleCount] = useState(20)
    const dispatch = useDispatch();
    const { allProducts, loading, errors } = useSelector((state) => state.fetchProducts)
    const visibleProducts = allProducts.slice(0, visibleCount)



    useEffect(() => {

        dispatch(shopSphereProducts());
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
                setVisibleCount((prev) => prev + 20)
            }
        };
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)

    }, [dispatch])


    //check if the api did not respond
    if (errors) {
        return (<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline">{errors}</span>
        </div>)
    }
    else if (loading) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <div
                    className="p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full"
                >
                    <div
                        className="rounded-full h-full w-full bg-slate-100 dark:bg-zinc-900 background-blur-md"
                    ></div>
                </div>

            </div>
    )}
     


    return (
        /* Main Container: Added max-width, centering, and background padding */
        <div className='min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-[1400px] mx-auto'>

                {/* Header for context */}
                <h2 className='text-2xl font-bold text-gray-800 mb-6'>Recommended for You</h2>

                {/* Grid Layout: Refined gaps and columns */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
                    {visibleProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Loading State for Infinite Scroll */}
                {visibleCount < allProducts.length && (
                    <div className="flex justify-center py-10">
                        <div className="animate-pulse text-purple-600 font-semibold">Loading more products...</div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home