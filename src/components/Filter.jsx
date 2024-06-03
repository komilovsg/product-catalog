import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    onFilter(text);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Поиск по продуктам..."
        value={searchText}
        onChange={handleInputChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default Filter;
