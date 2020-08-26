import axios from 'axios';

const baseDomain = process.env.VUE_APP_BASEURL;
const baseURL = `${baseDomain}/api`;

export default axios.create({
    baseURL
});
