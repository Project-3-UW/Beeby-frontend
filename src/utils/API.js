import axios from "axios";
const URL_PREFIX = "http://localhost:3001"

const API = {
    getProfile: (tkn) => {
        return axios.getItem(`${URL_PREFIX}/validateToken`, {headers:{
        "Authorization": `Bearer ${tkn}`
      }})
    },
    login: (userData)=>{
        return axios.post(`${URL_PREFIX}/login`,userData)
    },
    signup: (newUser) => {
        return axios.post(`${URL_PREFIX}/signup`)
    }
}

export default API;