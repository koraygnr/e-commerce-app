import { useState, useEffect } from 'react'
import axios from "axios"

function useFetch(url) {

  const [ data, setData ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(true)
  const headers = {
    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
  }

  useEffect( () => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get(`${process.env.REACT_APP_API_URL}${url}`, {headers})
        setData(res.data.data)
      }
      catch(err) {
        console.log(err.message)
      }
      finally {
        setIsLoading(false)
      }
    }
    fetchData()
  },[url])
    
  return { data, isLoading }
}

export default useFetch