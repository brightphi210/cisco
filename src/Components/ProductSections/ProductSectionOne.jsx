
'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const ProductSectionOne = () => {
    
    const url = 'https://fakestoreapi.com/products'
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchProducts = async () =>{
       setIsLoading(true)
        const response = await fetch(url, {
            method: 'GET',
            headers :{
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()
        setIsLoading(false)
        setProducts(data)
        
    }
    
    useEffect(()=>{
        fetchProducts()
    }, [])
    
    console.log('This is our Products', products);
    
  return (
    <div className='h-screen'>
      <h2>This is section One</h2>

      <div>

        {isLoading === true ? 
        <div className='text-center flex justify-center items-center h-screen'>
          <span class="loader"></span>
        </div>
        : 
        <>
          {products.map((product)=>(
              <div>
                  <Image className='w-[30%]' 
                    unoptimized={true} 
                    src={product.image} 
                    width={0} height={0}
                />
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <p>{product.price}</p>
              </div>
          ))}
        </>}
      </div>
    </div>
  )
}

export default ProductSectionOne
