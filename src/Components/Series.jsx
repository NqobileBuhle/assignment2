import React from 'react'
import streams from '../streams.json'

const Series = () => {
  console.log(streams);
  return (
    <section>
      <div className="flex items-center flex-col">
        <h2 className="py-10 flex items-center font-semibold rp-300 mx-auto">
          LATEST SERIES
        </h2>
        <div className='flex-col flex gap-20 justify-center'>
          <article className="flex flex-wrap gap-10 grid grid-cols-4">
            {streams.Series.map((series) => (
              <div key={series.id} className="w-[200px]">
                <img className="w-64 h-55 object-cover" src={series.image} alt={series.title} />
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


