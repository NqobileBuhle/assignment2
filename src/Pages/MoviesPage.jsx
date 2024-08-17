import React from 'react'
import { useParams } from 'react-router-dom';
import streams from '../streams.json';
// import Movies from '../Components/Movies'

const MoviesPage = () => {
   const { id } = useParams();
  const movie = streams.movies.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }
  return (
    <div className="flex flex-col items-center">
      <h2 className="py-10 font-semibold">{movie.title}</h2>
      <img className="w-64 h-55 object-cover" src={movie.image} alt={movie.title} />
      <p>{movie.description}</p>
      <p>{movie.country}</p>
      <p>{movie.year}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default MoviesPage
