import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center gap-2 mb-6">
      <input
        type="text"
        placeholder="Enter your city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="px-3 py-2 border rounded"
      />
      <button type="submit" className="px-4 py-2 bg-sky-500 text-white rounded">
        Search
      </button>
    </form>
  );
};

export default Search;
