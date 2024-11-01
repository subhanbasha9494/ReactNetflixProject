import React, { useEffect } from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer  from '../components/MainContainer';
import SecondaryContainer  from '../components/SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
        MainContainer
           - VideoBackground
           - VideoTitle
        SecondaryContainer
           - MovieList
             - Cards
          
           
      */}
    </div>
  )
}

export default Browse
