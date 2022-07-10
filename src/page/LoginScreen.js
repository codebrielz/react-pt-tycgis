import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";
import { useFetch } from "../hooks/useFetch";
import { useForm } from "../hooks/useForm";


export const LoginScreen = () => {
  let navigate = useNavigate();

  const {handleInputChange,values} = useForm();
  const { usuario, pass } = values;
  
  const {authUser,setAuthUser} = useContext(AuthContext);

  const users = useFetch(`https://reqres.in/api/login?name=${usuario}&year=${parseInt(pass)}`)

  const handleSubmit = (e) => {
    e.preventDefault();
    users.data.forEach((element) => {
      element.name === usuario && element.year === parseInt(pass) &&
        setAuthUser({
          usuario:usuario,
          pass:pass,
          auth:true
        })
        authUser && navigate("gestor", { replace: true });
    });
  };

  return (
    <form onSubmit={handleSubmit} className="log__form">
      <h3 className="log__title">Iniciar Sesion</h3>
      <div>
        <input
          type="usuario"
          onChange={handleInputChange}
          name="usuario"
          value={values.name}
          placeholder="usuario"
        />
        <input
          type="password"
          onChange={handleInputChange}
          name="pass"
          value={values.name}
          placeholder="Contraseña"
        />
        <input type="submit" value="Iniciar Sesion" />
      </div>
    </form>
  );
};
