import React from 'react'
import { AuthProvider } from './context/AuthContext'
import { AppRouter } from './route/AppRouter'

export const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}
