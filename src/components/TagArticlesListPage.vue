<template>
  <f7-page name="tag-article-list">
    <f7-navbar back-link="Назад">
      <f7-nav-title>{{ tagArticles.title }}</f7-nav-title>
    </f7-navbar>

    <f7-block v-if="isDataLoading" class="row align-items-stretch text-align-center">
      <f7-col>
        <f7-preloader :size="42"></f7-preloader>
      </f7-col>
    </f7-block>

    <article-item-component
        v-else
        v-for="article in tagArticles.articles"
        :key="article.id"
        :article="article"
        :link-resourse="'articleFromTag'">
    </article-item-component>

  </f7-page>
</template>

<script>
import ArticleItemComponent from "@/components/ArticleItemComponent";
import {f7Page, f7Navbar, f7NavTitle, f7Block, f7Col, f7Preloader} from 'framework7-vue';
import {RepositoryFactory} from "@/api/RepositoryFactory";

const TagRepository = RepositoryFactory.get('tag');

export default {
  name: "TagArticlesListPage",
  components: {
    f7Page, f7Navbar, f7NavTitle, f7Block, f7Col, f7Preloader,
    ArticleItemComponent
  },
  data() {
    return {
      id: this.$f7route.params.id,
      isDataLoading: false,
      tagArticles: []
    }
  },
  // computed: {
  //     tagArticles: function () {
  //         return this.articles.filter(article => article.headings.includes(this.id));
  //     }
  // },
  methods: {
    async fetch() {
      try {
        const data = await TagRepository.getArticleByTag(parseInt(this.id, 10));
        this.tagArticles = data.data;
      } catch (err) {
        console.log(err)
      }
      this.isDataLoading = false;
    }
  },
  created() {
    this.isDataLoading = true;
    this.fetch();
  }
}
</script>

<style scoped>

</style>
