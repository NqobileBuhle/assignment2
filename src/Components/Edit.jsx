import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import streams from '../streams.json';

const Edit = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [country, setCountry] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Find the item by id from streams
    const foundItem = [...streams.movies, ...streams.Series].find(item => item.id === parseInt(id));
    if (foundItem) {
      setItem(foundItem);
      setTitle(foundItem.title);
      setDescription(foundItem.description);
      setCountry(foundItem.country);
      setYear(foundItem.year);
      setType(foundItem.type);
      setImage(foundItem.image);
    }
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    // Implement update functionality
    alert('Update not implemented');
    navigate(`/details/${id}`);
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

  if (!item) return <div>Loading...</div>;

  return (
    <section className="p-2">
      <h2 className="text-2xl font-semibold mb-4">Edit {item.title}</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full h-20 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Year</label>
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Type</label>
          <div className="flex space-x-4 items-center">
            <input
              type="radio"
              id="movie"
              name="type"
              value="movie"
              checked={type === "movie"}
              onChange={(e) => setType(e.target.value)}
              className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
            <label htmlFor="movie" className="text-sm text-gray-700">Movie</label>
            <input
              type="radio"
              id="series"
              name="type"
              value="series"
              checked={type === "series"}
              onChange={(e) => setType(e.target.value)}
              className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
            <label htmlFor="series" className="text-sm text-gray-700">Series</label>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={convertImage}
            className="border border-gray-300 rounded p-2 w-full text-sm"
          />
          {image && <img src={image} alt="Preview" className="w-64 h-55 object-cover mt-4" />}
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full"
          >
            Update
          </button>
        </div>
      </form>
    </section>
  );
};

export default Edit;
