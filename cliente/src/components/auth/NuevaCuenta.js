import React, { useState } from 'react';
// import mySvg from '../../../public/wave4.svg';
//import mySvg2 from '../../wave3.svg';
import { Link } from 'react-router-dom';


const NuevaCuenta = () => {

    // state para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    // extraer de usuario
    const {nombre, email, password, confirmar} = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    // cuando el usuario quiere iniciar sesión
    const onSubmit = e => {
        e.preventDefault();

        // validar que no haya campos vacios

        // password mínimo de 6 caracteres

        // Los 2 passwords son iguales

        // pasarlo al action
    }

    return (
        <div className="form-usuario">
             {/*style={{backgroundImage: `url(${mySvg2})`}}*/}
            <div className="contenedor-form sombra-dark">
            {/* style={{backgroundImage: `url(${mySvg2})`}} */}
                <h1 className="text-left">Bienvenido</h1>
                <p className="text-dark text-left mb-5">Obtener una cuenta</p>
                <form
                    onSubmit={onSubmit}
                >

                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu nombre"
                            value={nombre}
                            onChange={onChange}
                        />
                        <i className="fa fa-user-circle clasei" aria-hidden="true"></i>    
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            value={email}
                            onChange={onChange}
                        />
                        <i className="fa fa-envelope clasei" aria-hidden="true"></i>    
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu password"
                            value={password}
                            onChange={onChange}
                        />
                        <i className="fa fa-key clasei" aria-hidden="true"></i>
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Password</label>
                        
                        <input 
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite tu Password"
                            value={confirmar}
                            onChange={onChange}
                        />
                        <i className="fa fa-clipboard clasei" aria-hidden="true"></i>
                    </div>

                    <div className="campo-form d-flex">
                        <input type="submit" className="btn btn-primario ml-auto" value="Registrarme" />
                    </div>
                </form>

                <Link to={'/'} className="enlace-cuenta">
                    Volver a Iniciar Sesión
                </Link>
            </div>
        </div>
    );
}

export default NuevaCuenta;