import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UsersContext } from "../context/UsersContext";

export const CardScreen = () => {
  const { user } = useContext(UsersContext);
  
  if(user.data === undefined){
    return(
      <>Cargando...</>
    )
  }

  return (
    <>
        <>
          <div className="card__title">
            <img
              src={user.data.avatar}
              alt={user.data.first_name}
              className="card__img"
            />
            <span>Información de {user.data.first_name}</span>
          </div>
          <div className="card__content">
            <p>
              <span>Número de identificación:</span> {user.data.id}
            </p>
            <p>
              <span>Nombre del usuario:</span> {user.data.first_name}
            </p>
            <p>
              <span>Apellido del usuario:</span> {user.data.last_name}
            </p>
            <p>
              <span>Email del usuario:</span> {user.data.email}
            </p>
          </div>
          {/* <button className="card__btn-back" onClick={navigate('')}>Volver</button> */}
          <Link to="/gestor" className="card__btn-back">Volver</Link>
        </>
    </>
  );
};
