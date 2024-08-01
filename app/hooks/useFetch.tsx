import { useState, useEffect, useCallback } from "react";

interface UseFetchResult<T> {
  loading: boolean;
  error: Error | null;
  data: T | null;
}

/**
 * Custom hook for fetching data
 * @param fetchFunction - The function used to fetch data
 * @param dependencies - Dependency array for re-fetching data
 * @returns {UseFetchResult<T>}
 */
export function useFetch<T>(
  fetchFunction: () => Promise<T>,
  dependencies: any[] = []
): UseFetchResult<T> {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const result = await fetchFunction();
      setData(result);
      setError(null);
    } catch (err) {
      setError(err as Error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [fetchFunction]);

  useEffect(() => {
    console.log("Fetching data...");
    fetchData();
  }, [fetchData, ...dependencies]);

  return { loading, error, data };
}
