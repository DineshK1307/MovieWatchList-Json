import React, { useState } from 'react';
import moviesData from './movies.json'; 
import './App.css'; 

function App() {
  const [watchlist, setWatchlist] = useState([]);


  const addToWatchlist = (movie) => {
    setWatchlist([...watchlist, movie]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie List</h1>
      </header>
      <main>
        <div className="movie-list-container">
          <h2>Movies</h2>
          <ul className="movie-list">
            {moviesData.map((movie, index) => (
              <li key={index} className="movie-item">
                <h3>{movie.title}</h3>
                <p><strong>Year:</strong> {movie.year}</p>
                <p><strong>Genre:</strong> {movie.genre}</p>
                <p><strong>Director:</strong> {movie.director}</p>
                <button onClick={() => addToWatchlist(movie)}>Add to Watchlist</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="watchlist-container">
          <h2>My Watchlist</h2>
          <ul className="watchlist">
            {watchlist.map((movie, index) => (
              <li key={index} className="watchlist-item">
                <h3>{movie.title}</h3>
                <p><strong>Year:</strong> {movie.year}</p>
                <p><strong>Genre:</strong> {movie.genre}</p>
                <p><strong>Director:</strong> {movie.director}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
