import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import streams from '../streams.json';

function MoviesPage() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  
  // Find the movie by ID
  const movie = streams.movies.find(m => m.id === parseInt(movieId, 10));
  
  // Handle movie not found
  if (!movie) {
    return <div className="text-center text-2xl">Movie not found!</div>;
  }
  
  // Edit movie handler
  const handleEdit = () => {
    navigate(`/edit/${movieId}`);
  };
  
  // Delete movie handler
  const handleDelete = () => {
    // Update streams (in a real app, use state management or API call)
    const updatedMovies = streams.movies.filter(m => m.id !== parseInt(movieId, 10));
    console.log('Updated movies list:', updatedMovies);
    // Navigate back to the movies list or show a success message
    navigate('/movies');
  };
  
  return (
    <div className="p-4 md:p-8">
      <div className="flex md:flex-row flex-col justify-center items-center space-x-8">
        <img 
          src={movie.image} 
          alt={movie.title} 
          className="h-96 w-64 object-cover mb-4"
        />
        <div className="flex flex-col">
          <h1 className="text-4xl mb-4">{movie.title}</h1>
          <p className="text-lg mb-4 max-w-[500px]">{movie.description}</p>
          <p className="text-lg mb-2"><strong>Year:</strong> {movie.Year}</p>
          <p className="text-lg mb-2"><strong>Country:</strong> {movie.Country}</p>
          <div className="mt-4 flex space-x-4">
            <button
              onClick={handleEdit}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesPage;
