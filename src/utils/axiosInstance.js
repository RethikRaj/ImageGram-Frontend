import axios from "axios"
import { BACKEND_BASE_URL } from "./constants"

export const axiosInstance = axios.create({
    baseURL: BACKEND_BASE_URL
})