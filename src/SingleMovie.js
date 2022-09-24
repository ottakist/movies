import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'

const SingleMovie = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const {id}=useParams()
  const getMovie = async(url)=>{
    setIsLoading(true)
    const response  = await fetch(url)
    const data = await response.json()
    setMovie(data)
    setIsLoading(false)

  }
    useEffect(() => {
      getMovie(`${API_ENDPOINT}&i=${id}`);
    }, [id]);
    const {Title:title,Plot:plot,Year:year,Poster:poster} = movie

    
  if (isLoading) {
    return <div className='loading'></div>;
  }
  else{
    return(<section className='single-movie'>
      <img src={poster} alt={title} />
      <div className="singke-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link className='btn' to={'/'}>Back to Movies</Link>
      </div>
    </section>)
  }
}

export default SingleMovie
