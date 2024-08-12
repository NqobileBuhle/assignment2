import React from 'react'
import bg from '../assets/onlyMurder.png'
import avengers from '../assets/avengers.jpeg'
import death from '../assets/death.png'
import mid from '../assets/midsommar.png'
import hidden from '../assets/hiddenlife.png'
import one from '../assets/onechild.png'
import parasite from '../assets/parasite.png'
import rick from '../assets/RickDalton.png'
import joker from '../assets/joker.png'
import streams from '../streams.json'

const Movies = () => {
  console.log(streams);
  return (
    <div className="flex items-center flex-col">
      <h2 className="py-10 flex items-center font-semibold rp-300 mx-auto  ">
        LATEST MOVIES
      </h2>
      <div className='flex-col flex gap-20 justify-center'>
        <article className="flex flex-wrap gap-10 grid grid-cols-4">
          {streams.map((movie)=>(
            <div className="w-[250px]">
             <img className="w-64 h-55 object-cover" src={streams.image} alt="" /> 
             <h3 className='text-xl font-bold'>{streams.title}</h3>
          </div>
          ))}
          
           {/* <div className="w-[250px]">
            <img className="w-64 h-55 object-cover" src={death} alt="" />
          </div>
          <div className="w-[250px]">
            <img className="w-64 h-55 object-cover" src={mid} alt="" />
          </div>
          <div className="w-[250px]">
            <img className="w-64 h-55 object-cover" src={hidden} alt="" />
          </div>
          <div className="w-[250px]">
            <img className="w-64 h-55 object-cover" src={one} alt="" />
          </div>
          <div className="w-[250px]">
            <img className="w-64 h-55 object-cover" src={parasite} alt="" />
          </div>
          <div className="w-[250px]">
            <img className="w-64 h-55 object-cover" src={joker} alt="" />
          </div>
          <div className="w-[250px]">
            <img className="w-64 h-55 object-cover" src={rick} alt="" />
          </div>
          <div className="p-24 flex justify-between"></div> */}
          
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
