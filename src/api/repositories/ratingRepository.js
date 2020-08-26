import repository from "../repository";

export default {
    like(articleId, value) {
        return repository.post(`/article/${articleId}/like/${value ? '+1' : '-1'}`);
    },
    dislike(articleId, value) {
        return repository.post(`/article/${articleId}/dislike/${value ? '+1' : '-1'}`);
    }
}
