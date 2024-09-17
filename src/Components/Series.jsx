import React from 'react';
import { Link } from 'react-router-dom';
import streams from '../streams.json';

const Series = ({isHome =false}) => {
  const series = streams.series || [];

  return (
    <section>
      <div className="flex flex-col items-center p-4 md:p-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">LATEST SERIES</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6'>
          {series.map((s) => (
            <div key={s.id} className="w-64 h-55 max-w-xs">
              <Link to={`/series/${s.id}`}>
                <img className="w-full h-full object-cover" src={s.image} alt={s.title} />
              </Link>
            </div>
          ))}
        </div>
        <div className={`${isHome ? "flex" : "hidden"} justify-end mt-8`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
            More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Series;
