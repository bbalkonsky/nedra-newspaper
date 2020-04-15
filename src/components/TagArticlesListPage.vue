<template>
    <f7-page name="tag-article-list">
        <f7-navbar back-link="Назад">
            <f7-nav-title>{{id}}</f7-nav-title>
        </f7-navbar>

        <article-item-component
                v-for="article in tagArticles"
                :key="article.id"
                :article="article">
        </article-item-component>

    </f7-page>
</template>

<script>
    import ArticleItemComponent from "@/components/ArticleItemComponent";
    export default {
        name: "TagArticlesListPage",
        components: {ArticleItemComponent},
        data() {
            return {
                id: this.$f7route.params.id,
                articles: [
                    {
                        editionId: 1,
                        id: 1,
                        title: 'ООО «Газпром недра» и компания «Бейкер Хьюз» договорились о сотрудничестве',
                        text: 'Для реализации подписанного соглашения будет сформирована совместная Программа сотрудничества',
                        img: 'https://nedra.gazprom.ru/_ah/img/ltYfdLZxMSjAK6i0B2tW6Q=h500',
                        date: '01.01.2001',
                        headings: [
                            'Новость',
                            'Статья'
                        ]
                    },
                    {
                        editionId: 1,
                        id: 2,
                        title: 'Участники общественных слушаний одобрили проведение геологоразведочных работ на шельфе Карского моря',
                        text: '4 февраля в селе Яр-Сале Ямальского района Ямало-Ненецкого автономного округа состоялись общественные слушания по проектной документации, касающейся проведения ООО «Газпром недра» геологоразведочных работ на шельфе Карского моря в 2020 году.',
                        img: 'https://nedra.gazprom.ru/_ah/img/wiV3lP1Gy-sLD7muswPpig=h500',
                        date: '01.01.2001',
                        headings: [
                            'Новость'
                        ]
                    },
                    {
                        editionId: 1,
                        id: 3,
                        title: 'Филиал «Газпром недра НТЦ» в Тюмени возглавил Евгений Белюскин',
                        text: 'Он отметил, что у филиала — много планов, связанных как с изучением традиционных районов газодобычи, так и с созданием новых центров в Западной и Восточной Сибири.',
                        img: 'https://nedra.gazprom.ru/d/story/cb/203/img_9398.jpg',
                        date: '01.01.2001',
                        headings: [
                            'Новость'
                        ]
                    },
                    {
                        editionId: 1,
                        id: 4,
                        title: 'Работник ООО «Газпром недра» удостоен государственной награды за работу по вводу в эксплуатацию Бованенковского НГКМ',
                        text: 'Награду вручил Председатель Правления ПАО «Газпром» Алексей Миллер',
                        img: 'https://nedra.gazprom.ru/d/story/ca/202/1.jpg',
                        date: '01.01.2001',
                        headings: [
                            'Статья'
                        ]
                    }
                ]
            }
        },
        computed: {
            tagArticles: function () {
                return this.articles.filter(article => article.headings.includes(this.id));
            }
        }
    }
</script>

<style scoped>

</style>
