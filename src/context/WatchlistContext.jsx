import { createContext, useContext, useEffect, useState } from "react";
import {
  getWatchlist,
  addToWatchlist,
  removeFromWatchlist,
} from "../services/watchlistService";

const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlistIds, setWatchlistIds] = useState(new Set());

  const loadWatchlist = async () => {
    const res = await getWatchlist();
    const ids = new Set(res.data.map((m) => m.imdbID));
    setWatchlistIds(ids);
  };

  useEffect(() => {
    loadWatchlist();
  }, []);

  const add = async (movie) => {
    await addToWatchlist(movie);
    setWatchlistIds((prev) => new Set(prev).add(movie.imdbID));
  };

  const remove = async (mongoId, imdbID) => {
    await removeFromWatchlist(mongoId);
    setWatchlistIds((prev) => {
      const next = new Set(prev);
      next.delete(imdbID);
      return next;
    });
  };

  return (
    <WatchlistContext.Provider
      value={{ watchlistIds, add, remove, reload: loadWatchlist }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => useContext(WatchlistContext);
