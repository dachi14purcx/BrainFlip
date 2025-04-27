import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const data = [
    'Geometry 4x3',
    'Geometry 5x4',
    'Geometry 6x4',
    'Animals 4x4',
    'Animals 5x4',
    'Animals 6x4',
    'Flags 4x3',
    'Flags 4x3',
    'Geometry 6x4'
  ];

  const filteredData = data.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center my-8 gap-4 absolute right-10 top-30">
      <input
        type="text"
        placeholder="Search..."
        className="bg-white p-5 text-black text-[20px] font-semibold border-2 border-black rounded-4xl w-[500px] h-[60px] focus:outline-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {searchTerm && (
        <div className="borders flex flex-col gap-2 mt-4 absolute top-15 bg-white p-3 rounded-xl drop-shadow-2xl shadow-amber-900">
          {filteredData.map((item, index) => (
            <div key={index} className="bg-black borders border-2 text-white text-[20px] font-semibold p-2 rounded-md w-[420px] text-center">
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;