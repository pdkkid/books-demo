import { useState, useEffect } from "react";
import { IError, ISearchResults } from "./base.types";

const apiBase = "https://www.googleapis.com/books/v1/volumes";

export const BookSearch = (value: string, term: string) => {
  const [data, setData] = useState<ISearchResults>();
  const [error, setError] = useState<IError>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (value === "") {
      return;
    }
    (async () => {
      try {
        const res = await fetch(`${apiBase}?q=${value}+${term}&maxResults=40`);
        const resJson = await res.json();
        setData(resJson);
      } catch (err) {
        setError(err as IError);
      } finally {
        setLoading(false);
      }
    })();
  }, [value, term]);
  return { loading, data, error };
};
