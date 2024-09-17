import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import streams from '../streams.json';
import AddButton from './AddButton';

const Movies = ({isHome= false}) => {
  // Initialize state to keep track of the number of movies visible
  const [visibleCount, setVisibleCount] = useState(8); // Show 8 movies initially
  const movies = streams.movies || [];

  // Handle "More" button click to show more movies
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); // Show 4 more movies each time
  };

  return (
    <section>
      <div className="flex flex-col items-center p-4 md:p-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">LATEST MOVIES</h2>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6'>
          {/* Display movies up to the visibleCount */}
          {movies.slice(0, visibleCount).map((movie) => (
            <div key={movie.id} className="w-64  h-55  max-w-xs">
              <Link to={`/movies/${movie.id}`}>
                <img className="w-full h-full object-cover" src={movie.image} alt={movie.title} />
              </Link>
            </div>
          ))}
        </div>

        {/* Show "More" button only if there are more movies to display */}
        {/* {visibleCount < movies.length && ( */}
          <div className={`${isHome ? "flex" :"hidden"} justify-end mt-8`}>
            <button
              onClick={handleShowMore}
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full"
            >
              More
            </button>
          </div>
        {/* )} */}
      </div>
    </section>
  );
};

export default Movies;

