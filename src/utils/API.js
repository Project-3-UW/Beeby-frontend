import axios from "axios";

const URL_PREFIX = "http://localhost:3000"


const API = {
    getItemById:()=>{
        return axios.get(`${URL_PREFIX}/api/items/1`)
    }
}

export default API;