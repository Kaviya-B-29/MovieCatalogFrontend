import api from "./api";

/**
 * SEARCH MOVIES
 * Matches HomePage.jsx exactly
 */
export const fetchMovies = async (searchTerm, type, page) => {
  const res = await api.get("/movies/search", {
    params: {
      search: searchTerm,
      type,
      page,
    },
  });
  return res.data;
};

/**
 * FETCH MOVIE DETAILS
 * Matches MovieDetails.jsx exactly
 */
export const fetchMovieById = async (id) => {
  const res = await api.get(`/movies/${id}`);
  return res.data;
};
