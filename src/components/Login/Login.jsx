import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import './Login.css';
import AuthContext from "../../context/AuthProvider";
import { getToken } from '../../api/apiCalls';


export default function Login(){
    const {setAuth} = useContext(AuthContext);
    const userRef = useRef(); // set focus on that 1st input when componentloads
    const errRef = useRef(); // set focus on errors if it accurs

    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState(''); 
    const [success, setSuccess] = useState(false); // remplacer par un navigate

    // set focus on the user input when component first loads
    useEffect(() => {
        userRef.current.focus();
    }, [])

    // empty things out when the user makes a change
    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    async function handleSubmit(e){
        e.preventDefault();
        
        try {
            const token = await getToken({email, password});
            console.log(token);
            // const roles = response?.data?.roles;
            // setAuth({user,pwd, roles, accessToken});
            // setUser('');
            // setPwd('');
            // setSuccess(true);
        } catch(err) {
            if(!err?.response){
                setErrMsg('No server response');
            } else if(err.response?.status === 400){
                setErrMsg('Missing username or password');
            } else if(err.response?.status === 401){
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login failed')
            }
            errRef.current.focus();
        }
        
    }

    return(
        <>
            {success ? (
                <section className="login-main">
                    <h2>Bienvenue dans votre espace personnel !</h2>
                    <br />
                    <p>
                        <a href="#">Retour à l'accueil</a>
                    </p>
                </section>
            ) : (
                <section className="login-main">
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h2>Déjà enregistré ?</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="text"
                            id="email"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />

                        <label htmlFor="password">Mot de passe</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                        <button>Se connecter</button>
                    </form>
                    <p>
                        Besoin d'un compte ?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="#">Créer un compte</a>
                        </span>
                    </p>
                </section>
            )}
        </>
        
    )
}