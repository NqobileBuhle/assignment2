import React from 'react';
import { Link } from 'react-router-dom';
import streams from '../streams.json';

const Series = ({ series }) => {
  return (
    <section>
      <div className="flex items-center flex-col">
        <h2 className="py-10 flex items-center font-semibold rp-300 mx-auto">
          LATEST SERIES
        </h2>
        <div className='flex-col flex gap-20 justify-center'>
          <article className=" gap-10 grid grid-cols-4">
            {series.map((series) => (
              <div key={series.id} className="w-[200px]">
                <Link to={`/series/${series.id}`}>
                  <img className="w-64 h-55 object-cover" src={series.image} alt={series.title} />
                </Link>
              </div>
            ))}
          </article>
          <div className='flex justify-end'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full mb-400">
              More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Series;

