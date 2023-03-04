import React from 'react'

const Hero = () => {
  return (
    <div className="w-full h-[90vh] ">
      <div className="opacity-90 h-full blur-[5px]">
        <img
          src="https://static.toiimg.com/thumb/65292208/Dhankar-Photographer.jpg?width=1200&height=900"
          alt="/"
          className="w-full h-full object-cover"
        />
      </div>

      {/* container, set max width of container, -[50%] at md this div will smaller by 50 %*/}
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[30%] sm:top-[40%] w-full text-white p-4 max-w-[600px] flex-col md:-[50%]">
          <h1 className="text-4xl font-bold">Find your special trip</h1>
          <h2 className="text-4xl font-bold">With <span className='text-yellow-300 drop-shadow-lg shadow-black'>Travel My Way</span></h2>
          <p className="pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            in, aut eveniet ratione illum, amet reprehenderit id soluta est
            voluptatibus quod qui! Officiis illo mollitia voluptatum assumenda.
            Doloribus, dignissimos. Necessitatibus?
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
