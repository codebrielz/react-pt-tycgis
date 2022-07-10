import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { UsersProvider } from "../context/UsersContext";
import { Navbar } from "../components/ui/Navbar";
import { CardScreen } from "../page/CardScreen";
import { GestorScreen } from "../page/GestorScreen";
import { LoginScreen } from "../page/LoginScreen";

export const AppRouter = () => {
  const {authUser} = useContext(AuthContext);

  return (
    <BrowserRouter>
      {!authUser.auth 
        ?<Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        : <UsersProvider>
            <Navbar />
            <Routes>
              <Route
                path="/gestor"
                element={<GestorScreen />}
              />
              <Route
                path="/card/:id"
                element={<CardScreen />}
              />
              <Route path="*" element={<Navigate to="/gestor" replace />} />
            </Routes>
          </UsersProvider>
      }
    </BrowserRouter>
  );
};
