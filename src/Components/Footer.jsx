import React from 'react'

const Footer = () => {
  return (
    <div>
    
      <nav className=' py-10 flex bg-gray flex items-center justify-between pr-12 pl-10 text-black'>
        <a href=''><span className='text-black-500'>Enter-</span>Stream</a>
          <ul className='list-none p-0  space-x-10 '>
            <li><a href='/movies '>MOVIES</a></li>
            <li><a href='/series '>SERIES</a></li>

          </ul>
        <button className='  font-small  mt-8 py-2 px-4'>SUBSCRIBE</button>

      </nav>
  </div>
  
  )
}

export default Footer
