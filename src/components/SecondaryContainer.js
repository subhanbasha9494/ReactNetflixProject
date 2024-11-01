import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    //const movies = useSelector(store => store.movies);
    const movies = useSelector(store => store.movies);
    return (
        movies.addNowPlayingMovies && (
            <div className="bg-black">
                {/* 
                
                MovieList - Popular
                   MovieCards
                MovieList - Now Playing
                MovieList - Trending
                MovieList - Horror
             */}
          <div className="-mt-52 pl-12 relative z-20">
                <MovieList title={"Now Playing"} movies={movies.addNowPlayingMovies} />
                <MovieList title={"Trending"} movies={movies.addNowPlayingMovies} />
                <MovieList title={"Popular"} movies={movies.popularMovies} />
                <MovieList title={"Horror Movies"} movies={movies.addNowPlayingMovies} />
            </div>
            </div>
        )
    )
}

export default SecondaryContainer; 