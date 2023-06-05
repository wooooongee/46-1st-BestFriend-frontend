import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.scss';

const Search = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      setQuery(e.target.value);
      e.target.value = '';
      navigate(`/list?search=${query}`);
    }
  };

  return (
    <div className="search">
      <img
        className="search-icon"
        src="/images/Nav/search.png"
        alt="search-icon"
      />
      <input className="search-input" type="text" onKeyUp={handleKeyPress} />
    </div>
  );
};

export default Search;
