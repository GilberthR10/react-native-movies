import  axios  from "axios";

const apiKey = "3c2abc23af2f0681417a29896e2c5b6e"
const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: apiKey,
        language: 'es-ES',
    },
    headers: {
        "Content-Type": "application/json",
        Authorization: apiKey,
    }
})

export default movieDB;