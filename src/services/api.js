import axios from "axios";

const Api = axios.create({
    baseURL: 'http://localhost:7878'
});

export default Api