import axios from "axios";

const URL_PREFIX = "http://localhost:3001"
// delploy
// const URL_PREFIX = "https://beeby-backend.herokuapp.com"

const token = localStorage.getItem("token");

export const API = {
    login: (loginFormState) => {
        return axios.post(`${URL_PREFIX}/api/users/login`, loginFormState)
    },
    signup: (
        firstName,
        lastName,
        email,
        password,
        longitude,
        latitude,
        bio,
        userImg) => {
        return axios.post(`${URL_PREFIX}/api/users/signup`, {
            firstName,
            lastName,
            email,
            password,
            longitude,
            latitude,
            bio,
            userImg
          });
    },
    getItems: () => {
        return axios.get(`${URL_PREFIX}/api/items`)
    },
    validateToken: () => {
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
        return axios.get(`${URL_PREFIX}/api/email/11`)
    },
    getUsers: () => {
        return axios.get(`${URL_PREFIX}/api/users`)
    },
    getUserById: (id) => {
        return axios.get(`${URL_PREFIX}/api/users/${id}`)
    },
    getUserLocation: (id) => {
        return axios.get(`${URL_PREFIX}/api/users/${id}/location`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
    },
    createItem: (item) => {
        return axios.post(`${URL_PREFIX}/api/items`, item, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
    },
    updateItemStatus: (id, newStatus)=>{
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