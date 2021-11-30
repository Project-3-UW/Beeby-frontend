import axios from "axios";

const URL_PREFIX = "http://localhost:3000"


const API = {
    getItemById:()=>{
        return axios.get(`${URL_PREFIX}/api/items/11`)
    },
    sendEmailBack:()=>{
        return axios.get(`${URL_PREFIX}/api/email/11`)
    }
}

export default API;