<template>
    <f7-app :params="f7params" :theme-dark="false">

        <f7-views tabs class="safe-areas" v-bind:class="{ 'is-desktop': isDeviceDesktop }">

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
            <f7-view id="view-about" name="about" tab url="/about/"></f7-view>
<!--            <f7-view id="view-settings" name="taglist" tab url="/settings/"></f7-view>-->

        </f7-views>

        <div id="popup-anchor"></div>
    </f7-app>
</template>

<script>
    import routes from "@/js/routes";
    import {f7App, f7Views, f7View, f7Toolbar, f7Link} from 'framework7-vue';

    export default {
        name: 'App',
        data() {
            return {
                f7params: {
                    name: 'Время открытий',
                    id: 'com.myapp.test',
                    routes: routes,
                },
                isCloseButtonPressed: false,
                isDeviceDesktop: false
            }
        },
        components: {
            f7App, f7Views, f7View, f7Toolbar, f7Link
        },
        computed: {

        },
        created() {
            // console.log(navigator)

        },
        mounted() {
            this.isDeviceDesktop = this.$f7.device.desktop || this.$f7.device.ipad;
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
                    text: 'Приложение было обновлено. \nЧтобы изменения вступили в силу необходимо выполнить перезагрузку!',
                    cssClass: 'service-worker-dialog',
                    buttons: [
                        {
                            text: 'OK'
                        },
                        {
                            text: 'Перезагрузить',
                            onClick: this.onReloadPageClicked
                        }
                    ]
                }).open()
            });

            document.getElementById('framework7-root').addEventListener("swWasErrored", () => {
                this.$f7.dialog.create({ //TODO переделать на toast
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
            },
            onReloadPageClicked() {
                document.location.reload();
            }
        },
    }
</script>

<style>
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

    .is-desktop {
      max-width: 400px;
      left: 50%;
      transform: translateX(-50%);
    }

    .is-desktop .card-header {
      height: 40vw;
    }
</style>
