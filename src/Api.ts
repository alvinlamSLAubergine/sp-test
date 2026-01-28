import { useState, useEffect, useCallback } from 'react';

interface UseFetchDataProps<D> {
  url: string;
  queries: D[];
}

interface UseFetchDataReturn<T> {
  data: T | null;
  isLoading: boolean;
  refetch: () => void;
}

export const useFetchData = <T, D = unknown>(
  { url, queries }: UseFetchDataProps<D>
): UseFetchDataReturn<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams();
      queries.forEach((q, i) => {
        params.append(`query${i}`, String(q));
      });
      const queryString = params.toString();
      const fullUrl = queryString ? `${url}?${queryString}` : url;
      const response = await fetch(fullUrl);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  }, [url, queries]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, refetch };
};