import axios, { AxiosInstance } from 'axios';


const server: AxiosInstance = axios.create({
    baseURL: "",//import.meta.env.VITE_API_BASE_URL,
    timeout: 5000,
    // withCredentials: true,
})

server.interceptors.request.use((config) => {
    return config
}, error => {
    return Promise.reject(error)
})

server.interceptors.response.use(response => {
    return response.data
}, error => {
    return Promise.reject(error)
})


export default server;