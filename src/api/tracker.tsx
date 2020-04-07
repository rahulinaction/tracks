import axios from 'axios';
//NGROK changes every 8 hrs
export default axios.create({
    baseURL: 'http://2f79a174.ngrok.io'
});