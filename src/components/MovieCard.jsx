import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoriteContext";
import {
  addToWatchlist,
  getWatchlist,
} from "../services/watchlistService";

const MovieCard = ({ movie }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const [addedToWatchlist, setAddedToWatchlist] = useState(false);

  // ✅ On mount, verify with BACKEND (not localStorage)
  useEffect(() => {
    const checkWatchlist = async () => {
      try {
        const res = await getWatchlist();
        const exists = res.data.some(
          (item) => item.imdbID === movie.imdbID
        );
        setAddedToWatchlist(exists);
      } catch {
        setAddedToWatchlist(false);
      }
    };

    checkWatchlist();
  }, [movie.imdbID]);

  const handleAddToWatchlist = async () => {
    try {
      await addToWatchlist({
        imdbID: movie.imdbID,
        title: movie.Title,
        poster: movie.Poster,
        year: movie.Year,
      });
      setAddedToWatchlist(true);
    } catch {
      alert("Already in Watchlist");
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/no-poster.jpg"}
        alt={movie.Title}
        className="h-64 w-full object-cover mb-2 rounded"
      />

      <h2 className="font-bold text-lg">{movie.Title}</h2>
      <p className="text-sm text-gray-600">{movie.Year}</p>

      <div className="flex justify-between items-center mt-3">
        <Link
          to={`/movie/${movie.imdbID}`}
          className="text-blue-500 hover:underline"
        >
          Details
        </Link>

        <button onClick={() => toggleFavorite(movie)}>
          {isFavorite(movie.imdbID) ? (
            <span className="material-icons text-red-500">favorite</span>
          ) : (
            <span className="material-icons-outlined text-gray-400">
              favorite
            </span>
          )}
        </button>
      </div>

      <button
        onClick={handleAddToWatchlist}
        disabled={addedToWatchlist}
        className={`mt-3 py-1 rounded text-white ${
          addedToWatchlist
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-700"
        }`}
      >
        {addedToWatchlist ? "Added to Watchlist" : "Add to Watchlist"}
      </button>
    </div>
  );
};

export default MovieCard;
