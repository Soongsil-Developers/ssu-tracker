import { useEffect, useState } from "react";

interface State<T> {
  data?: T;
  loading?: boolean;
  error?: Error;
}

export default function useFetch<T = unknown>(
  url?: string,
  options?: RequestInit
): State<T> {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error(response.statusText);
        const data = (await response.json()) as T;
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error as Error);
      }
    };
    void fetchData();
    return () => setLoading(false);
  }, [url]);

  return { data, loading, error };
}
