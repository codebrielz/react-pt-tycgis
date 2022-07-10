import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "../components/ui/Pagination";
import { UsersContext } from "../context/UsersContext";

export const GestorScreen = () => {
  const {users, setUserSelected} = useContext(UsersContext);

  return (
    <div className="gestor__content">
      <Pagination />
      {users.data &&
        users.data.map((user, i) => (
          <div key={i} className="gestor__card">
            <div className="gestor__card-allInfo">
              <img src={user.avatar} alt={user.email} />
              <div className="gestor__info-card">
                <p className="gestor__info-name">{user.first_name + " " + user.last_name}</p>
                <p></p>
                <p>{user.email}</p>
              </div>
            </div>
            <div>
              <Link onClick={()=>setUserSelected(user.id)} to={`/card/${user.id}`} className="gestor__btn-info">Más Información</Link>
            </div>
          </div>
        ))}
    </div>
  );
};
