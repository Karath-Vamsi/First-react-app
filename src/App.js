import React, { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = "https://www.omdbapi.com?apikey=b3136576";


const App = () => {

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
      };

    useEffect(() => {
        searchMovies("");
    },[])

    return (
        <div className='app'>
            <h1 id='title'>Movie Database</h1>
            <div id='opening'>
                <p>This is an extensive movie library where you can search and find movies spanning decades. Find titles, posters, release dates and much more. </p>
            </div>
            

            <div className='search'>
                <input 
                    placeholder='Search for a movie...'
                    value={search}
                    onChange={(e) => {setSearch(e.target.value)}}
                />
                <img 
                    src={SearchIcon} 
                    alt='Search Icon'
                    onClick={() => {searchMovies(search)}}
                />
            </div>

            {
                movies?.length > 0
                ? (
                    <div className='container'>
                        {
                            movies.map((movie) => {
                                return <MovieCard movie={movie} />
})
                        } 
                    </div>
                ) : (
                    <>
                        <h3 id='opener'>Search some movies...!</h3>
                    </>
                )
            }

        </div>
    );
}

export default App;