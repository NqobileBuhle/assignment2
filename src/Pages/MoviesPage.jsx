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
    <div className="p-8">
      <img src={movie.image} alt={movie.title} className="h-96 w-64 object-cover mb-4" />
      <h1 className="text-4xl mb-4">{movie.title}</h1>
      <p className="text-lg mb-4">{movie.description}</p>
      <p><strong>Year:</strong> {movie.year}</p>
      <p><strong>Country:</strong> {movie.country}</p>
      <div className="mt-4 gap-10">
        <button 
          onClick={handleEdit}
          className="bg-blue-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-full mr-2">
          Edit
        </button>
        <button 
          onClick={handleDelete}
          className="bg-blue-500 hover:bg-red-600 text-white py-2 px-4 rounded-full">
          Delete
        </button>
      </div>
    </div>
  );
}

export default MoviesPage;



