import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-memos2020.firebaseio.com/'
});

export default instance;