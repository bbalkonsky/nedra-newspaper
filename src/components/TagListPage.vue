<template>
  <f7-page name="tag-list">
    <f7-navbar>
      <f7-nav-title>Рубрики</f7-nav-title>
    </f7-navbar>

    <f7-block strong inset>
      <f7-list>
        <f7-list-item
                v-for="(tag, idx) in tags"
                :key="idx"
                :title="tag"
                :link="`/tag/${tag}/`"
        ></f7-list-item>
      </f7-list>
    </f7-block>
  </f7-page>
</template>

<script>
export default {
  name: 'TagListPage',
  props: {
  },
  data() {
    return {
      tags: [
        'Новость',
        'Статья',
        'Актуально',
        'Год экологии',
        'Гость номера',
        'Конкурс',
        'Коротко о главном',
        'Охрана труда',
        'Поздравления',
        'Нефть',
        'Новость',
        'Статья',
        'Актуально',
        'Год экологии',
        'Гость номера',
        'Конкурс',
        'Коротко о главном',
        'Охрана труда',
        'Поздравления',
        'Нефть',
      ]
    }
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
