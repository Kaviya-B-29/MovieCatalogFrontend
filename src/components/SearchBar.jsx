const SearchBar = ({ searchTerm, setSearchTerm, type, setType, handleSearch }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for movies..."
        className="border px-4 py-2 rounded w-full md:w-1/2"/>
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border px-4 py-2 rounded"
      >
        <option value="">All</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="episode">Episode</option>
      </select>
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
