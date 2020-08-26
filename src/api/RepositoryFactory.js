import articleRepository from "./repositories/articleRepository";
import releaseRepository from "./repositories/releaseRepository";
import tagRepository from "./repositories/tagRepository";
import ratingRepository from "./repositories/ratingRepository";

const repositories = {
    article: articleRepository,
    release: releaseRepository,
    tag: tagRepository,
    rating: ratingRepository
};

export const RepositoryFactory = {
    get: name => repositories[name]
};
