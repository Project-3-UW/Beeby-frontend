import axios from "axios";

const URL_PREFIX = "http://localhost:3001"


export const API = {
    login:(loginFormState)=>{
        return axios.post(`${URL_PREFIX}/api/users/login`, loginFormState)
    },
    signup:()=>{
        return axios.get(`${URL_PREFIX}/api/items`)
    },
    getItems:(token, cordinates)=>{
        if(token){
            return axios.get(`${URL_PREFIX}/api/query/nearby`,{headers:{
                "Authorization": `Bearer ${token}`
            }})
        } else if(cordinates) {
            return axios.get(`${URL_PREFIX}/api/items?lon=${cordinates.lon}&lat=${cordinates.lat}`)
        }
    },
    validateToken:(token)=>{
        return axios.get(`${URL_PREFIX}/api/query/validateToken`, {headers:{
            "Authorization": `Bearer ${token}`
        }})
    },
    // getItems:()=>{
    //     return axios.get(`${URL_PREFIX}/api/items`)
    // },
    // getItems:()=>{
    //     return axios.get(`${URL_PREFIX}/api/items`)
    // },
}

export default API;