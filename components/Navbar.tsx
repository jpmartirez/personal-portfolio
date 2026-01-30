import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar max-w-7xl mx-auto w-full pt-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content flex flex-col gap-4 bg-gray-700/30 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <Link href="/"><li className="font-semibold ">Home</li></Link>
            <Link href="/about"><li className="font-semibold">About</li></Link>
            <Link href="/works"><li className="font-semibold">Work</li></Link>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">J.Paul</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-5 py-3 bg-gray-700/30 flex gap-8 rounded-full">
          <Link href="/"><li className="font-semibold text-gray-400">Home</li></Link>
          <Link href="/about"><li className="font-semibold text-gray-400">About</li></Link>
          <Link href="/works"><li className="font-semibold text-gray-400">Work</li></Link>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href={'/contact'} className="btn bg-white text-black rounded-full font-semibold" >Let's Talk</Link>
      </div>
    </div>
  )
}

export default Navbar