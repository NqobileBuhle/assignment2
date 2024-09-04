import React from 'react';
import streams from '../streams.json';

const NotFound = () => {
  // Check if there are series or movies to display
  const hasContent = (streams.series && streams.series.length > 0) || (streams.movies && streams.movies.length > 0);

  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl mb-4">Page Not Found</p>
      <div className="flex flex-wrap gap-6 justify-center">
        {hasContent ? (
          <>
            {streams.series.map(series => (
              <div key={series.id} className="w-[200px]">
                <img
                  className="w-64 h-55 object-cover"
                  src={series.image}
                  alt={series.title}
                />
                <p className="mt-2 text-lg">{series.title}</p>
              </div>
            ))}
            {streams.movies.map(movie => (
              <div key={movie.id} className="w-[200px]">
                <img
                  className="w-64 h-55 object-cover"
                  src={movie.image}
                  alt={movie.title}
                />
                <p className="mt-2 text-lg">{movie.title}</p>
              </div>
            ))}
          </>
        ) : (
          <p>No movies or series available</p>
        )}
      </div>
    </div>
  );
};

export default NotFound;
