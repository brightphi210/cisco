'use client'

import SectionFive from '@/Components/HomeSections/SectionFive'
import SectionFour from '@/Components/HomeSections/SectionFour'
import SectionOne from '@/Components/HomeSections/SectionOne'
import SectionTwo from '@/Components/HomeSections/SectionTwo'
import Navbar from '@/Components/Navbar'
import React, { useState } from 'react'



const Home = () => {

  const [isDark, setIsDark] = useState(false)

  const toggleDarkMode = () => {
    setIsDark(!isDark)
  }
  return (
    <div className={isDark === true ? 'dark' : 'light'}>
      <Navbar toggleDarkMode={toggleDarkMode} isDark={isDark}/>
      <SectionOne />
      <SectionTwo />
      <SectionFour />
      <SectionFive />
    </div> 
  )
}

export default Home
