import { useState, useEffect } from "react";
import { IError, ISearchResults } from "./base.types";

const apiBase = "https://www.googleapis.com/books/v1/volumes?q=";

export const BookSearch = (query: string) => {
  const [data, setData] = useState<ISearchResults>();
  const [error, setError] = useState<IError>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query === "") {
      return;
    }
    (async () => {
      try {
        const res = await fetch(`${apiBase}${query}&maxResults=40`);
        const resJson = await res.json();
        setData(resJson);
      } catch (err) {
        setError(err as IError);
      } finally {
        setLoading(false);
      }
    })();
  }, [query]);
  return { loading, data, error };
};
