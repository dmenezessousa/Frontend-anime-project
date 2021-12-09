import axios from 'axios';


let url = process.env.NODE_ENV === "production" 
            ? "https://backend-anime-project.herokuapp.com/" 
            :`http://localhost:3001`;

const axiosBackend = axios.create({
    baseURL: url,
    timeout: 50000,
    headers:{
        authorization: `Bearer ${window.localStorage.getItem("jwtToken")}`,
    },    
})

export default axiosBackend;