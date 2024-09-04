import React from 'react';
import { Link } from 'react-router-dom';
import streams from '../streams.json';

const Movies = () => {
  const movies = streams.movies || [];

  return (
    <section>
      <div className="flex flex-col items-center p-4 md:p-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">LATEST MOVIES</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6'>
          {movies.map((movie) => (
            <div key={movie.id} className="w-full max-w-xs">
              <Link to={`/movies/${movie.id}`}>
                <img className="w-64 h-55 object-cover" src={movie.image} alt={movie.title} />
              </Link>
            </div>
          ))}
        </div>
        <div className='flex justify-end mt-8'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
            More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Movies;
