import axios from "axios";

const api = axios.create({
    baseURL: 'https://ai-battle-arena-x.onrender.com/api'
});

export const chatAi = async ({ prompt }) => {
    try {
        const response = await api.post('/chat', { prompt });
        return response.data;
    } catch (error) {
        throw error;
    }
}