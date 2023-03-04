import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { BsFacebook, BsTwitter, BsGoogle, BsInstagram } from 'react-icons/bs'

export const LinksBar = () => {
  const [sideBar,setSideBar] = useState(false)

  const handleSideBar = () => {
    console.log("toggle sidebar");
    setSideBar(!sideBar)
  }

  return (
    <div className="w-full min-h-[50px] flex justify-end sm:justify-center items-center bg-gradient-to-t text-gray from-transparent to-white">
      <ul className="hidden sm:flex px-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Gallery</a>
        </li>
        <li>
          <a href="/">Deals</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
      {/* anything above sm, sm-md */}
      <div onClick={handleSideBar} className="sm:hidden z-10">
        <FaBars size={20} className="mr-4 cursor-pointer" />
      </div>
      {/* md: any above mid , md-lg*/}
      <div
        className={
          sideBar
            ? 'overflow-y-hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col sm:hidden '
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-300'
        }
      >
        <ul className="h-100 w-100 text-center pt-12">
          <li className="text-2xl py-8">
            <a href="/">Home</a>
          </li>
          <li className="text-2xl py-8">
            <a href="/">Gallery</a>
          </li>
          <li className="text-2xl py-8">
            <a href="/">Deals</a>
          </li>
          <li className="text-2xl py-8">
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
