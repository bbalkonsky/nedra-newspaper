import repository from "../repository";

const resourse = '/tag';

export default {
    get() {
        return repository.get(`${resourse}`)
    },
    getArticleByTag(tag) {
        return repository.get(`${resourse}/${tag}/article`);
    }
}
