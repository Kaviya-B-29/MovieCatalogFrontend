import { useEffect, useState } from "react";
import { fetchMovies } from "../services/movieService";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("Harry Potter");
  const [type, setType] = useState("");
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState("");

  const getMovies = async () => {
    const data = await fetchMovies(searchTerm, type, currentPage);

    if (data.Response === "True") {
      setMovies(data.Search);
      setTotalResults(parseInt(data.totalResults));
      setError("");
    } else {
      setMovies([]);
      setTotalResults(0);
      setError(data.Error || "No results found");
    }
  };

  useEffect(() => {
    getMovies();
  }, [currentPage]);

  const handleSearch = () => {
    setCurrentPage(1);
    getMovies();
  };

  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div className="p-4 bg-gradient-to-tl from-blue-200 to-white">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        type={type}
        setType={setType}
        handleSearch={handleSearch}
      />

      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4 bg-gradient-to-tr from-blue-200 to-white">
       {movies.map((movie, index) => (
  <MovieCard key={`${movie.imdbID}-${index}`} movie={movie} />
))}

      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default HomePage;
