
'use client'

import React, { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import Image from 'next/image'
import logo from '../Components/Images/logo.svg'
import { FiSearch } from "react-icons/fi";
import { GoPerson } from "react-icons/go";  
import { FaShoppingBasket } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from 'next/link';
import { FaMoon } from "react-icons/fa";
import { BsBrightnessHighFill } from "react-icons/bs";





const Navbar = ({toggleDarkMode, isDark}) => {

  const [showDropDown, setShowDropDown] = useState(false)
  const [showDropDownInner, setShowDropDownInner] = useState(false)
  const [showDropDownInner2, setShowDropDownInner2] = useState(false)

  const toggleDropdown = () => {
    setShowDropDown(!showDropDown)
  }

  const toggleDropdownInner = () => {
    setShowDropDownInner(!showDropDownInner)
    setShowDropDownInner2(false)
  }

  const toggleDropdownInner2 = () => {
    setShowDropDownInner2(!showDropDownInner2)
    setShowDropDownInner(false)
  }



  return (
    <div className='flex shadow-[0_3px_10px_rgb(0,0,0,0.2)] justify-between px-[15rem]  py-6'>
        <Link href={'/'}>
          <div>
            <Image className='w-32 ' src={logo} alt='logo' width={0} height={0}/>
          </div>
        </Link>
        
        <ul className='flex gap-8 relative' >
            <Link href={'/products'}>
              <li className='hover:bg-neutral-200 rounded-full px-3 py-2 cursor-pointer hover:transition-all hover:ease-linear'>Products</li>
            </Link>
            <li className='hover:bg-neutral-200 rounded-full px-3 py-2 cursor-pointer hover:transition-all hover:ease-linear'>Women</li>
            <li className='hover:bg-neutral-200 rounded-full px-3 py-2 cursor-pointer hover:transition-all hover:ease-linear'>Beauty</li>
            <li className='hover:bg-neutral-200 rounded-full px-3 py-2 cursor-pointer hover:transition-all hover:ease-linear'>Sport</li>
            <li className='hover:bg-neutral-200 rounded-full px-3 py-2 cursor-pointer hover:transition-all hover:ease-linear flex gap-3 items-center'>Template <RiArrowDropDownLine className='text-2xl'/></li>
            <li onClick={toggleDropdown} className=' hover:bg-neutral-200 rounded-full px-3 py-2 cursor-pointer hover:transition-all hover:ease-linear flex gap-3 items-center'>
              Explore <RiArrowDropDownLine className='text-2xl'/>
            </li>

            {showDropDown === true &&
                <ul data-aos="fade-up" data-aos-duration="1000" className='absolute  text-sm flex flex-col gap-5 bg-neutral-200 top-14 right-[-8rem] p-6 w-[14rem] rounded-lg'>
                  <li className=''>Home</li>
                  <li className=''>Category Page</li>
                  <li className=''>Cart Page </li>
                  <li onClick={toggleDropdownInner} className='flex relative items-center cursor-pointer'>Product Page 
                    <RiArrowDropDownLine className='text-2xl'/>

                  {showDropDownInner === true &&
                    <ul data-aos="fade-left" data-aos-duration="500" className='absolute bg-neutral-200 right-[-13rem] p-5 w-[10rem]'>
                      <li>Home</li>
                      <li>Shop</li>
                    </ul>
                  }
                  </li>
                  <li onClick={toggleDropdownInner2} className='flex relative items-center cursor-pointer' >Checkout Page<RiArrowDropDownLine className='text-2xl'/>

                  {showDropDownInner2 === true &&
                    <ul data-aos="fade-left" data-aos-duration="500" className='absolute bg-neutral-200 right-[-13rem] p-5 w-[10rem]'>
                      <li>About us</li>
                      <li>Contact us</li>
                    </ul>
                  }
                  </li>
                </ul>
            }
        </ul>

        <div className='flex gap-7 text-2xl'>
          <p className='hover:bg-neutral-200 rounded-full px-3 py-3 cursor-pointer hover:transition-all hover:ease-linear'><FiSearch /></p>
          <p className='hover:bg-neutral-200 rounded-full px-3 py-3 cursor-pointer hover:transition-all hover:ease-linear'><GoPerson /></p>
          <p className='hover:bg-neutral-200 rounded-full px-3 py-3 cursor-pointer hover:transition-all hover:ease-linear'><FaShoppingBasket /></p>
        </div>

        <div onClick={toggleDarkMode}>
          {isDark === true ? <p><BsBrightnessHighFill /></p> : <p><FaMoon /></p>}
        </div>
    </div>
  )
}

export default Navbar
