import { useEffect, useState } from 'react'

export const useFetch = (uri) => {
    const [users, setUsers] = useState({})
    useEffect(() => {
        fetch(uri)
        .then((e) => e.json())
        .then((e) => setUsers(e));
    }, [uri])
    

    return users
}
