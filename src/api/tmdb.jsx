import axios from "axios";

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Accept: "application/json"
    },
    params: {
        api_key: 'fa94c8a4952d8acf36746f848cf648ac',
        language: 'pt-BR'
    }
})