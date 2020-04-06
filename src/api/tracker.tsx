import axios from 'axios';
//NGROK changes every 8 hrs
export default axios.create({
    baseURL: 'http://61902629.ngrok.io'
});