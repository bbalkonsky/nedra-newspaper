<template>
    <f7-page name="article-list" ptr @ptr:refresh="fetch">
        <f7-navbar back-link="Назад">
            <f7-nav-title>{{release.title ? release.title : 'Новости'}}</f7-nav-title>
        </f7-navbar>

        <f7-block v-if="!Object.keys(release).length" class="row align-items-stretch text-align-center" >
            <f7-col>
                <f7-preloader :size="42"></f7-preloader>
            </f7-col>
        </f7-block>

        <article-item-component
                v-else
                v-for="article in release.articles"
                :key="article.id"
                :article="article"
                :link-resourse="'article'">
        </article-item-component>

    </f7-page>
</template>

<script>
    import ArticleItemComponent from "@/components/ArticleItemComponent";
    import repository from "@/api/repository";

    export default {
        name: "ArticlesListPage",
        components: {ArticleItemComponent},
        data() {
            return {
                id: this.$f7route.params.id,
                release: {}
            }
        },
        methods: {
            async fetch(done) {
                try {
                    const data = await repository.getReleaseById(parseInt(this.id, 10));
                    this.release = data.data;
                } catch(err) {
                    console.log(err)
                }

                if (done){
                    done()
                } else {
                    this.isDataLoading = false;
                }

            }
        },
        created() {
            this.isDataLoading = true;
            this.fetch();
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
