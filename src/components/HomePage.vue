<template>
    <f7-page name="home" ptr @ptr:refresh="fetch">
        <f7-navbar title="Время открытий">
<!--            <f7-nav-right>-->
<!--                <f7-link login-screen-open="#my-login-screen" icon-ios="f7:person_alt_circle" icon-aurora="f7:person_alt_circle" icon-md="material:person_alt_circle"></f7-link>-->
<!--            </f7-nav-right>-->
        </f7-navbar>

            <f7-block v-if="isDataLoading" class="row align-items-stretch text-align-center" >
                <f7-col>
                    <f7-preloader :size="42"></f7-preloader>
                </f7-col>
            </f7-block>

<!--        <f7-card v-else v-for="edition in editions" :key="edition.id">-->
<!--            <f7-card-header-->
<!--                    class="no-border"-->
<!--                    valign="bottom"-->
<!--                    :style="'background-image:url(' + 'https://newspaper-dev.gp-ggr.ru/api/storage/' + edition.image.filename + ')'"-->
<!--            >-->
<!--            </f7-card-header>-->
<!--            <f7-card-content>-->
<!--&lt;!&ndash;                <p class="date">Posted on January 21, 2015</p>&ndash;&gt;-->
<!--                <p>{{edition.title}}</p>-->
<!--            </f7-card-content>-->
<!--            <f7-card-footer>-->
<!--                <f7-link :href="`/articles/${edition.id}/`">Перейти</f7-link>-->
<!--            </f7-card-footer>-->
<!--        </f7-card>-->

        <article-item-component
                v-else
                v-for="edition in editions" :key="edition.id"
                :article="edition"
                :link-resourse="'articles'"
                :isContentAvailable="false">
        </article-item-component>

    </f7-page>
</template>

<script>
    import ArticleItemComponent from "@/components/ArticleItemComponent";
    import repository from "@/api/repository";
    import {f7Page, f7Navbar, f7Block, f7Col, f7Preloader} from 'framework7-vue';

    export default {
        name: "HomePage",
        data() {
            return {
                isDataLoading: false,
                editions: [],
            }
        },
        components: {
            f7Page, f7Navbar, f7Block, f7Col, f7Preloader,
            ArticleItemComponent
        },
        methods: {
            // async loadMore(done) {
            //     try {
            //         const data = await repository.getRelease();
            //         this.editions = data.data;
            //     } catch(err) {
            //         console.log(err)
            //     }
            //     done();
            // },
          async fetch(done) {
            // this.isDataLoading = true;
            try {
              const data = await repository.getRelease();
              this.editions = data.data.sort(this.dateSorter);
            } catch(err) {
              console.log(err)
            }

            if (done){
              done()
            } else {
              this.isDataLoading = false;
            }

          },
          dateSorter(a, b) {
            const arrA = a.date.split('.');
            const arrB = b.date.split('.');
            const dateA = new Date(arrA[2], arrA[1] - 1, arrA[0]);
            const dateB = new Date(arrB[2], arrB[1] - 1, arrB[0]);
            return dateA < dateB ? 1 : dateA > dateB ? -1 : 0;
          }
        },
        created() {
            this.isDataLoading = true;
            this.fetch();
        },
        mounted() {
            const self = this;
            window.addEventListener('load', function () {
                window.history.pushState({}, '')
            });

            window.addEventListener('popstate', function () {
                // window.history.pushState({}, '')

                if (self.$f7router) {
                    self.$f7router.back()
                } else {
                    if (!self.isCloseButtonPressed) {
                        self.closePreventToast();
                    } else {
                        window.history.back();
                    }
                }

            });
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
