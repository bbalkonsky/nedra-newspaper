import repository from "../repository";

const resource = '/release';

export default {
    get() {
        return repository.get(`${resource}`)
    },
    getRelease(releaseId) {
        return repository.get(`${resource}/${releaseId}`);
    }
}
