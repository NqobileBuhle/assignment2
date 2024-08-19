import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import streams from '../streams.json';

const EditMovie = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  
  const movie = streams.movies.find(m => m.id === parseInt(movieId));
  
  // State for movie details
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [country, setCountry] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (movie) {
      setTitle(movie.title);
      setDescription(movie.description);
      setCountry(movie.country);
      setYear(movie.year);
      setType(movie.type);
      setImage(movie.image);
    }
  }, [movie]);

  const handleSave = (e) => {
    e.preventDefault();
    const updatedMovie = { id: movie.id, title, description, country, year, type, image };
    
    // Update movie in streams (in a real app, use state or API)
    console.log('Updated movie:', updatedMovie);
    navigate(`/movies/${movieId}`);
  };

  return (
    <div className="flex justify-center  ml-auto p-11 bg-gray-100">
      <form onSubmit={handleSave} className="p-8 space-y-4 bg-white shadow-md rounded">
        <div>
          <label className="block text-sm font-medium text-gray-700">Movie/Series Name</label>
          <input
            type="text"
            className="border border-gray-300 rounded p-2 w-96 text-sm"
            placeholder="Enter movie/series name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            className="border border-gray-300 rounded p-2 w-96 h-20 text-sm"
            placeholder="Movie/series description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <input
            type="text"
            className="border border-gray-300 rounded p-2 w-96 text-sm"
            placeholder="Enter country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Year</label>
          <input
            type="text"
            className="border border-gray-300 rounded p-2 w-96 text-sm"
            placeholder="Enter year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="text"
            className="border border-gray-300 rounded p-2 w-96 text-sm"
            placeholder="Enter image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <fieldset>
          <div className="flex space-x-4 items-center">
            <input
              type="radio"
              id="movie"
              name="type"
              value="movie"
              className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
              checked={type === 'movie'}
              onChange={(e) => setType(e.target.value)}
            />
            <label htmlFor="movie" className="text-sm text-gray-700">Movie</label>

            <input
              type="radio"
              id="series"
              name="type"
              value="series"
              checked={type === 'series'}
              onChange={(e) => setType(e.target.value)}
              className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
            <label htmlFor="series" className="text-sm text-gray-700">Series</label>
          </div>
        </fieldset>

        <div>
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 rounded-full text-white w-full h-10 text-sm"
          >
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditMovie;


