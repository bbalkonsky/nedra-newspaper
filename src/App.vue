<template>
    <f7-app :params="f7params" :theme-dark="false">
        <f7-views tabs class="safe-areas">

            <!-- Tabbar for switching views-tabs -->
            <f7-toolbar tabbar labels bottom animated>
                <f7-link tab-link-active tab-link="#view-home" icon-ios="f7:today" icon-aurora="f7:today"
                         icon-md="material:today_fill" text="Выпуски"></f7-link>
                <f7-link tab-link="#view-taglist" icon-ios="f7:square_list" icon-aurora="f7:square_list"
                         icon-md="material:view_list_fill" text="Рубрики"></f7-link>
                <f7-link tab-link="#view-about" icon-ios="f7:info_circle" icon-aurora="f7:info_circle"
                         icon-md="material:info_circle_fill" text="О компании"></f7-link>
<!--                <f7-link tab-link="#view-settings" icon-ios="f7:gear_alt" icon-aurora="f7:gear_alt" icon-md="material:gear_alt_fill" text="Настройки"></f7-link>-->
            </f7-toolbar>

            <f7-view id="view-home" main tab tab-active url="/"></f7-view>
            <f7-view id="view-taglist" name="taglist" tab url="/taglist/"></f7-view>
            <f7-view id="view-about" name="taglist" tab url="/about/"></f7-view>
<!--            <f7-view id="view-settings" name="taglist" tab url="/settings/"></f7-view>-->

        </f7-views>

        <div id="popup-anchor"></div>
    </f7-app>
</template>

<script>
    import HomePage from './components/HomePage.vue'
    import TagListPage from './components/TagListPage.vue'
    import ArticlesListPage from "@/components/ArticlesListPage";
    import TagArticlesListPage from "@/components/TagArticlesListPage";
    import ArticlePage from "@/components/ArticlePage";
    import AboutPage from "@/components/AboutPage";
    import SettingsPage from "@/components/SettingsPage";

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
                        },
                        {
                            path: '/settings/',
                            component: SettingsPage
                        }
                    ],
                },
                isCloseButtonPressed: false
            }
        },
        computed: {

        },
        created() {

        },
        mounted() {
            // // const self = this;
            window.addEventListener('load', function () {
                window.history.pushState({}, '')
            });
            //
            window.addEventListener('popstate', function () {
                window.history.pushState({}, '')
            //
            //     // if (self.$f7router) {
            //     //     self.$f7router.back()
            //     // } else {
            //     //     if (!self.isCloseButtonPressed) {
            //     //         self.closePreventToast();
            //     //     } else {
            //     //         window.history.back();
            //     //     }
            //     // }
            //
            });

            document.getElementById('framework7-root').addEventListener("swWasUpdated", () => {
                this.$f7.dialog.create({
                    title: 'Внимание!',
                    text: 'Приложение было обновлено, необходимо выполнить перезагрузку!',
                    cssClass: 'service-worker-dialog',
                    buttons: [
                        {
                            text: 'OK'
                        }
                    ]
                }).open()
            });

            document.getElementById('framework7-root').addEventListener("swWasErrored", () => {
                this.$f7.dialog.create({
                    title: 'Не удалось установить приложение. Попробуйте обновить страницу',
                    buttons: [{text: 'OK'}]
                }).open()
            });

            if (this.$f7.device.ios) {
                document.getElementById('framework7-root').addEventListener("swWasInstalled", () => {
                    if (!window.matchMedia('(display-mode: standalone)').matches) {
                        this.$f7.popover.create({
                            targetEl: '#popup-anchor',
                            content: '<div class="popover popover-sw">' +
                                '<p>Чтобы установить приложение на телефон <br/> нажмите ' +
                                '<img src="./img/share.png"/>\n' +
                                ', а затем <img src="./img/add.png"/></p>\n' +
                                '</div>'
                        })
                            .open();
                    }
                });
            }


        },
        methods: {
            closePreventToast() {
                this.isCloseButtonPressed = true;
                window.history.pushState(null, '');
                this.$f7.toast.create({
                    text: 'Нажмите «Назад» еще раз чтобы закрыть приложение',
                    position: 'center',
                    closeTimeout: 2000,
                }).open();
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

    #popup-anchor {
        width: 1px;
        height: 1px;
        position: fixed;
        bottom: 0;
        left: 50%;
        right: 50%;
    }

    .popover-sw p {
        padding: 0 10px;
    }

    .popover-sw p img {
        width: 20px;
        height: 20px;
        vertical-align: middle;
    }
</style>
