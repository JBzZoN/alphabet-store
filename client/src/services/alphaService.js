import axios from 'axios'

const api = axios.create({
    baseURL: "http://192.168.0.101:8080/alpha"
})

export const getAll = async () => {
    const response = await api.get("/all");
    const data = await response.data;

    return data;
}