// import { useState } from 'react'
import './App.css'

import { FaCode } from "react-icons/fa6";
import { LuSparkles } from "react-icons/lu";
import { TbUsers } from "react-icons/tb";
import { LuZap } from "react-icons/lu";

import { Link } from 'react-router';
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <div id='main' className='min-h-screen'>
        <div className='bg-glow top-[30%] left-[30%]'></div>
        <div className='bg-glow top-[20%] right-[20%]'></div>
        <div className='bg-glow bottom-0 right-0'></div>

        <NavBar />

        <FaCode className='floating-icon top-37.5 left-75 text-[#1d724a]' />
        <LuSparkles className='floating-icon top-50 right-100 text-[#1d724a]' />
        <TbUsers className='floating-icon bottom-40 left-100 text-purple-500' />
        <LuZap className='floating-icon bottom-50 right-75 text-yellow-500' />

        <div className='mt-[10%] flex justify-center items-center flex-col'>
          <div className='flex justify-center items-center gap-2 bg-[#d7e0e0] text-[#1d724a] font-medium px-5 py-2 rounded-full text-sm'>
            <LuSparkles />
            <span>Georgia's Premier Programming Academy</span>
          </div>
          <h1 className='text-8xl font-black mt-7'>Welcome to <span className='bg-linear-to-br from-[#064E3B] via-[#047857] to-[#6bb469] bg-clip-text text-transparent'>GOA</span></h1>
          <p className='text-2xl text-[#65758b] text-center w-151.5 mt-7'>Master programming with expert mentors, join a thriving community, and build your future in tech.</p>
          <Link to={'#'} className='flex justify-center items-center gap-4 bg-[#1d724a] text-white text-xl font-medium px-8 py-3.5 rounded-xl mt-10 shadow-[0_0_12px_rgba(107,180,105,0.8)] cursor-pointer hover:bg-[#317e5b] hover:scale-107 transition-all duration-200'>
            <FaCode />
            Join GOA
          </Link>
          <div className='flex justify-center items-center gap-15 mt-15 pt-10 border-t border-[#e6eaf2] w-200'>
            <div className='text-center'>
              <p className='text-3xl font-bold bg-linear-to-br from-[#064E3B] via-[#047857] to-[#6bb469] bg-clip-text text-transparent'>1000+</p>
              <p className='text-[#65758b]'>Students</p>
            </div>
            <div className='text-center'>
              <p className='text-3xl font-bold bg-linear-to-br from-[#064E3B] via-[#047857] to-[#6bb469] bg-clip-text text-transparent'>20+</p>
              <p className='text-[#65758b]'>Expert Mentors</p>
            </div>
            <div className='text-center'>
              <p className='text-3xl font-bold bg-linear-to-br from-[#064E3B] via-[#047857] to-[#6bb469] bg-clip-text text-transparent'>90+</p>
              <p className='text-[#65758b]'>Learning Groups</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App