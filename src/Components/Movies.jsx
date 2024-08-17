import React from 'react';
import { useNavigate } from 'react-router-dom';
import streams from '../streams.json';

const Movies = () => {
  const navigate = useNavigate();

  const handleMovieClick = (id) => {
    navigate(`/movies/${id}`);
  };

  const handleMoreClick = () => {
    navigate('/movies');
  };

  return (
    <section>
      <div className="flex items-center flex-col">
        <h2 className="py-10 flex items-center font-semibold rp-300 mx-auto">
          LATEST MOVIES
        </h2>
        <div className='flex-col flex gap-20 justify-center'>
          <article className="flex flex-wrap gap-10 grid grid-cols-4">
            {streams.movies.map((movie) => (
              <div key={movie.id} className="w-[200px] cursor-pointer" onClick={() => handleMovieClick(movie.id)}>
                <img className="w-64 h-55 object-cover" src={movie.image} alt={movie.title} />
              </div>
            ))}
          </article>
          <div className='flex justify-end'>
            <button onClick={handleMoreClick} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full mb-400">
              More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Movies;


