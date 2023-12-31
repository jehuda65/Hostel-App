import { useState, useEffect } from "react";

const useFetch = ( url ) => {
  const [data, setData] = useState(true);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(true);

    useEffect( () => {
        fetch( url )
          .then(res => {
            if(!res.ok) {
              throw Error('Could not fetch the data');
            }
            return res.json();
          })
          .then((data) => {
            setData(data)
            setIsPending(false);
            setError(false);
          })
          .catch(err => {
            setIsPending(false);
            setError(err.message);
          })
        }, [url]);

        return { data, isPending, error }
}



export default useFetch;