import axios from 'axios'

const api = axios.create({
    baseURL: "https://alphabet-store-backend.onrender.com/alpha"
})

export const buyAlphas = async (ids, name) => {
    const response = await api.patch("/buy", {ids, name})
}

export const getAll = async () => {
    const response = await api.get("/all");
    const data = await response.data;

    return data;
}