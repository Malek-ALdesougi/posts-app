import { useEffect, useState } from "react";


const useFetch = (url, id) => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // in this Hook we are going to fetch both all posts and single post depending on the id //
    useEffect(() => {

            setLoading(true)
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setPosts(data)
                    setLoading(false)
                })
                .catch(error => setError(error));
    }, [url])


    return { posts, loading, error }

}

export default useFetch;