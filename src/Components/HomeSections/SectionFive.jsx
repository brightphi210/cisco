
'use client'

import React, { useState } from 'react'
import mockData from '../mockData'
import Image from 'next/image'
import { GoStarFill } from "react-icons/go";
import { MdOutlineFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";


const SectionFive = () => {
    const [favorites, setFavorites] = useState([mockData]);
    console.log('This is data', mockData);

    const toggleFavorite = (productId) => {
        console.log(productId);
        
        setFavorites((prevFavorites) => {
            if (prevFavorites.includes(productId)) {
                return prevFavorites.filter((id) => id !== productId);
              } else {
                return [...prevFavorites, productId];
              }
        });
    };



    // const toggleFavorite2 = (productId) => {
    //     setFavorites((prevFavorites) => {
    //         prevFavorites.includes(productId) ?
    //             prevFavorites.filter((id) => id !== productId)
    //             :[...prevFavorites, productId]
    //     });
    // };
    
  return (
    <div className='px-[15rem]'>
      <h2>What's trending now</h2>
      <p>Discover the most trending products in Ciseco.</p>

      <div className='grid grid-cols-4 items-center gap-10'>
        {mockData.map((data)=>(
            <div className='col-span-1'>
                <div className='bg-blue-50 relative rounded-xl h-[20rem] p-10'>
                    <Image className='w-full' src={data.image} height={0} width={0}/>
                    <div onClick={()=>toggleFavorite(data.id)} className='absolute top-3 right-3'>
                        {favorites.includes(data.id) ? <p className='bg-white text-lg p-3 rounded-full'><MdOutlineFavorite /></p> : <p className='bg-white text-lg p-3 rounded-full'><MdFavoriteBorder /></p>}
                    </div>
                </div>

                {/* {data?.id === 1 &&(
                    <div className='flex items-center gap-5'>
                        <div className='bg-neutral-600 h-3 w-10 rounded-full'></div>
                        <div className='bg-neutral-600 h-3 w-10 rounded-full'></div>
                        <div className='bg-neutral-600 h-3 w-10 rounded-full'></div>
                        <div className='bg-neutral-600 h-3 w-10 rounded-full'></div>
                    </div>
                )}

                {data?.id === 2 && (
                    <div className='flex items-center gap-5'>
                        <div className='bg-neutral-600 h-5 w-5 rounded-full'></div>
                        <div className='bg-neutral-600 h-5 w-5 rounded-full'></div>
                        <div className='bg-neutral-600 h-5 w-5 rounded-full'></div>
                        <div className='bg-neutral-600 h-5 w-5 rounded-full'></div>
                    </div>
                )} */}

                <div className='pt-5'>
                    <h2>{data.name}</h2>
                    <p>{data.description}</p>
                    <button>{data.price}</button>
                    {data?.rating === 4 && (
                        <div className='flex gap-2'>
                            <span><GoStarFill /></span>
                            <span><GoStarFill /></span>
                            <span><GoStarFill /></span>
                            <span><GoStarFill /></span>
                        </div>
                    )}

                     {data?.rating === 5 && (
                        <div className='flex gap-2'>
                            <span><GoStarFill /></span>
                            <span><GoStarFill /></span>
                            <span><GoStarFill /></span>
                            <span><GoStarFill /></span>
                            <span><GoStarFill /></span>
                        </div>
                    )}

                    {data?.rating === 3 && (
                        <div className='flex gap-2'>
                            <span><GoStarFill /></span>
                            <span><GoStarFill /></span>
                            <span><GoStarFill /></span>
                        </div>
                    )}
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default SectionFive
