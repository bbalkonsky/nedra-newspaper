<template>
  <f7-app :params="f7params">
    <f7-views tabs class="safe-areas">

      <!-- Tabbar for switching views-tabs -->
      <f7-toolbar tabbar labels bottom animated>
        <f7-link tab-link-active tab-link="#view-home"  icon-ios="f7:today" icon-aurora="f7:today" icon-md="material:today_fill" text="Выпуски"></f7-link>
        <f7-link tab-link="#view-taglist" icon-ios="f7:square_list" icon-aurora="f7:square_list" icon-md="material:view_list_fill" text="Рубрики"></f7-link>
        <f7-link tab-link="#view-about" icon-ios="f7:info_circle" icon-aurora="f7:info_circle" icon-md="material:info_circle_fill" text="О компании"></f7-link>
        <f7-link tab-link="#view-settings" icon-ios="f7:gear_alt" icon-aurora="f7:gear_alt" icon-md="material:gear_alt_fill" text="Настройки"></f7-link>
      </f7-toolbar>

      <f7-view id="view-home" main tab tab-active url="/"></f7-view>
      <f7-view id="view-taglist" name="taglist" tab url="/taglist/"></f7-view>
      <f7-view id="view-about" name="taglist" tab url="/about/"></f7-view>
      <f7-view id="view-settings" name="taglist" tab url="/about/"></f7-view>

    </f7-views>

    <f7-login-screen id="my-login-screen">
      <f7-view>
        <f7-page login-screen>
          <f7-login-screen-title>Вход</f7-login-screen-title>
          <f7-list form>
            <f7-list-input
                    type="text"
                    name="username"
                    placeholder="Имя пользователя"
                    :value="username"
                    @input="username = $event.target.value"
            ></f7-list-input>
            <f7-list-input
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    :value="password"
                    @input="password = $event.target.value"
            ></f7-list-input>
          </f7-list>
          <f7-list>
            <f7-list-button title="Войти" @click="alertLoginData"></f7-list-button>
            <f7-block-footer>
              Всякое разное<br>Можно передавать приветы
            </f7-block-footer>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-login-screen>
  </f7-app>
</template>

<script>
import HomePage from './components/HomePage.vue'
import TagListPage from './components/TagListPage.vue'
import ArticlesListPage from "@/components/ArticlesListPage";
import TagArticlesListPage from "@/components/TagArticlesListPage";
import ArticlePage from "@/components/ArticlePage";
import AboutPage from "@/components/AboutPage";

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {
      f7params: {
        name: 'Время открытий',
        id: 'com.myapp.test',
        routes: [
          {
            path: '/',
            component: HomePage,
          },
          {
            path: '/taglist/',
            component: TagListPage,
          },
          {
            path: '/articles/:id/',
            component: ArticlesListPage
          },
          {
            path: '/tag/:id/',
            component: TagArticlesListPage
          },
          {
            path: '/article/:id/',
            component: ArticlePage
          },
          {
            path: '/about/',
            component: AboutPage
          }
        ],
      },
      username: '',
      password: '',
    }
  },
  methods: {
    alertLoginData() {
      this.$f7.dialog.alert('Пользователь: ' + this.username + '<br>Пароль: ' + this.password, () => {
        this.$f7.loginScreen.close();
      });
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
