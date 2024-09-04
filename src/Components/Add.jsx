import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Add({ submitMovies }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const submitData = (e) => {
    e.preventDefault();
    const newMovie = {
      title,
      description,
      country,
      year,
      type,
      image
    };

    submitMovies(newMovie);
    navigate("/");
  }

  const convertImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(reader.result);
        }
      }
    }
  }

  return (
    <div className="flex flex-col  items-center p-4 md:p-8 bg-gray-100">
      <input
        type="file"
        accept="image/*"
        onChange={convertImage}
        className="mb-4 w-full max-w-xs rounded border border-gray-300 p-2 shadow-lg"
      />

      {image && <img src={image} alt="Preview" className="w-full max-w-xs h-auto mb-4 object-cover rounded shadow-md" />}

      <form onSubmit={submitData} className="w-full max-w-md p-6 bg-white shadow-md rounded space-y-4">
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
            className="border border-gray-300 rounded p-2 w-full h-24 text-sm"
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

        <fieldset>
          <legend className="block text-sm font-medium text-gray-700">Type</legend>
          <div className="flex flex-wrap gap-4 mt-2">
            <div className="flex items-center">
              <input
                type="radio"
                id="movie"
                name="type"
                value="movie"
                className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                checked={type === "movie"}
                onChange={(e) => setType(e.target.value)}
              />
              <label htmlFor="movie" className="ml-2 text-sm text-gray-700">Movie</label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="series"
                name="type"
                value="series"
                className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                checked={type === "series"}
                onChange={(e) => setType(e.target.value)}
              />
              <label htmlFor="series" className="ml-2 text-sm text-gray-700">Series</label>
            </div>
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
}

export default Add;




