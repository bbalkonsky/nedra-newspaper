<template>
    <f7-card class="demo-card-header-pic">
        <f7-card-header
                class="no-border"
                valign="bottom"
                :style="'background-image:url(' + article.img + ')'"
        >
            {{article.title}}
        </f7-card-header>
        <f7-card-content>
            <!--                <p class="date">Posted on January 21, 2015</p>-->
            <p>{{article.text}}</p>
        </f7-card-content>
        <f7-card-footer>
            <f7-link :href="`/article/${article.id}/`">Подробнее</f7-link>
        </f7-card-footer>
    </f7-card>
</template>

<script>
    export default {
        name: "ArticleItemComponent",
        props: {
            article: Object
        }
    }
</script>

<style scoped>
    .card-header {
        height: 60vw;
        background-size: cover;
        background-position: top;
        color: #fff;
    }
</style>
