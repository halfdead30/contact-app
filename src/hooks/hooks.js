import { useState, useEffect } from "react";
import { API_URL } from "../config";

export const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getContacts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(API_URL).then((res) => res.json());
        const { results, error } = response;

        if (error) {
          throw new Error(error);
        }

        setIsError(false);
        setData(results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getContacts();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};
