import repository from "../repository";

const resourse = '/article';

export default {
    get() {
        return repository.get(`${resourse}`)
    },
    getArticle(articleId) {
        return repository.get(`${resourse}/${articleId}`);
    }
}
