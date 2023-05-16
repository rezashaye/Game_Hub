import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '209d25fb417541998071749207c104b4'
    }
})