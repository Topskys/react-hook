import axios from 'axios';


const http = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 5000,
    // withCredentials: true,
})

http.interceptors.request.use(config => {
    return config
})

http.interceptors.response.use(response => {
    return response.data
})


export default http;