import React, { useEffect, useState } from 'react';

import MovieCard from './components/MovieCard';
import NoMoviesFound from './components/NoMoviesFound';
import SearchIcon from './assets/search.svg';
import './styles/App.css';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=16571919';

function App() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    
    async function searchMovies(title) {
        const response = await fetch(API_URL + '&s=' + title);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Batman')
    }, []);

    return (
        <div className="App">
            <h1>Moviland</h1>

            <div className="search">
                <input
                    type='text'
                    placeholder="Search for movies"
                    onChange={e => setSearchTerm(e.target.value)}
                    value={searchTerm}
                />
                <img
                    src={SearchIcon}
                    alt='search'
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map(movie => (
                        <MovieCard movie={movie} key={movie.imdbID} />
                    ))}
                </div>
            ) : (
                <NoMoviesFound />
            )}

        </div>
    );
}

export default App;