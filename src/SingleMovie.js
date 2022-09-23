import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'

const SingleMovie = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovie = async()=>{
    
  }
  const {id}=useParams()
  return <h2>{id}</h2>;
}

export default SingleMovie
