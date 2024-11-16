import React from 'react';

const SearchComponent = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex justify-center p-4">
      <form className="flex items-center  max-w-4xl border border-gray-300 rounded-lg overflow-hidden shadow-lg">
        <input
          type="text"
          className="search-input w-full sm:w-80 md:w-96 p-3 h-12 text-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search profiles by name, add, desc..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-r-lg transition duration-300"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchComponent;
