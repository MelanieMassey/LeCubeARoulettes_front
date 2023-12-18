import axios from "axios";



export const localApiURL = "http://localhost:8081/api/";
const externalApiURL = "http://34.163.89.215:8081/api/";
let isApiLocal = true;
const apiURL = "";

function setApiUrl(){
    if(isApiLocal) {
        apiURL = localApiURL;
    } else {
        apiURL = externalApiURL
    }
}



export function getToken(loginDetails) {
    setApiUrl();

    const requestOptions = {
        method : "POST",
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
        body: JSON.stringify({ email: loginDetails.email, password: loginDetails.password })
    };
    return fetch(`${apiURL}/auth/login`, requestOptions)
            .then(response => response.json())
        

    // return axios.post(apiURL+"/auth/login",
    //     JSON.stringify(loginDetails),
    //     {
    //         headers: { 'Content-Type': 'application/json' }
    //     }
    // )
    // .then(response=>{
    //     return response.data.body.token
    // })
}

// export function getUserInfo(token) {
//     return axios.post(apiURL+"/user",{
//         // Data : pas encore de données
//     },{
//         headers:{
//             Authorization:`Bearer ${token}`
//         }
//     })
//     .then(response=>{
//         return response.data.body
//     })
// }

export function getUserEvents(id){
    setApiUrl();

    const requestOptions = {
        method : "GET",
        headers: { "Content-Type": "application/json" }
        
    };
    return fetch(`${apiURL}/dashboard/user/${id}/events`, requestOptions)
            .then(response => response.json())


    // return axios.get(`${apiURL}/dashboard/user/${id}/events`, {
    //     // Data : pas encore de données
    // },{
    //     headers: { "Content-Type": "application/json" }
    // })
    // .then(response=>{
    //     return response.data
    // })
}