import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.scss';

const Search = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleInput = e => {
    setQuery(e.target.value);
  };

  const handleKeyUp = e => {
    if (query !== '' && e.key === 'Enter') {
      handleInput(e);
      navigate(`/list?search=${query}`);
      setQuery('');
    }
  };

  return (
    <div className="search">
      <img
        className="search-icon"
        src="/images/Nav/search.png"
        alt="search-icon"
      />
      <input
        className="search-input"
        type="text"
        onChange={handleInput}
        onKeyUp={handleKeyUp}
        value={query}
      />
    </div>
  );
};

export default Search;
