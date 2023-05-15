import React from 'react';
import SingleMovie from '../components/SingleMovie';

import {  gql, useQuery } from '@apollo/client';
const listAllMovies = gql`
query{
  listMovies{
    name
    genre
    year
  }
}`

/* const movies = [
  {name: 'John Wick', genre: 'Action', year:'2019'},
  {name: 'John Wick', genre: 'Action', year:'2024'},
  {name: 'John Wick', genre: 'Action', year:'2029'},
  {name: 'John Wick', genre: 'Action', year:'2033'},
  {name: 'John Wick', genre: 'Action', year:'2037'},
  {name: 'John Wick', genre: 'Action', year:'2041'},
  {name: 'John Wicked', genre: 'Action', year:'2050'},
] */

const Movies = () => {

  const { loading, error, data } = useQuery(listAllMovies)
  console.log(data)
  
  if (loading) return <p className='loading'>We are loading your movies...</p>;
  if (error) return <p className='error'>Cannot fetch your movies !: {error.message}</p>;
  if(data.listMovies.length === 0 ) return <p className='no-movies'>Please Add Some Movies First </p>

  return (  

    <div className = 'movies'>
      {data.listMovies.map((movie,index) => {
        return <SingleMovie
        key = {index}
        movieName = {movie.name}
        movieGenre = {movie.genre}
        movieYear = {movie.year}
        />
      })}

    </div>

  );
}
 
export default Movies;