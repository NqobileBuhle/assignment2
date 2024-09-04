

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
    '/editmovie': 'EDIT MOVIE'
  };

  // Get the title based on the current path
  const title = titles[location.pathname] || '';

  return (
    <div>
      <div className='bg-cover bg-center bg-no-repeat h-96' style={{ backgroundImage: `url(${bg})` }}>
        <nav className='flex flex-row items-center justify-between pr-12 pl-10 text-white'>
          <a href='/'><span className='text-blue-500'>Enter-</span>Stream</a>
          <ul className='flex space-x-6 item-center ml-10'>
            <li><Link to='/movies'>MOVIES</Link></li>
            <li><Link to='/series'>SERIES</Link></li>
          </ul>
          <button className='bg-blue-500 hover:bg-blue-700 font-small rounded-full mt-8 py-2 px-4'>
            SUBSCRIBE
          </button>
        </nav>
        <h1 className="text-center text-white text-3xl mt-6">{title}</h1>
      </div>
    </div>
  );
};

export default Navbar;




  