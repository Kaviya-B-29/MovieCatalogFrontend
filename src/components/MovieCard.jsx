import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoriteContext";
import { addToWatchlist } from "../services/watchlistService";

const MovieCard = ({ movie }) => {
  const { isFavorite, toggleFavorite } = useFavorites();

  const handleAddToWatchlist = async () => {
    try {
      await addToWatchlist({
        imdbID: movie.imdbID,
        title: movie.Title,
        poster: movie.Poster,
        year: movie.Year,
      });
      alert("Added to Watchlist");
    } catch (err) {
      alert("Failed to add to Watchlist");
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
        {/* Details */}
        <Link
          to={`/movie/${movie.imdbID}`}
          className="text-blue-500 hover:underline"
        >
          Details
        </Link>

        {/* Favorite */}
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

      {/* Watchlist */}
      <button
        onClick={handleAddToWatchlist}
        className="mt-3 bg-indigo-600 text-white py-1 rounded hover:bg-indigo-700"
      >
        Add to Watchlist
      </button>
    </div>
  );
};

export default MovieCard;
