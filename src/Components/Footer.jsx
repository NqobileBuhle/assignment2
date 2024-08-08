import React from 'react'

const Footer = () => {
  return (
    <div>
    
      <nav className=' flex bg-gray-300 items-center justify-between  p-5 text-black'>
        <a href=''><span className='text-black-500'>Enter-</span>Stream</a>
          <ul className='flex space-x-4 item-center ml-10'>
            <li><a href='/movies '>MOVIES</a></li>
            <li><a href='/series '>SERIES</a></li>
            
          </ul>
        <button className='font-small '>SUBSCRIBE</button> 

      </nav>
  </div>
  
  )
}

export default Footer
