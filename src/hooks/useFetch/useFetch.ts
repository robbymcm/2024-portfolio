import { useState, useEffect, useMemo } from 'react';

type UseFetchProps = {
    domain: string;
    url: string;
    method: 'GET' | 'POST';
    params?: Record<string, string>;
    shouldFetch?: boolean;
    localStorageKey?: string
};

export default function useFetch<T>({ domain, url, method, shouldFetch }: UseFetchProps) {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setError] = useState(false);

    const path = useMemo(() => `${domain}/${url}`, [domain, url]);

    useEffect(() => {
        if (shouldFetch) {
            fetch(path, { method })
                .then((res) => {
                    setData(res.body as T);
                    setIsLoading(false);
                })
                .catch(() => setError(true));
        }
    }, [method, path, shouldFetch]);

    return {
        data,
        isLoading,
        isError
    };
}