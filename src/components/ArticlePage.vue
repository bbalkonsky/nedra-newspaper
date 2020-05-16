<template>
    <f7-page name="article">
        <f7-navbar back-link="Назад">
            <f7-nav-title>{{article.title ? article.title : 'Новость'}}</f7-nav-title>
        </f7-navbar>

        <f7-block v-if="isDataLoading" class="row align-items-stretch text-align-center" >
            <f7-col>
                <f7-preloader :size="42"></f7-preloader>
            </f7-col>
        </f7-block>

        <template v-else>
            <f7-block strong>
                <p><f7-icon size="22px" f7="calendar_today"></f7-icon> {{article.date}}</p>
                <p v-if="article.tags && article.tags.length">
                    <span class="article-tag" v-for="tag in article.tags" :key="tag.id">
                        <f7-icon size="18px" f7="tag_fill"></f7-icon> <f7-link :href="`/tag/${tag.id}/`">{{tag.title}}</f7-link>
                    </span>
                </p>
            </f7-block>

            <f7-block class="article-page" strong>
                <h2>{{article.description}}</h2>

                <template v-for="(item, idx) in article.content" >
                    <!--                <h2 v-if="item.type === 'header'" :key="idx">{{item.text}}</h2>-->
                    <f7-block strong inset class="article-highlight" v-if="item.type === 'blockquote'" :key="idx">
                        <p>{{item.text}}</p>
                    </f7-block>
                    <p v-else-if="item.type === 'paragraph'" :key="idx">{{item.text}}</p>
                    <p v-else-if="item.type === 'paragraph-strong'" :key="idx"><b>{{item.text}}</b></p>
                    <p v-else-if="item.type === 'paragraph-italic'" :key="idx"><i>{{item.text}}</i></p>
                    <div class="article-image" v-else-if="item.type === 'image'" :key="idx">
                        <img :src="'https://newspaper-dev.gp-ggr.ru/api/storage/' + item.image.filename" :alt="item.image.alt">
                        <p class="text-align-center">{{item.image.alt}}</p>
                    </div>
                </template>

                <p v-if="article.writer"><b>{{article.writer}}</b></p>
            </f7-block>

            <f7-block strong>
                <f7-row>
                    <f7-col>
                        <f7-button @click="likeHandler(!isLiked)">
                            {{likes}}
                            <f7-icon v-if="isLiked" ios="f7:hand_thumbsup_fill" aurora="f7:hand_thumbsup_fill" md="f7:hand_thumbsup_fill"></f7-icon>
                            <f7-icon v-else ios="f7:hand_thumbsup" aurora="f7:hand_thumbsup" md="f7:hand_thumbsup"></f7-icon>
                        </f7-button>
                    </f7-col>
                    <f7-col>
                        <f7-button @click="dislikeHandler(!isDisliked)" color="red">
                            <f7-icon v-if="isDisliked" ios="f7:hand_thumbsdown_fill" aurora="f7:hand_thumbsdown_fill" md="f7:hand_thumbsdown_fill"></f7-icon>
                            <f7-icon v-else ios="f7:hand_thumbsdown" aurora="f7:hand_thumbsdown" md="f7:hand_thumbsdown"></f7-icon>
                            {{dislikes}}
                        </f7-button>
                    </f7-col>
                </f7-row>
            </f7-block>
        </template>
    </f7-page>
</template>

<script>
    import repository from "@/api/repository";
    import {f7Page, f7Navbar, f7NavTitle, f7Block, f7Col, f7Row, f7Preloader, f7Icon, f7Button, f7Link} from 'framework7-vue';

    export default {
        name: "ArticlePage",
        data() {
            return {
                id: this.$f7route.params.id,
                isDataLoading: false,
                article: {},
                isLiked: false,
                isDisliked: false,
                likes: 0,
                dislikes: 0
            }
        },
        components: {
            f7Page, f7Navbar, f7NavTitle, f7Block, f7Col, f7Row, f7Preloader, f7Icon, f7Button, f7Link
        },
        methods: {
            async fetch() {
                this.isDataLoading = true;
                try {
                    const data = await repository.getArticleById(parseInt(this.id, 10));
                    this.likes = data.data.like ? data.data.like : 0;
                    this.dislikes = data.data.dislike ? data.data.dislike : 0;
                    this.article = data.data;
                } catch(err) {
                    console.log(err)
                }
                this.isDataLoading = false;
            },

            async likeHandler(value) {
                try {
                    await repository.postLike(this.id, value);
                    this.isLiked = value;
                    localStorage[`isLiked${this.id}`] = value;
                    if (value) {
                        this.likes++;
                    } else {
                        this.likes--;
                    }
                    if (value && this.isDisliked) {
                        await repository.postDislike(this.id, false);
                        localStorage[`isDisliked${this.id}`] = false;
                        this.isDisliked = false;
                        this.dislikes--;
                    }
                } catch(err) {
                    console.log(err);
                }
            },
            async dislikeHandler(value) {
                try {
                    await repository.postDislike(this.id, value);
                    this.isDisliked = value;
                    localStorage[`isDisliked${this.id}`] = value;
                    if (value) {
                        this.dislikes++;
                    } else {
                        this.dislikes--;
                    }
                    if (value && this.isLiked) {
                        await repository.postLike(this.id, false);
                        localStorage[`isLiked${this.id}`] = false;
                        this.isLiked = false;
                        this.likes--;
                    }
                } catch(err) {
                    console.log(err);
                }

            }
        },
        created() {
            // console.log(this.$f7router)
            this.fetch();
            this.isLiked = JSON.parse(localStorage.getItem(`isLiked${this.id}`));
            this.isDisliked = JSON.parse(localStorage.getItem(`isDisliked${this.id}`));
        },
        mounted() {

        }
    }
</script>

<style scoped>
    .block {
        margin: 10px 0;
    }
    .block-strong:before, .block-strong:after {
        height: 3px;
    }

    .article-tag a{
        color: inherit;
    }
    .article-page > p, .article-page > .article-highlight {
        margin: 0 0 14px 0;
    }
    .article-image {
        font-style: italic;
        font-size: 12px;
    }
    .article-image img {
        width: 100%
    }
    .article-highlight {
        background-color: #e7e7e7;
    }
</style>
