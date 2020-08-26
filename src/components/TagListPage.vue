<template>
  <f7-page name="tag-list">
    <f7-navbar>
      <f7-nav-title>Рубрики</f7-nav-title>
    </f7-navbar>

    <f7-block v-if="isDataLoading" class="row align-items-stretch text-align-center" >
      <f7-col>
        <f7-preloader :size="42"></f7-preloader>
      </f7-col>
    </f7-block>

    <f7-block v-else strong inset>
      <f7-list>
        <f7-list-item
                v-for="tag in tags"
                :key="tag.id"
                :title="tag.title"
                :link="`/tag/${tag.id}/`"
        ></f7-list-item>
        <!--                @click="navigateToMain(tag.id)"-->
      </f7-list>
    </f7-block>
  </f7-page>
</template>

<script>
import {f7Page, f7Navbar, f7NavTitle, f7Block, f7Col, f7Preloader, f7List, f7ListItem} from 'framework7-vue';
import {RepositoryFactory} from "@/api/RepositoryFactory";
const TagRepository = RepositoryFactory.get('tag');

export default {
  name: 'TagListPage',
  components: {
    f7Page, f7Navbar, f7NavTitle, f7Block, f7Col, f7Preloader, f7List, f7ListItem
  },
  data() {
    return {
      isDataLoading: false,
      tags: []
    }
  },
  methods: {
    async fetch() {
      try {
        const data = await TagRepository.get();
        this.tags = data.data;
      } catch(err) {
        console.log(err)
      }
        this.isDataLoading = false;
    },
    navigateToMain(tagId) {
      this.$f7.tab.show('#view-home');
      this.$f7.view.main.router.navigate('/', {reloadAll: true})
      this.$f7.view.main.router.navigate(`/tag/${tagId}/`);
    }
  },
  created() {
    this.isDataLoading = true;
    this.fetch();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .list {
    margin: 0;
  }
  .block-strong {
    margin: 10px !important;
    padding: 0px 5px;
  }
</style>
