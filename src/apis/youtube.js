import axios from 'axios';

const KEY = 'AIzaSyDNQYNen1VOowpkA24-qP4KsiLIxJpo4ak';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxRedults: 5,
        key: KEY
    }
});