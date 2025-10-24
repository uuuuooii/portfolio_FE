import axios from "axios";
import { PROJECT_URL } from "./url";

export const getProject = async() => {
    const response = await axios.get(PROJECT_URL)
    return response.data
}