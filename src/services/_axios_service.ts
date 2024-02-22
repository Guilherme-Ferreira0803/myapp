import axios from "axios";

const api = axios.create(
    {
        baseURL: "http://192.168.90.202:9010/Ocorrencias_auto/Ocorrencias/"
    }
);

export { api }