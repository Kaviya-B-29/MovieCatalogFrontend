import { createBrowserRouter, RouterProvider } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import MovieDetails from "./pages/MovieDetails";
import { FavoritesProvider } from "./context/FavoriteContext";
import FavoritesPage from "./components/FavoritesPage";
import Watchlist from "./pages/Watchlist";

const routes = [
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <HomePage />
      </>
    ),
  },
  {
  path: "/watchlist",
  element: (
    <>
      <Navbar />
      <Watchlist />
    </>
  ),
},

  {
    path: '/favorites',
    element: (
      <>
        <Navbar />
        <FavoritesPage />
      </>
    ),
  },
  {
    path: '/movie/:id',
    element: (
      <>
        <Navbar />
        <MovieDetails />
      </>
    ),
  },
];

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});

const App = () => {
  return (
    <FavoritesProvider>
      <RouterProvider
        router={router}
        future={{ v7_startTransition: true }}
      />
    </FavoritesProvider>
  );
};

export default App;
