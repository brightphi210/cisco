'use client'

import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';


import one from '../Images/1.png'
import two from '../Images/2.png'
import three from '../Images/3.png'
import four from '../Images/4.png'
import five from '../Images/5.png'
import six from '../Images/5(1).png'
import eight from '../Images/8.png'

import { GrFavorite } from "react-icons/gr";

const SectionTwo = () => {
  return (
    <div className='px-[15rem] pt-20'>
      <h2 className='text-4xl font-bold pb-10'>Discover more. <span className='text-neutral-400'>Good things are waiting for you</span></h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='flex p-5 px-10 items-center rounded-lg gap-4 h-[15rem] bg-neutral-200'>
            <div className='w-[100%] text-left'>
              <p>Explore new Arivals</p>
              <h2 className='text-xl font-bold py-3'>Shop the latest <br /> from top brands</h2>
              <button className='bg-white p-3 mt-5 px-5 rounded-full text-sm'>Show me all</button>
            </div>
            <div className='w-[100%]'>
              <Image src={one} alt='' height={0} width={0}/>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className='flex p-5 px-10 items-center rounded-lg gap-4 h-[15rem] bg-neutral-200'>

            <div className='w-[100%] text-left'>
              <p>Explore new Arivals</p>
              <h2 className='text-xl font-bold py-3'>Shop the latest <br /> from top brands</h2>
              <button className='bg-white p-3 mt-5 px-5 rounded-full text-sm'>Show me all</button>
            </div>
            <div className='w-[100%]'>
              <Image src={two} alt='' height={0} width={0}/>
            </div>

          </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className='flex p-5 px-10 items-center rounded-lg gap-4 h-[15rem] bg-neutral-200'>

          <div className='w-[100%] text-left'>
            <p>Explore new Arivals</p>
            <h2 className='text-xl font-bold py-3'>Shop the latest <br /> from top brands</h2>
            <button className='bg-white p-3 mt-5 px-5 rounded-full text-sm'>Show me all</button>
          </div>
          <div className='w-[100%]'>
            <Image src={three} alt='' height={0} width={0}/>
          </div>

          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='flex p-5 px-10 items-center rounded-lg gap-4 h-[15rem] bg-neutral-200'>

          <div className='w-[100%] text-left'>
            <p>Explore new Arivals</p>
            <h2 className='text-xl font-bold py-3'>Shop the latest <br /> from top brands</h2>
            <button className='bg-white p-3 mt-5 px-5 rounded-full text-sm'>Show me all</button>
          </div>
          <div className='w-[100%]'>
            <Image src={four} alt='' height={0} width={0}/>
          </div>

          </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className='flex p-5 px-10 items-center rounded-lg gap-4 h-[15rem] bg-neutral-200'>

          <div className='w-[100%] text-left'>
            <p>Explore new Arivals</p>
            <h2 className='text-xl font-bold py-3'>Shop the latest <br /> from top brands</h2>
            <button className='bg-white p-3 mt-5 px-5 rounded-full text-sm'>Show me all</button>
          </div>
          <div className='w-[100%]'>
            <Image src={five} alt='' height={0} width={0}/>
          </div>

          </div>
        </SwiperSlide>
      </Swiper>


      {/* <div class="group relative">
        <button class="px-4 py-2 bg-blue-500 text-white rounded">Hover me</button>
        <div class="hover-div absolute left-1/2 transform-translate-x-1/2 mt-2 w-32 p-2 bg-white border border-gray-300 rounded opacity-0 transition-opacity duration-300 transform-translate-y-2">
          Hovered Text
        </div>
      </div> */}


        <div className='pt-20'>

        <h2 className='text-4xl font-bold pb-10'>New Arrivals. 
          <span className='text-neutral-400'>REY backpacks & bags</span>
        </h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            navigation={true}
            className="mySwiper"
          >

        <SwiperSlide>
          <div className=''>
            <div className='group relative cursor-pointer bg-neutral-200 rounded-lg'>
              <div className='w-[100%]'>
                <Image src={six} alt='' className='w-[full]' height={0} width={0}/>
              </div>
              <p className='absolute rounded-full p-5 flex bg-white justify-center items-center right-5 top-5'><GrFavorite /></p>

              <ul className='hover-div opacity-0 transition-opacity duration-300 transform-translate-y-2 flex items-center gap-3 px-5 pb-5'>
                <li className='bg-white hover:bg-black hover:text-white transition-all cursor-pointer ease-linear p-4 py-2 rounded-lg w-full'>XS</li>
                <li className='bg-white hover:bg-black hover:text-white transition-all cursor-pointer ease-linear p-4 py-2 rounded-lg w-full'>S</li>
                <li className='bg-white hover:bg-black hover:text-white transition-all cursor-pointer ease-linear p-4 py-2 rounded-lg w-full'>L</li>
                <li className='bg-white hover:bg-black hover:text-white transition-all cursor-pointer ease-linear p-4 py-2 rounded-lg w-full'>M</li>
                <li className='bg-white hover:bg-black hover:text-white transition-all cursor-pointer ease-linear p-4 py-2 rounded-lg w-full'>XL</li>
              </ul>

            </div>

            <div>
              <ul className='flex items-center gap-2 pt-5'>
                <li className='h-6 w-full bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full'></li>
                <li className='h-6 w-full bg-blue-700 rounded-full'></li>
                <li className='h-6 w-full bg-blue-700 rounded-full'></li>
                <li className='h-6 w-full bg-gradient-to-r from-slate-900 to-slate-700 rounded-full'></li>
                <li className='h-6 w-full bg-blue-700 rounded-full'></li>
              </ul>

              <div className='text-left pt-3'>
                <div>
                  <h2 className='text-base'>Leather Gloves</h2>
                  <p className='text-xs'>perfect Mint green</p>
                </div>

                <div className='flex pt-3'>
                  <button className='border border-green-700 text-xs p-3 rounded-lg'>$42</button>
                  <p className='ml-auto'>4.9(98 reviews)</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=''>
            <div className='group relative cursor-pointer bg-neutral-200 rounded-lg'>
              <div className='w-[100%]'>
                <Image src={six} alt='' className='w-[full]' height={0} width={0}/>
              </div>
              <p className='absolute rounded-full p-5 flex bg-white justify-center items-center right-5 top-5'><GrFavorite /></p>

              <ul className='hover-div opacity-0 transition-opacity duration-300 transform-translate-y-2 flex items-center gap-3 px-5 pb-5'>
                <li className='bg-white hover:bg-black hover:text-white transition-all cursor-pointer ease-linear p-4 py-2 rounded-lg w-full'>XS</li>
                <li className='bg-white hover:bg-black hover:text-white transition-all cursor-pointer ease-linear p-4 py-2 rounded-lg w-full'>S</li>
                <li className='bg-white hover:bg-black hover:text-white transition-all cursor-pointer ease-linear p-4 py-2 rounded-lg w-full'>L</li>
                <li className='bg-white hover:bg-black hover:text-white transition-all cursor-pointer ease-linear p-4 py-2 rounded-lg w-full'>M</li>
                <li className='bg-white hover:bg-black hover:text-white transition-all cursor-pointer ease-linear p-4 py-2 rounded-lg w-full'>XL</li>
              </ul>

            </div>

            <div>
              <ul className='flex items-center gap-2 pt-5'>
                <li className='h-6 w-full bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full'></li>
                <li className='h-6 w-full bg-blue-700 rounded-full'></li>
                <li className='h-6 w-full bg-blue-700 rounded-full'></li>
                <li className='h-6 w-full bg-gradient-to-r from-slate-900 to-slate-700 rounded-full'></li>
                <li className='h-6 w-full bg-blue-700 rounded-full'></li>
              </ul>

              <div className='text-left pt-3'>
                <div>
                  <h2 className='text-base'>Leather Gloves</h2>
                  <p className='text-xs'>perfect Mint green</p>
                </div>

                <div className='flex pt-3'>
                  <button className='border border-green-700 text-xs p-3 rounded-lg'>$42</button>
                  <p className='ml-auto'>4.9(98 reviews)</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>



        <SwiperSlide>
          <div className=''>
            <div className='group relative cursor-pointer bg-neutral-200 rounded-lg'>
              <div className='w-[100%]'>
                <Image src={eight} alt='' className='w-[full]' height={0} width={0}/>
              </div>
              <p className='absolute rounded-full p-5 flex bg-white justify-center items-center right-5 top-5'><GrFavorite /></p>

              <ul className='hover-div opacity-0 transition-opacity duration-300 transform-translate-y-2 flex items-center gap-3 px-5 pb-5'>
                <li className='bg-white hover:bg-black hover:text-white transition-all cursor-pointer ease-linear p-4 py-2 rounded-lg w-full'>XS</li>
                <li className='bg-white hover:bg-black hover:text-white transition-all cursor-pointer ease-linear p-4 py-2 rounded-lg w-full'>S</li>
                <li className='bg-white hover:bg-black hover:text-white transition-all cursor-pointer ease-linear p-4 py-2 rounded-lg w-full'>L</li>
                <li className='bg-white hover:bg-black hover:text-white transition-all cursor-pointer ease-linear p-4 py-2 rounded-lg w-full'>M</li>
                <li className='bg-white hover:bg-black hover:text-white transition-all cursor-pointer ease-linear p-4 py-2 rounded-lg w-full'>XL</li>
              </ul>

            </div>

            <div>
              <ul className='flex items-center gap-2 pt-5'>
                <li className='h-6 w-full bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full'></li>
                <li className='h-6 w-full bg-blue-700 rounded-full'></li>
                <li className='h-6 w-full bg-blue-700 rounded-full'></li>
                <li className='h-6 w-full bg-gradient-to-r from-slate-900 to-slate-700 rounded-full'></li>
                <li className='h-6 w-full bg-blue-700 rounded-full'></li>
              </ul>

              <div className='text-left pt-3'>
                <div>
                  <h2 className='text-base'>Leather Gloves</h2>
                  <p className='text-xs'>perfect Mint green</p>
                </div>

                <div className='flex pt-3'>
                  <button className='border border-green-700 text-xs p-3 rounded-lg'>$42</button>
                  <p className='ml-auto'>4.9(98 reviews)</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=''>
            <div className='group relative cursor-pointer bg-neutral-200 rounded-lg'>
              <div className='w-[100%]'>
                <Image src={six} alt='' className='w-[full]' height={0} width={0}/>
              </div>
              <p className='absolute rounded-full p-5 flex bg-white justify-center items-center right-5 top-5'><GrFavorite /></p>

              <ul className='hover-div opacity-0 transition-opacity duration-300 transform-translate-y-2 flex items-center gap-3 px-5 pb-5'>
                <li className='bg-white hover:bg-black hover:text-white transition-all cursor-pointer ease-linear p-4 py-2 rounded-lg w-full'>XS</li>
                <li className='bg-white hover:bg-black hover:text-white transition-all cursor-pointer ease-linear p-4 py-2 rounded-lg w-full'>S</li>
                <li className='bg-white hover:bg-black hover:text-white transition-all cursor-pointer ease-linear p-4 py-2 rounded-lg w-full'>L</li>
                <li className='bg-white hover:bg-black hover:text-white transition-all cursor-pointer ease-linear p-4 py-2 rounded-lg w-full'>M</li>
                <li className='bg-white hover:bg-black hover:text-white transition-all cursor-pointer ease-linear p-4 py-2 rounded-lg w-full'>XL</li>
              </ul>

            </div>

            <div>
              <ul className='flex items-center gap-2 pt-5'>
                <li className='h-6 w-full bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full'></li>
                <li className='h-6 w-full bg-blue-700 rounded-full'></li>
                <li className='h-6 w-full bg-blue-700 rounded-full'></li>
                <li className='h-6 w-full bg-gradient-to-r from-slate-900 to-slate-700 rounded-full'></li>
                <li className='h-6 w-full bg-blue-700 rounded-full'></li>
              </ul>

              <div className='text-left pt-3'>
                <div>
                  <h2 className='text-base'>Leather Gloves</h2>
                  <p className='text-xs'>perfect Mint green</p>
                </div>

                <div className='flex pt-3'>
                  <button className='border border-green-700 text-xs p-3 rounded-lg'>$42</button>
                  <p className='ml-auto'>4.9(98 reviews)</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className=''>
            <div className='group relative cursor-pointer bg-neutral-200 rounded-lg'>
              <div className='w-[100%]'>
                <Image src={six} alt='' className='w-[full]' height={0} width={0}/>
              </div>
              <p className='absolute rounded-full p-5 flex bg-white justify-center items-center right-5 top-5'><GrFavorite /></p>

              <ul className='hover-div opacity-0 transition-opacity duration-300 transform-translate-y-2 flex items-center gap-3 px-5 pb-5'>
                <li className='bg-white hover:bg-black hover:text-white transition-all cursor-pointer ease-linear p-4 py-2 rounded-lg w-full'>XS</li>
                <li className='bg-white hover:bg-black hover:text-white transition-all cursor-pointer ease-linear p-4 py-2 rounded-lg w-full'>S</li>
                <li className='bg-white hover:bg-black hover:text-white transition-all cursor-pointer ease-linear p-4 py-2 rounded-lg w-full'>L</li>
                <li className='bg-white hover:bg-black hover:text-white transition-all cursor-pointer ease-linear p-4 py-2 rounded-lg w-full'>M</li>
                <li className='bg-white hover:bg-black hover:text-white transition-all cursor-pointer ease-linear p-4 py-2 rounded-lg w-full'>XL</li>
              </ul>

            </div>

            <div>
              <ul className='flex items-center gap-2 pt-5'>
                <li className='h-6 w-full bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full'></li>
                <li className='h-6 w-full bg-blue-700 rounded-full'></li>
                <li className='h-6 w-full bg-blue-700 rounded-full'></li>
                <li className='h-6 w-full bg-gradient-to-r from-slate-900 to-slate-700 rounded-full'></li>
                <li className='h-6 w-full bg-blue-700 rounded-full'></li>
              </ul>

              <div className='text-left pt-3'>
                <div>
                  <h2 className='text-base'>Leather Gloves</h2>
                  <p className='text-xs'>perfect Mint green</p>
                </div>

                <div className='flex pt-3'>
                  <button className='border border-green-700 text-xs p-3 rounded-lg'>$42</button>
                  <p className='ml-auto'>4.9(98 reviews)</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        </Swiper>
        </div>

    </div>
  )
}

export default SectionTwo
