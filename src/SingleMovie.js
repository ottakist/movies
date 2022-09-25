import React from 'react'
import { useParams, Link } from 'react-router-dom'

import { useFetch } from './useFetch';
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';
const SingleMovie = () => {

  const {id}=useParams()
  const { data: movie, isLoading, error } = useFetch(`&i=${id}`);
    const {Title:title,Plot:plot,Year:year,Poster:poster} = movie

    
  if (isLoading) {
    return <div className='loading'></div>;
  }
  else if(error.show){
    return (
      <div className='page-error'>
        <h1>{error.msg}</h1>
        <Link className='btn' to={'/'}>
          Back to Movies
        </Link>
      </div>
    );
  }
  else{
    return (
      <section className='single-movie'>
        <img src={poster === 'N/A' ? url : poster} alt={title} />

        <div className='singke-movie-info'>
          <h2>{title}</h2>
          <p>{plot}</p>
          <h4>{year}</h4>
          <Link className='btn' to={'/'}>
            Back to Movies
          </Link>
        </div>
      </section>
    );
  }
}

export default SingleMovie
