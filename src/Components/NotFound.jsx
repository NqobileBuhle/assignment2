import React from 'react';
import streams from '../streams.json'

const NotFoundPage = () => {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl">Page Not Found</p>
        <div className="flex flex-wrap gap-6 justify-center">
          {streams.length > 0 ? (
            streams.map(movie => (
              <div key={movie.id} className="w-[200px]">
                <img
                  className="w-64 h-55 object-cover"
                  src={streams.image}
                  alt={streams.title}
                />
                <p className="mt-2 text-lg">{streams.title}</p>
              </div>
            ))
          ) : (
            <p>No movies available</p>
          )}
        </div>
    </div>
  );
};

export default NotFoundPage;
