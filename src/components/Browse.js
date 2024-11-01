import React, { useEffect } from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer  from '../components/MainContainer';
import SecondaryContainer  from '../components/SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies();
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
