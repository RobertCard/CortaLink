import axios from 'axios';

//KEY ff62ea70e2a004aec47b554b74c23817aa5a8038
//base url: https://api-ssl.bitly.com/v4

export const key = 'ff62ea70e2a004aec47b554b74c23817aa5a8038';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`,
    }
})

export default api;