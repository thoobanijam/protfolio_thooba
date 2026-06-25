'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter()

  return (
    <div
      className="
        w-full
        flex flex-col md:flex-row
        justify-between items-center
        gap-6
        px-6 md:px-12
        py-4
        bg-[linear-gradient(90deg,#282a36_0%,#303344_50%,#4b496b_100%)]
      "
    >
      <div className="flex items-center gap-4">
        <img
          src="/img/photo.jpeg"
          alt="Profile"
          className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-[#6173a1] hover:scale-110 transition"
        />

        <h1 className="text-xl md:text-2xl font-bold text-white cursor-pointer hover:scale-105">
          <span className="text-[#b490e9] text-3xl md:text-4xl ">F</span>
          athima Thooba
        </h1>
      </div>

      <div className="flex gap-4 md:gap-10 text-sm md:text-base ">
        <h1
          onClick={() => router.push('/')}
          className="cursor-pointer text-white hover:text-[#ff76ce]"
        >
          HOME
        </h1>

        <h1
          onClick={() => router.push('/portfolio')}
          className="cursor-pointer text-white hover:text-[#ff76ce]"
        >
          PORTFOLIO
        </h1>

        <h1
          onClick={() => router.push('/resume')}
          className="cursor-pointer text-white hover:text-[#ff76ce]"
        >
          RESUME
        </h1>
      </div>
    </div>
  )
}

export default Navbar