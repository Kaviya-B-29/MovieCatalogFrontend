import { useEffect, useState } from "react";
import {
  getWatchlist,
  removeFromWatchlist,
} from "../services/watchlistService";

const Watchlist = () => {
  const [movies, setMovies] = useState([]);

  const loadWatchlist = async () => {
    const res = await getWatchlist();
    setMovies(res.data);
  };

  useEffect(() => {
    loadWatchlist();
  }, []);

  const handleRemove = async (id) => {
    await removeFromWatchlist(id);
    loadWatchlist();
  };

  if (movies.length === 0) {
    return <p className="text-center mt-10">Watchlist is empty</p>;
  }

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <div
          key={movie._id}
          className="bg-white shadow rounded p-3"
        >
          <img
            src={movie.poster !== "N/A" ? movie.poster : "/no-poster.jpg"}
            alt={movie.title}
            className="h-60 w-full object-cover rounded"
          />
          <h3 className="font-bold mt-2">{movie.title}</h3>
          <p className="text-sm text-gray-600">{movie.year}</p>

          <button
            onClick={() => handleRemove(movie._id)}
            className="mt-2 w-full bg-red-600 text-white py-1 rounded"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Watchlist;
