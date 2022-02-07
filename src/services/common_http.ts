import axios from 'axios';
export default axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs/',
    headers: {
        "Content-type": 'application/json'
    }
})