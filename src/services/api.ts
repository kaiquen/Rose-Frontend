import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.124:3000',
})

export {api} 