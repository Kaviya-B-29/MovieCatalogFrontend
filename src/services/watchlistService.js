import api from "./api";

export const addToWatchlist = (movie) =>
  api.post("/watchlist", movie);

export const getWatchlist = () =>
  api.get("/watchlist");

export const removeFromWatchlist = (id) =>
  api.delete(`/watchlist/${id}`);
