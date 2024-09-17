import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import streams from '../streams.json';

const Edit = () => {
  const { seriesId  } = useParams();  // get the id from URL
  const [item, setItem] = useState(null);  // initial state for the series to edit
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [country, setCountry] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const foundItem = streams.series.find(item => item.id === parseInt(seriesId, 10));
    
    console.log('ID from Params:', seriesId);
    console.log('Found Item:', foundItem);
  
    if (foundItem) {
      setItem(foundItem);
      setTitle(foundItem.title || '');
      setDescription(foundItem.description || '');
      setCountry(foundItem.Country || '');
      setYear(foundItem.Year || '');
      setType(foundItem.Type || '');
      setImage(foundItem.image || '');
    }
  }, [seriesId]);
  
    // only run when the id changes

  // Handle Update Submission
  const handleUpdate = (e) => {
    e.preventDefault();
    if (!title || !description || !country || !year || !type) {
      alert('Please fill in all fields');
      return;
    }

    const updatedSeries = { id: item.id, title, description, country, year, type, image };

    // Implement update functionality (you may want to use API or state here)
    console.log('Updated series:', updatedSeries);
    alert('Series updated successfully');
    navigate(`/series/${seriesId}`);
  };

  const convertImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(reader.result);
        }
      };
    }
  };

  // If no item is found or data is still loading
  // if (!item) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleUpdate} className="p-8 space-y-4 bg-white shadow-md rounded max-w-md mx-auto w-full">
        <div>
          <label className="block text-sm font-medium text-gray-700">Movie/Series Name</label>
          <input
            type="text"
            className="border border-gray-300 rounded p-2 w-full text-sm"
            placeholder="Enter movie/series name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            className="border border-gray-300 rounded p-2 w-full h-20 text-sm"
            placeholder="Movie/series description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <input
            type="text"
            className="border border-gray-300 rounded p-2 w-full text-sm"
            placeholder="Enter country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Year</label>
          <input
            type="text"
            className="border border-gray-300 rounded p-2 w-full text-sm"
            placeholder="Enter year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="text"
            className="border border-gray-300 rounded p-2 w-full text-sm"
            placeholder="Enter image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          {image && <img src={image} alt="Preview" className="w-64 h-64 object-cover mt-4 mx-auto" />}
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

export default Edit;
