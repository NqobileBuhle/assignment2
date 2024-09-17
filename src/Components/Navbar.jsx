

import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import bg from '../assets/onlyMurder.png';

const Navbar = () => {
  const location = useLocation();

  // Map paths to their respective titles
  const titles = {
    '/movies': 'LATEST MOVIES',
    '/series': 'LATEST SERIES',
    '/add': 'ADD MOVIE/SERIES',
    '/editmovie': 'EDIT MOVIE',
    '/': ''
  };

  // Get the title based on the current path
  const title = titles[location.pathname] || '';

  return (
    <div>
      <div className='bg-cover bg-center bg-no-repeat h-48 md:h-64 lg:h-96' style={{ backgroundImage: `url(${bg})` }}>
        <nav className='flex flex-col md:flex-row items-center justify-between p-4 md:p-8 text-white'>
          <a href='/' className='text-2xl md:text-3xl lg:text-4xl'>
            <span className='text-blue-500'>Enter-</span>Stream
          </a>
          <ul className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 ml-0 md:ml-10 mt-4 md:mt-0'>
            <li><Link to='/movies' className='hover:text-gray-300'>MOVIES</Link></li>
            <li><Link to='/series' className='hover:text-gray-300'>SERIES</Link></li>
          </ul>
          <button className='bg-blue-500 hover:bg-blue-700 font-small rounded-full mt-4 md:mt-0 py-2 px-4'>
            SUBSCRIBE
          </button>
        </nav>
        <h1 className="text-center text-white text-2xl md:text-3xl lg:text-4xl mt-4">{title}</h1>
      </div>
    </div>
  );
};

export default Navbar;





  