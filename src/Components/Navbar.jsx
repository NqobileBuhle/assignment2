

  import React from 'react'
  import bg from '../assets/onlyMurder.png'
  import { useLocation } from 'react-router-dom';
  
  const Navbar = () => {
    const location = useLocation();

  // Map paths to their respective titles
  const titles = {
    '/movies': 'LATEST MOVIES',
    '/series': 'LATEST SERIES',
    '/add': 'ADD MOVIE/SERIES',
    '/details': '',
  };
    return (
      <div>
        <div className='bg-cover bg center bg-no-repeat h-96'style={{backgroundImage:`url(${bg})`}}>
          <nav className='flex flex-row items-center justify-between pr-12 pl-10 text-white'>
            <a href='/'><span className='text-blue-500'>Enter-</span>Stream</a>
              <ul className='flex space-x-6 item-center ml-10 '>
                <li><a href='/movies '>MOVIES</a></li>
                <li><a href='/series '>SERIES</a></li>

              </ul>
            <button className='bg-blue-500 hover:bg-blue-700 font-small rounded-full mt-8 py-2 px-4'>SUBSCRIBE</button>

          </nav>
      </div>
      </div>
    )
  }
  
  export default Navbar
  