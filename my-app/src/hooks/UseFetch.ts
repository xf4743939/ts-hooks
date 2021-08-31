import { useState, useEffect } from "react";

interface Options {
  body?: string;
  headers?: object;
  method: string;
}

const useFetch = (url: string, options: Options): any => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url);
        const json = await res.json();
        setResponse(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [options, url]);

  return {
    response,
    error,
    isLoading,
  };
};

export default useFetch;
