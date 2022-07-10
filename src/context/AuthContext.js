
import React, { useState } from 'react'

export const AuthContext = React.createContext();

export const AuthProvider = (props) => {
    const [authUser, setAuthUser] = useState({usuario:"",pass:"",auth:false})

  return (
    <AuthContext.Provider
    value={{
        authUser,
        setAuthUser
      }}
    >
        {props.children}
    </AuthContext.Provider>
  )
}
