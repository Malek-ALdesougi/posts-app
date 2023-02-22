import { useEffect, useState } from "react";


const useFetch = (url, id) => {

    // to handle fetching error using clean up methods
    const controller = new AbortController();
    const signal = controller.signal;
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // in this Hook we are going to fetch both all posts and single post depending on the id //
    useEffect(() => {

            setLoading(true)
            //pass the signla variable here 
            fetch(url, {signal})
                .then(response => response.json())
                .then(data => {
                    setPosts(data)
                    setLoading(false)
                })
                .catch(error => setError(error));

                return () => {
                    console.log('fetch cancelled !!');
                    controller.abort();
                }
    }, [url])


    return { posts, loading, error }

}

export default useFetch;