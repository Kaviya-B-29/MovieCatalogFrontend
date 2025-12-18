# Movie Search App

This is a movie search application built using ReactJS, React Router, and Tailwind CSS. It allows users to search for movies using the OMDB API, view details, filter by type, paginate results, and manage a list of favorites.

## Features

- Search movies by title or keyword
- View detailed information for each movie
- Filter by type (movie, series, episode)
- Pagination support (10 movies per page)
- Add or remove movies from favorites
- View favorite movies list
- Responsive UI with Tailwind CSS
- Error handling and empty state messages

## Project Structure
movie-search-app/
-- public/
-- src/
    -- components/
        -FavoritePage       // Displays all the favorite movies which persist across sessions
        -Moviecard          // Renders each movie poster, title, and type
        -Navbar             // Top navigation with link to favorites
        -Pagination         // Controls for navigating between result pages each 
        -SearchBar          // Input + dropdown to search movies by title/type
    ── context/
        -FavoriteContext    // React Context to store favorite movies across routes
    ── pages/
        -HomePage           // Movie search and results page
        -MovieDetails       // Single movie detail page
    ── services/
        -api                // Handles OMDB API requests
    ── App.jsx              // Main app component and routing setup
    ── main.jsx             // Entry point used by Vite
    ── index.css


## Tech Stack

- ReactJS
- React Router v6
- Tailwind CSS
- JavaScript
- OMDB API

