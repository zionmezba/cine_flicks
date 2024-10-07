import './App.css';
import { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com/?apikey=9586d5fe';

const movies1 = [{
  "Title": "Inception",
  "Year": "2010",
  "imdbID": "tt1375666",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
},
{
  "Title": "Inception: The Cobol Job",
  "Year": "2010",
  "imdbID": "tt5295894",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjE0NGIwM2EtZjQxZi00ZTE5LWExN2MtNDBlMjY1ZmZkYjU3XkEyXkFqcGdeQXVyNjMwNzk3Mjk@._V1_SX300.jpg"
}, {
  "Title": "Inception: Motion Comics",
  "Year": "2010–",
  "imdbID": "tt1790736",
  "Type": "series",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNGRkYzkzZmEtY2YwYi00ZTlmLTgyMTctODE0NTNhNTVkZGIxXkEyXkFqcGdeQXVyNjE4MDMwMjk@._V1_SX300.jpg"
}
]

function App() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  // console.log(movies);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies("Trending");
  }, []);


  return (
    <div className="app">
      <h1>Cine Flicks</h1>
      <div className="search">
        <input type="text"
          placeholder="Search for movies"
          value={search}
          onChange={(event) => { setSearch(event.target.value) }}
        />
        <img src={SearchIcon}
          className="App-logo" alt="search"
          onClick={() => { searchMovies(search) }}
        />
      </div>

      {
        movies.length > 0 ? (
          <div className="container">
            {movies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </div>
        ) :
          (<div className="empty">
            <h2>No movies found</h2>
          </div>)
      }
    </div>
  );
}

export default App;
