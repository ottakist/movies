import React, { useState, useContext, useEffect } from 'react'
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_ACCESS_KEY}`;
console.log(API_ENDPOINT);
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [isLoading,setIsLoading]=useState(true)
  const [movies,setMovies] = useState([])
  const [error,setError]=useState({show:false,msg:''})
  const [query,setQuery]=useState('batman')
  const fetchMovies= async(url)=>{
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const promise = response.json()
      promise.then((data)=>{
        console.log(data)
       if(data.Response === 'True'){
        setMovies(data.Search)
        console.log('succes');
       }
       else{
        setError({show:true,msg:data.Error})
       }
      })
      setIsLoading(false)
    } catch (error) {
     console.log(error)
    }
  }
  useEffect(()=>{
    fetchMovies(`${API_ENDPOINT}&s=${query}`)
 
  },[query])
  return <AppContext.Provider value={{query,setQuery,movies,isLoading}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
