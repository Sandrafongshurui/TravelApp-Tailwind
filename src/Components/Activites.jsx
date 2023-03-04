import React from 'react'

const Activites = () => {
  return (
    <div className="max-w-[1140px] m-auto mt-[-75px] md:flex md:justify-evenly">
      <div className="relative p-4 w-full h-full">
        <h3 className="absolute z-20 font-bold text-white drop-shadow-lg shadow-black-500 shadow- text-2xl left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
          Resorts
        </h3>
        <div className="bg-yellow-200 rounded-[15px]">
          <img
            src="https://images.unsplash.com/photo-1617859047452-8510bcf207fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="/"
            className="shadow-lg rounded-[15px] object-fill w-full h-full hover:opacity-[0.2] hover:cursor-pointer"
          />
        </div>
        {/* <div className="rounded-[15px] p-4 absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-blue-400 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60"></div> */}
      </div>
      <div className="relative p-4 w-full h-full">
        <h3 className="absolute z-20 font-bold text-white text-2xl left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
          Cities
        </h3>
        <div className="bg-yellow-200 rounded-[15px]">
          <img
            src="https://static01.nyt.com/images/2020/10/05/travel/06urban-vs-rural-4/oakImage-1601911576151-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
            alt="/"
            className="shadow-lg rounded-[15px] object-fill w-full h-full hover:opacity-[0.2] hover:cursor-pointer"
          />
        </div>
      </div>
      <div className="relative p-4 w-full h-full">
        <h3 className="absolute z-20 font-bold text-white text-2xl left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
          Nature
        </h3>
        <div className="bg-yellow-200 rounded-[15px]">
          <img
            src="https://cdn.getyourguide.com/img/location/5628aad4c21c9.jpeg/68.jpg"
            alt="/"
            className="shadow-lg rounded-[15px] object-fill w-full h-full hover:opacity-[0.2] hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}

export default Activites
