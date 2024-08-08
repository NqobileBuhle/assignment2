import React from 'react'
import bg from '../assets/onlyMurder.png'

const Movies = () => {
  return (
    <div className="flex items-center flex-col">
      <h2 className="py-10 flex items-center font-semibold rp-300 mx-auto  ">
        LATEST MOVIES
      </h2>
      <div className='flex-col flex gap-20 justify-center'>
        <article className="flex flex-wrap gap-10 grid grid-cols-4">
          <div className="w-[250px]">
            <img className="w-64 h-55 object-cover" src={bg} alt="" />
          </div>
          <div className="w-[250px]">
            <img className="w-64 h-55 object-cover" src={bg} alt="" />
          </div>
          <div className="w-[250px]">
            <img className="w-64 h-55 object-cover" src={bg} alt="" />
          </div>
          <div className="w-[250px]">
            <img className="w-64 h-55 object-cover" src={bg} alt="" />
          </div>
          <div className="w-[250px]">
            <img className="w-64 h-55 object-cover" src={bg} alt="" />
          </div>
          <div className="w-[250px]">
            <img className="w-64 h-55 object-cover" src={bg} alt="" />
          </div>
          <div className="w-[250px]">
            <img className="w-64 h-55 object-cover" src={bg} alt="" />
          </div>
          <div className="w-[250px]">
            <img className="w-64 h-55 object-cover" src={bg} alt="" />
          </div>
          <div className="p-24 flex justify-between"></div>
          
        </article>
        <div className='flex justify-end'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-full mb-400">
              More
            </button>
          </div>
        
      </div>
    </div>
  );
}

export default Movies
