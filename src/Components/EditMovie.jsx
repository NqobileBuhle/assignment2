import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import streams from '../streams.json';

const Edit = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Find the item by id from streams
    const foundItem = [...streams.movies, ...streams.Series].find(item => item.id === parseInt(id));
    setItem(foundItem);
  }, [id]);

  const handleDelete = () => {
    // Implement delete functionality
    alert('Delete functionality is not yet implemented');
  };

  const handleEdit = () => {
    navigate(`/edit/${id}`); // Redirect to the edit page
  };

  if (!item) return <div>Loading...</div>;

  return (
    <section className="p-8">
      <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
      <img src={item.image} alt={item.title} className="w-64 h-55 object-cover mb-4" />
      <p>{item.description}</p>
      <p><strong>Country:</strong> {item.country}</p>
      <p><strong>Year:</strong> {item.year}</p>
      <p><strong>Type:</strong> {item.type}</p>
      <button onClick={handleEdit} className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded mr-4">
        Edit
      </button>
      <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
        Delete
      </button>
    </section>
  );
};

export default Edit;
