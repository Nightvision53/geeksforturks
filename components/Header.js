import HeaderCategories from "./HeaderCategories"
import Link from "next/link"
import { useState, useEffect } from "react"
const Header = () => {




  return (
    <header className="sticky top-0 shadow-lg">
      <div className='bg-black text-white w-full h-20 items-center text-center p-5 '>
        <h1 className='font-bold text-3xl sm:text-red-700 lg:text-blue-600 xl:text-green-700'><Link href={"/"}>Geeks for Turks</Link></h1>
      </div>
      <HeaderCategories />
    </header>
  )
}

export default Header