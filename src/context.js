import React, { useState, useContext, useEffect } from 'react'
import { useFetch } from './useFetch'


const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [query,setQuery]=useState('Avengers')
  const {data:movies,isLoading,error} = useFetch(`&s=${query}`)
  
  return <AppContext.Provider value={{query,setQuery,movies,isLoading,error}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

