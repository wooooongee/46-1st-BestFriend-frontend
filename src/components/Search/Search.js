import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.scss';

const Search = () => {
  const navigate = useNavigate();
  const query = 

  return (
    <div className="search">
      <img
        className="search-icon"
        src="/images/Nav/search.png"
        alt="search-icon"
      />
      <input
        className="search-input"
        onKeyUp={() => {
          navigate(`/list?search=${query}`);
        }}
      />
    </div>
  );
};

export default Search;
