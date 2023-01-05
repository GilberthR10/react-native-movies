import  axios  from "axios";

const apiKey = ""
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
