import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import './Login.css';
import AuthContext from "../../context/AuthProvider";
import axios from '../../api/apiCalls';

const LOGIN_URL = '/api/auth';

export default function Login(){
    const {setAuth} = useContext(AuthContext);
    const userRef = useRef(); // set focus on that 1st input when componentloads
    const errRef = useRef(); // set focus on errors if it accurs

    const [user, setUser] = useState(''); 
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState(''); 
    const [success, setSuccess] = useState(false); // remplacer par un navigate

    // set focus on the user input when component first loads
    useEffect(() => {
        userRef.current.focus();
    }, [])

    // empty things out when the user makes a change
    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    async function handleSubmit(e){
        e.preventDefault();
        
        try {
            const response = await axios.post(
                LOGIN_URL,
                JSON.stringify({user,pwd}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({user,pwd, roles, accessToken});
            setUser('');
            setPwd('');
            setSuccess(true);
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
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Mot de passe</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
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