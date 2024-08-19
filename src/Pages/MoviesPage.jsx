import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import streams from '../streams.json';

function MoviesPage() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  
  // Find the movie by ID
  const movie = streams.movies.find(m => m.id === parseInt(movieId));
  
  // Handle movie not found
  if (!movie) {
    return <div>Movie not found!</div>;
  }
  
  // Edit movie handler
  const handleEdit = () => {
    // Navigate to an edit page (not implemented here)
    navigate(`/edit/${movieId}`);
  };
  
  // Delete movie handler
  const handleDelete = () => {
    // Update streams (in a real app, you would use a state management solution or API call)
    const updatedMovies = streams.movies.filter(m => m.id !== parseInt(movieId));
    // You would normally update the state or make an API call here
    console.log('Updated movies list:', updatedMovies);
    // Navigate back to the movies list or show a success message
    navigate('/movies');
  };
  
  return (
    <div className="flex justify-end items-center p-8">
      <div className="flex flex-row items-start space-x-8 ml-auto">
        <img src={movie.image} alt={movie.title} className="h-96 w-64 object-cover mb-4" />
        <div className="flex flex-col">
          <h1 className="text-4xl mb-4">{movie.title}</h1>
          <p className="text-lg mb-4">{movie.description}</p>
          <p className="text-lg mb-2"><strong>Year:</strong> {movie.year}</p>
          <p className="text-lg mb-2"><strong>Country:</strong> {movie.country}</p>
          <div className="mt-4 flex space-x-4">
            <button
              onClick={handleEdit}
              className="bg-purple-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full  border-blue-500">
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-purple-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesPage;





