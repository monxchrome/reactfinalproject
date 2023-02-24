import axios from "axios";
import {baseURL} from "../configs";
import {createBrowserHistory} from "history";
import {authService} from "./authService";

const apiService = axios.create({baseURL});

apiService.interceptors.request.use((config) => {
    if (authService.isAuth()) {
        config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzNlZjBlNjZjNTA0ZDBhMzk0YmM5MDRhYTc4MjE4ZCIsInN1YiI6IjYzZWZiYTliY2RkYmJjMDA4NGI4Njc4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2BRzt4zQxu0MoEFSB1DbcgID9J5ixabSzx-D0a7Hbto`
    }
    return config
})

export {
    apiService
}