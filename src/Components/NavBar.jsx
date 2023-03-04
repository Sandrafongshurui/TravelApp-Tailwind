import React from 'react'
import { AiFillPhone, AiOutlineClockCircle } from 'react-icons/ai'
import { BsAirplaneFill } from 'react-icons/bs'
import { LinksBar } from './LinksBar'

export const NavBar = () => {
  return (
    <div className="flex-col w-full justify-between items-center absolute z-20">
      <div className="flex justify-between items-center bg-white px-4 py-2 ">
        <div className="flex items-center gap-1">
          <h1 className="text-xl font-bold text-gray-700 flex">
            TRAVEL{' '}
            <span className="m-auto px-2">
              {' '}
              <BsAirplaneFill
                size={0}
                style={{ transform: 'rotate(90deg)' }}
                className="text-[var(--primary-dark)]"
              />
            </span>
            MY WAY
          </h1>
        </div>
        <div className="flex">
          {/* tailwind is a mobile first styling, , hidden till is md size */}
          <div className="hidden md:flex items-center gap-1 px-6">
            <AiOutlineClockCircle
              size={20}
              className="mr-2 text-[var(--primary-dark)]"
            />
            <p className="text-gray-700 text-sm">0900 - 1700</p>
          </div>
          <div className="hidden items-center gap-1 px-6 md:flex">
            <AiFillPhone
              size={20}
              className="mr-2 text-[var(--primary-dark)]"
            />
            <p className="text-gray-700 text-sm">+65 62689067</p>
          </div>
          <button>Get A Free Quote</button>
        </div>
      </div>
      <LinksBar />
    </div>
  )
}
