import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css';
import { UserContext } from "../../context/UserContext";
import { NewUserContext } from "../../context/NewUserContext";
import { getToken } from '../../api/apiCalls';


export default function Login(){
    const { user, setUser } = useContext(UserContext);
    
    const navigate = useNavigate();
    // const userRef = useRef(); // set focus on that 1st input when componentloads
    // const errRef = useRef(); // set focus on errors if it accurs

    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    // const [errMsg, setErrMsg] = useState(''); 



    async function handleSubmitLogin(e){
        e.preventDefault();

        const response = await getToken({email, password});
        console.log(response);
        setUser(response.user);
        setEmail('');
        setPassword('');
        navigate("/dashboard");
        
    }

    return(
        <section className="login-main">
            {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
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