import React, { useState, useContext } from 'react';
// import mySvg from '../../../public/wave4.svg';
//import mySvg2 from '../../wave3.svg';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';


const Login = () => {

    // extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, iniciarSesion } = authContext;

    // state para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    // extraer de usuario
    const {email, password} = usuario;

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
        if(email.trim() === '' || password.trim() === '') {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
        }

        // pasarlo al action
        iniciarSesion({ email, password });
    }

    return (
        <div className="form-usuario">
            { alerta ? ( <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div> ) : null }
             {/*style={{backgroundImage: `url(${mySvg2})`}}*/}
            <div className="contenedor-form sombra-dark">
            {/* style={{backgroundImage: `url(${mySvg2})`}} */}
                <h1 className="text-left">Bienvenido</h1>
                <h2 className="text-left mb-5">de nuevo!</h2>
                <p className="text-dark text-left mb-5">Inicia sesión</p>
                <form
                    onSubmit={onSubmit}
                >
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

                    <div className="campo-form d-flex">
                        <input type="submit" className="btn btn-primario ml-auto" value="Iniciar sesión" />
                    </div>
                </form>

                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Obtener Cuenta
                </Link>
            </div>
        </div>
    );
}

export default Login;