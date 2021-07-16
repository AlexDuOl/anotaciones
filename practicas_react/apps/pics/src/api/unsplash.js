import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID kdYbAsZGp5FKJfN9HievsAGFX3gKijlEVLYksePcb6k'
    }
});