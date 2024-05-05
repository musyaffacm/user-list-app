import axios from "axios";
import { useCallback, useEffect, useState } from "react";

function useFetch(url, accessToken = null) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetch = useCallback(async () => {
    setLoading(true);
    setData(null);

    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [url, accessToken]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { data, loading };
}

export default useFetch;
