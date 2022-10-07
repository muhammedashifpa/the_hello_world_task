import { useState, useEffect, useCallback } from "react";
import { axiosInstance } from "../axios";

function useFetch(skip) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0)
    const [complete, setComplete] = useState(false)
    
    const sendReq = useCallback(async () => {
        const url = `products?skip=${skip}&limit=5`
        // if (complete){
        //     alert('You are at the bottom of the page')
        //     return
        // }
        if ( total !== 0 && skip >= total ){
            await setComplete(true)
            return
        }
        try {
            await setLoading(true);
            await setError(false);
            const res = await axiosInstance.get(url);
            await setTotal(res.data.total)
            console.log(res.data)
            await setData((prev) => [...prev, ...res.data.products]);
            setLoading(false);
        } catch (err) {
            setError(err);
        }finally{
            setLoading(false)
        }
    }, [skip]);

    useEffect(() => {
        sendReq();
    }, [ sendReq, skip]);

  return { loading, error, data, complete };
}

export default useFetch;