// https://medium.com/canariasjs/vue-api-calls-in-a-smart-way-8d521812c322 TODO изучить, выглядит красиво

import axios from 'axios';

const baseDomain = 'https://newspaper-dev.gp-ggr.ru';
const baseUrl = `${baseDomain}/api`;

export default {
    getRelease() {
        return axios.get(`${baseUrl}/release`)
    },
    getReleaseById(articleId) {
        return axios.get(`${baseUrl}/release/${articleId}`);
    },

    getArticles() {
        return axios.get(`${baseUrl}/article`);
    },
    getArticleById(articleId) {
        return axios.get(`${baseUrl}/article/${articleId}`);
    },

    getTags() {
        return axios.get(`${baseUrl}/tag`);
    },
    getArticlesByTag(tag) {
        return axios.get(`${baseUrl}/tag/${tag}/article`);
    }
}
