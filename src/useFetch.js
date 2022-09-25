import React, { useState, useContext, useEffect } from 'react';
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_ACCESS_KEY}`;


export const useFetch = (urlParams) => {
const [isLoading, setIsLoading] = useState(true);
const [data, setData] = useState([]);
const [error, setError] = useState({ show: false, msg: '' });
const fetchData = async (url) => {
  setIsLoading(true);
  try {
    const response = await fetch(url);
    const promise = response.json();
    promise.then((data) => {
      if (data.Response === 'True') {
        setData(data.Search || data);
        setError({ ...error, show: false });
      } else {
        setError({ show: true, msg: data.Error });
      }
    });
    setIsLoading(false);
  } catch (error) {
    console.log(error);
  }
};
useEffect(() => {
  fetchData(`${API_ENDPOINT}${urlParams}`);
}, [urlParams]);
return({isLoading,data,error})
}
