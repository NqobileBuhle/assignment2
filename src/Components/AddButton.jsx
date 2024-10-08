import React from 'react';
import { Link } from 'react-router-dom';
import Add from '../Components/Add'

const AddButton = ({isHome = false}) => {
  return (
    <div className={`${isHome ? "hidden" : "flex"} justify-end mt-4 pr-8`}>
      <Link to="/add">
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
          ADD 
        </button>
      </Link>

    </div>
  );
};

export default AddButton;
