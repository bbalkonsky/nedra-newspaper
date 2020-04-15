<template>
    <f7-page name="home" ptr @ptr:refresh="loadMore">
        <f7-navbar title="Время открытий">
            <f7-nav-right>
                <f7-link login-screen-open="#my-login-screen" icon-ios="f7:person_alt_circle" icon-aurora="f7:person_alt_circle" icon-md="material:person_alt_circle"></f7-link>
            </f7-nav-right>
        </f7-navbar>

        <f7-card class="demo-card-header-pic" v-for="edition in editions" :key="edition.id">
            <f7-card-header
                    class="no-border"
                    valign="bottom"
                    :style="'background-image:url(' + edition.img + ')'"
            >
            </f7-card-header>
            <f7-card-content>
<!--                <p class="date">Posted on January 21, 2015</p>-->
                <p>{{edition.title}}</p>
            </f7-card-content>
            <f7-card-footer>
                <f7-link :href="`/articles/${edition.id}/`">Читать</f7-link>
            </f7-card-footer>
        </f7-card>

    </f7-page>
</template>

<script>
    export default {
        name: "HomePage",
        data() {
            return {
                editions: [
                    {
                        id: 1,
                        title: '«Январь 2020», №1 (66)',
                        img: 'https://nedra.gazprom.ru/_ah/img/Vbsd6-gBGdNMk_JZYVExDA=h262'
                    },
                    {
                        id: 2,
                        title: '«Февраль 2020», №2 (67)',
                        img: 'https://nedra.gazprom.ru/_ah/img/Vbsd6-gBGdNMk_JZYVExDA=h262'
                    },
                    {
                        id: 3,
                        title: '«Март 2020», №3 (68)',
                        img: 'https://nedra.gazprom.ru/_ah/img/Vbsd6-gBGdNMk_JZYVExDA=h262'
                    }
                ],

            }
        },
        methods: {
            loadMore(done) {
                setTimeout(() => {
                    console.log('PUUUUUUUUUUUL!');
                    done();
                }, 1000);
            },
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
</style>
