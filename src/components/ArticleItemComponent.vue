<template>
    <f7-card>
        <f7-card-header
                v-if="article.image"
                class="no-border"
                valign="bottom"
                :style="'background-image:url(' + 'https://newspaper-dev.gp-ggr.ru/api/storage/' + article.image.filename + ')'">
            <p class="card-title">{{article.title}}</p>
            <f7-link :href="`/${linkResourse}/${article.id}/`" class="card-href"></f7-link>
        </f7-card-header>
        <f7-card-content v-if="article.description">
            <!--                <p class="date">Posted on January 21, 2015</p>-->
            <p><f7-link :href="`/${linkResourse}/${article.id}/`" class="card-text-link">{{article.description}}</f7-link></p>
        </f7-card-content>
        <f7-card-footer v-if="article.tags && article.tags.length">
            <span>
                <span class="card-tag" v-for="tag in article.tags" :key="tag.id">
                    <f7-icon size="18px" f7="tag_fill"></f7-icon> <f7-link :href="`/tag/${tag.id}/`">{{tag.title}}</f7-link> </span>
            </span>
        </f7-card-footer>
    </f7-card>
</template>

<script>
    import {f7Card, f7CardHeader, f7CardContent, f7CardFooter, f7Link, f7Icon} from 'framework7-vue';

    export default {
        name: "ArticleItemComponent",
        props: {
            article: Object,
            linkResourse: String
        },
        components: {
            f7Card, f7CardHeader, f7CardContent, f7CardFooter, f7Link, f7Icon
        },

    }
</script>

<style scoped>
    .card-header {
        height: 60vw;
        background-size: cover;
        background-position: top;
        color: #fff;
    }
    .card-title {
        background: #1212127a;
        padding: 3px 2px;
    }
    .card-tag a{
        color: inherit;
    }
    .card-href {
        width: 100%;
        height: 100%;
        position: absolute !important;
        top: 0;
        left: 0;
    }
    .card-text-link {
        color: #000;
    }
</style>
