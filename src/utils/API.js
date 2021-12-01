import axios from "axios";
require('dotenv').config();


// const URL_PREFIX = "http://localhost:3001"
// delploy
const URL_PREFIX = "https://beeby-backend.herokuapp.com"


export const API = {
    login: (loginFormState) => {
        return axios.post(`${URL_PREFIX}/api/users/login`, loginFormState)
    },
    signup: (signUpFormState) => {
        return axios.post(`${URL_PREFIX}/api/users/signup`, signUpFormState)
    },
    getItems: (token, cordinates) => {
        if (token) {
            return axios.get(`${URL_PREFIX}/api/query/nearby`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
        } else if (cordinates) {
            return axios.get(`${URL_PREFIX}/api/items?lon=${cordinates.lon}&lat=${cordinates.lat}`)
        }
    },
    validateToken: (token) => {
        return axios.get(`${URL_PREFIX}/api/query/validateToken`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
    },
    getItemById: () => {
        return axios.get(`${URL_PREFIX}/api/items/11`)
    },
    sendEmailBack: () => {
        return axios.get(`${URL_PREFIX}/api/email/11`)
    },
    getUsers: () => {
        return axios.get(`${URL_PREFIX}/api/users`)
    },
    // getItems:()=>{
    //     return axios.get(`${URL_PREFIX}/api/items`)
    // },
}

export default API;