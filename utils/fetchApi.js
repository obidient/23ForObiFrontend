import axios from "axios";

export const baseUrl = 'https://api.23forobi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get(url)
    return data
}