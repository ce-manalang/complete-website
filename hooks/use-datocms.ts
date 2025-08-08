import { useState, useEffect } from 'react';

interface UseDatoCMSOptions {
  revalidate?: number; // Revalidation time in seconds
}

export function useDatoCMS<T>(
  endpoint: string,
  options: UseDatoCMSOptions = {}
): {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
} {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`/api/${endpoint}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  // Auto-refetch based on revalidate time
  useEffect(() => {
    if (options.revalidate) {
      const interval = setInterval(fetchData, options.revalidate * 1000);
      return () => clearInterval(interval);
    }
  }, [options.revalidate]);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
}

// Specific hooks for common content types
export function usePosts(revalidate?: number) {
  return useDatoCMS<any[]>('posts', { revalidate });
}

export function useProducts(revalidate?: number) {
  return useDatoCMS<{ products: any[]; meta: any }>('products', { revalidate });
}

export function useSiteSettings(revalidate?: number) {
  return useDatoCMS<any>('settings', { revalidate });
}
