import { useCallback, useEffect, useRef, useState } from "react";

function useFetch(url: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const finalData = useRef(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getData = useCallback(async () => {
    setIsLoading(true);

    try {
      const data = await fetch(url);
      finalData.current = await data.json();
    } catch (error) {
      console.log("🚀 ~ page ~ error:", error);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    getData();

    return () => {
      finalData.current = null;
    };
  }, [getData]);

  return { isLoading, data: finalData, getData };
}

export default useFetch;
