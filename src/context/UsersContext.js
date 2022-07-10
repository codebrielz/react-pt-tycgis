import React, { createContext, useState } from 'react'
import { useFetch } from '../hooks/useFetch';

export const UsersContext = createContext()

export const UsersProvider = (props) => {
    const [pagination, setPagination] = useState(1);
    const [userSelected, setUserSelected] = useState();

    const users = useFetch(`https://reqres.in/api/users?page=${pagination}`)
    const user = useFetch(`https://reqres.in/api/users/${userSelected}`)

    return(
        <UsersContext.Provider
        value={{
            pagination,
            setPagination,
            users,
            setUserSelected,
            user
        }}
        >
            {props.children}
        </UsersContext.Provider>
    )
}