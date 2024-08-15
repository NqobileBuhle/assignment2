
import Card from './Card'
import React from 'react'
import bg from '../assets/onlyMurder.png'
import wed from '../assets/wednesday.jpeg'
import carbon from '../assets/carbon.jpeg'
import dark from '../assets/dark.jpeg'
import fallout from '../assets/fallout.png'
import loki from '../assets/loki.jpeg'
import morty from '../assets/morty.png'
import last from '../assets/thelast.jpeg'
import streams from "../streams.json";

const HomeCards = () => {
  return (
    <div className='flex items-center flex-col'>
        <Card>
        {/* <h2 className="py-10 flex items-center font-semibold rp-300 mx-auto  ">
            LATEST MOVIES
        </h2> */}
        {/* <div className='flex-col flex gap-20 justify-center'>
         <article className="flex flex-wrap gap-10 grid grid-cols-4">
           <div className="w-[200px]">
             <img className="w-64 h-55 object-cover" src={wed} alt="" />
           </div>
           <div className="w-[200px]">
           <img className="w-64 h-55 object-cover" src={carbon} alt="" />
          </div>
          <div className="w-[200px]">
            <img className="w-64 h-55 object-cover" src={dark} alt="" />
         </div>
          <div className="w-[200px]">
            <img className="w-64 h-55 object-cover" src={fallout} alt="" />
          </div>
          <div className="w-[200px]">
             <img className="w-64 h-55 object-cover" src={loki} alt="" />
          </div>
           <div className="w-[200px]">
             <img className="w-64 h-55 object-cover" src={bg} alt="" />
          </div>
           <div className="w-[200px]">
            <img className="w-64 h-55 object-cover" src={morty} alt="" />
          </div>
          <div className="w-[200px]">
             <img className="w-64 h-55 object-cover" src={last} alt="" />
          </div>
          <div className="p-24 flex justify-between"></div>
          
         </article>
         <div className='flex justify-end'>
             <button className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-full">
               More
             </button>
           </div>
       </div>
        </Card>
        <Card>
         <h2 className="py-10 flex items-center font-semibold rp-300 mx-auto  ">
            LATEST SERIES
        </h2>
        <div className='flex-col flex gap-20 justify-center'>
         <article className="flex flex-wrap gap-10 grid grid-cols-4">
           <div className="w-[200px]">
             <img className="w-64 h-55 object-cover" src={wed} alt="" />
           </div>
           <div className="w-[200px]">
           <img className="w-64 h-55 object-cover" src={carbon} alt="" />
          </div>
          <div className="w-[200px]">
            <img className="w-64 h-55 object-cover" src={dark} alt="" />
         </div>
          <div className="w-[200px]">
            <img className="w-64 h-55 object-cover" src={fallout} alt="" />
          </div>
          <div className="w-[200px]">
             <img className="w-64 h-55 object-cover" src={loki} alt="" />
          </div>
           <div className="w-[200px]">
             <img className="w-64 h-55 object-cover" src={bg} alt="" />
          </div>
           <div className="w-[200px]">
            <img className="w-64 h-55 object-cover" src={morty} alt="" />
          </div>
          <div className="w-[200px]">
             <img className="w-64 h-55 object-cover" src={last} alt="" />
          </div>
          <div className="p-24 flex justify-between"></div>
          
         </article>
         <div className='flex justify-end'>
             <button className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-full">
               More
             </button>
           </div>
       </div> */}
        </Card>
      
    </div>
  )
}

export default HomeCards
