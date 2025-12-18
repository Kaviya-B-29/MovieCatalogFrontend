import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchMovieById } from "../services/movieService";
import { useFavorites } from "../context/FavoriteContext";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const { toggleFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    const getMovie = async () => {
      const data = await fetchMovieById(id);
      setMovie(data);
    };
    getMovie();
  }, [id]);

  if (!movie) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-4 max-w-4xl mx-auto border-2 border-gray-300 shadow-2xl rounded-2xl m-6">
      <div className="flex flex-col gap-6 items-center">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/no-poster.jpg"}
          alt={movie.Title}
          className="w-80 h-auto"
        />

        <div>
          <h1 className="text-2xl font-bold mb-2">{movie.Title}</h1>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p className="mt-2">{movie.Plot}</p>

          <div className="flex justify-center">
            <button
              onClick={() => toggleFavorite(movie)}
              className="mt-4 px-4 py-2 bg-pink-500 text-white rounded"
            >
              {isFavorite(movie.imdbID)
                ? "Remove from Favorites"
                : "Add to Favorites"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
