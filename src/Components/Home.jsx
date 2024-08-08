import React from 'react'
import bg from '../assets/onlyMurder.png'

const Home = () => {
  return (
    
    <section id='LATEST MOVIES'>
        <h2 className="py-10 flex items-center font-semibold rp-300 mx-auto  ">LATEST MOVIES</h2>
    <div>
        <article className="flex flex-wrap gap-20">
            <div className='w-1/4'>
                <img className="w-45 h-48 object-cover" src={bg} alt=""/>
                

            </div>
             <div className="p-24 flex justify-between">
            
            </div> 
            <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-full">More</button>
            </div>
            
            
           
        </article>
    </div>
    <h2 className="py-10 flex items-center font-semibold lp-70">LATEST SERIES</h2>
    <div>
        <article className="bg-white  overflow-hidden flex items-center">
            <div>
                <img className="w-18 h-48 object-cover  flex items-center" src={bg} alt="" />
            </div>
             <div className="p-24 flex justify-between">
  
            </div> 
            <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-full">More</button></div>
            
            
           
        </article>
    </div>
</section>

  )
}

export default Home
