import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/search",
    headers: {
      "X-RapidAPI-Key": "f1e4a991f1msh3818739a7c5a872p17816djsn040360692b8f",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: {
      query: "Python developer in Texas, USA",
      page: "1",
      num_pages: "1",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);

      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log("There is an error", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const reFetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, reFetch };
};

export default useFetch;
