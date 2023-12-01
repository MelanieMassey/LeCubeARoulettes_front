import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css';
import { UserContext } from "../../context/UserContext";
import { NewUserContext } from "../../context/NewUserContext";
import { getToken } from '../../api/apiCalls';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


export default function Login(){
    const { user, setUser } = useContext(UserContext);
    
    const navigate = useNavigate();
    // const userRef = useRef(); // set focus on that 1st input when componentloads
    const errRef = useRef(); // set focus on errors if it accurs

    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState(''); 

    useEffect(()=> {
        setErrMsg('');
    }, [email, password])



    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        
        const emailElement = document.getElementById("input-error-email");
        if(!email) {
            emailElement.style.display = "block";
        } else {
            emailElement.style.display = "none";
        }
        const passwordElement = document.getElementById("input-error-password");
        if(!password) {
            passwordElement.style.display = "block";
        } else {
            passwordElement.style.display = "none";
        }

        if(email && password){
            try {
                const response = await axios.post("http://localhost:8081/api/auth/login",
                    JSON.stringify({email, password}),
                    {
                        headers: { 'Content-Type': 'application/json' }
                    }
                );
                console.log(JSON.stringify(response?.data));
                setUser(response.data)
                console.log("USER = "+JSON.stringify(user))
                setEmail('');
                setPassword('');
                navigate("/dashboard");
            } catch (err) {
                console.log(err.message)
            }
        }
        

        
    }

    return(
        <section className="login-main">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <div className="login-login">
                <h2>J'ai déjà un compte</h2>
                <form onSubmit={handleSubmitLogin}>
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="text"
                        id="email"
                        // ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        // required
                    />
                    <p id="input-error-email" className="input-error">Veuillez saisir votre email.</p>

                    <label htmlFor="password">Mot de passe</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        // required
                    />
                    <p id="input-error-password" className="input-error">Veuillez saisir votre mot de passe.</p>

                    <button className="loginButton">Me connecter</button>
                </form>
            </div>
            {/* <div className="login-createAccount">
                <button>Je créé un compte</button>
                <form>
                    <label htmlFor="firstName">Prénom</label>
                    <input
                        type="text"
                        id="firstName"
                        autoComplete="off"
                        onChange={(e) => setNewUser.firstName(e.target.value)}
                        value={newUser.firstName}
                        required
                    />

                    <label htmlFor="lastName">Nom</label>
                    <input
                        type="text"
                        id="lastName"
                        onChange={(e) => setNewUser.lastName(e.target.value)}
                        value={newUser.lastName}
                        required
                    />
                    <button>Créer</button>
                </form>
            </div> */}
        </section>
        
    )
}