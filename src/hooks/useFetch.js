import {useEffect,useState} from 'react';

export function useFetch(fetchFn,initialValue){
  const [fetchData, setFetchData] = useState(initialValue);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchApiData() {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        console.log("sorted",data)
        setFetchData(data);
      } catch (error) {
        setError({ message: error.message || 'Failed to fetch data.' });
      }
      setIsFetching(false);
    }

    fetchApiData();
  }, [fetchFn]);
  
  return {
    isFetching,
    error,
    setFetchData,
    fetchData
  }
}