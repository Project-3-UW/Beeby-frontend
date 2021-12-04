import axios from "axios";
require('dotenv').config();


const URL_PREFIX = "http://localhost:3001"
// delploy
// const URL_PREFIX = "https://beeby-backend.herokuapp.com"


export const API = {
    login: (loginFormState) => {
        return axios.post(`${URL_PREFIX}/api/users/login`, loginFormState)
    },
    signup: (
        firstName,
        lastName,
        email,
        password,
        latitude,
        longitude) => {
        return axios.post(`${URL_PREFIX}/api/users/signup`, {
            firstName,
            lastName,
            email,
            password,
            latitude,
            longitude,
          });
    },
    getItems: () => {
        return axios.get(`${URL_PREFIX}/api/items`)
    },
    validateToken: (token) => {
        return axios.get(`${URL_PREFIX}/api/query/validateToken`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
    },
    getItemById: (id) => {
        return axios.get(`${URL_PREFIX}/api/items/${id}`)
    },
    sendEmailBack: () => {
        return axios.get(`${URL_PREFIX}/api/email/1`)
    },
    getUsers: () => {
        return axios.get(`${URL_PREFIX}/api/users`)
    },
    getUserById: (id) => {
        return axios.get(`${URL_PREFIX}/api/users/${id}`)
    },
    updateItemStatus: (id, newStatus, token)=>{
        return axios.put(`${URL_PREFIX}/api/items/${newStatus}/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
    }
    // getItems:()=>{
    //     return axios.get(`${URL_PREFIX}/api/items`)
    // },
}

export default API;