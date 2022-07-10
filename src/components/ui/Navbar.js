import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Navbar = () => {
  const {authUser,setAuthUser} = useContext(AuthContext);

  return (
    <div className="nav__content">
      <p>
        Hola,{" "}
        <span className="nav__username">{authUser.usuario}</span>
      </p>
      <button
        onClick={() => setAuthUser({ name: "", auth: false })}
        className="nav__logout"
      >
        Cerrar Sesión
      </button>
    </div>
  );
};
