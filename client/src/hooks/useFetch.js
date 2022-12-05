import { useState, useEffect } from 'react'
import axios from "axios"

function useFetch(url) {

  const [ data, setData ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(true)
  const [ error, setError ] = useState(null)
  const headers = {
    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
  }

  useEffect( () => {
    const fetchData = async () => {
      await axios.get(`${process.env.REACT_APP_API_URL}${url}`, {headers})
      .then(res => setData(res.data.data))
      .catch( err => setError(err))
      .finally( !error ? setIsLoading(false) : console.log(error) )
    }
    fetchData()
  },[url])
    
  return { data, isLoading, error}
}

export default useFetch