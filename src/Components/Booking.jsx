import React from 'react'

const Booking = () => {
  return (
    <div id='booking' className='m-auto max-w-[1140px] w-full p-4'>
        <form className='w-full m-auto lg:flex'>
            <div className='pb-3'>
                <label  className="font-bold md:text-xl" htmlFor="">Booking</label>
                <select name='' id='' className='mt-2 border rounded-md w-full p-2 md:text-xl'>
                    <option value="">Maldives</option>
                    <option value="">India</option>
                    <option value="">Nevada</option>
                    <option value="">Columbia</option>
                </select>
            </div>
            <div className='pb-3 m-auto flex gap-5'>
                <div className='w-1/2'>
                    <label className="pb-2 font-bold md:text-xl"  htmlFor="">Check-In</label>
                    <input className="mt-2 border rounded-md w-full p-2 md:text-xl" type="date" />
                </div>
                <div className='w-1/2'>
                    <label className="pb-2 font-bold md:text-xl"  htmlFor="">Check-Out</label>
                    <input className="mt-2 border rounded-md w-full p-2 md:text-xl" type="date" />
                </div>
            </div>
            <div className='pb-3'>
                <label className="pb-2 font-bold md:text-xl"  htmlFor="">Search</label>
                <button className='mt-2 w-full md:text-xl'>Rates and Availabilities</button>
            </div>

        </form>

    </div>
  )
}

export default Booking