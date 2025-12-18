import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-indigo-900 p-4 text-white flex justify-between items-center">
      <Link to="/" className="font-bold text-2xl">
        Movie Search
      </Link>

      <div className="flex gap-6 text-lg font-semibold">
        <Link to="/favorites" className="hover:underline">
          Favorites
        </Link>

        <Link to="/watchlist" className="hover:underline">
          Watchlist
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
