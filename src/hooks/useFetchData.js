import React, { useEffect, useState } from 'react'


const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const result = await response.json();
        console.log(response);
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that the effect runs once when the component mounts

  return { data, loading, error };
}

export default useFetchData