import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import streams from '../streams.json';

function SeriesPage() {
  const { seriesId } = useParams();
  const navigate = useNavigate();
  
  // Find the series by ID
  const series = streams.Series.find(s => s.id === parseInt(seriesId, 10));
  
  // Handle series not found
  if (!series) {
    return <div className="text-center text-2xl">Series not found!</div>;
  }
  
  // Edit series handler
  const handleEdit = () => {
    navigate(`/edit-series/${seriesId}`);
  };
  
  // Delete series handler
  const handleDelete = () => {
    // Confirm deletion
    if (window.confirm('Are you sure you want to delete this series?')) {
      // Update series (in a real app, use state management or API call)
      const updatedSeries = streams.Series.filter(s => s.id !== parseInt(seriesId, 10));
      console.log('Updated series list:', updatedSeries);
      // Navigate back to the series list or show a success message
      navigate('/series');
    }
  };
  
  return (
    <div className="flex justify-end items-center p-8">
      <div className="flex flex-row items-start space-x-8 ml-auto">
        <img 
          src={series.image} 
          alt={series.title} 
          className="h-96 w-64 object-cover mb-4"
        />
        <div className="flex flex-col">
          <h1 className="text-4xl mb-4">{series.title}</h1>
          <p className="text-lg mb-4">{series.description}</p>
          <p className="text-lg mb-2"><strong>Year:</strong> {series.year}</p>
          <p className="text-lg mb-2"><strong>Country:</strong> {series.country}</p>
          <div className="mt-4 flex space-x-4">
            <button
              onClick={handleEdit}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full border-blue-500">
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

export default SeriesPage;
