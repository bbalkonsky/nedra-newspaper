import HomePage from "@/components/HomePage";
import TagListPage from "@/components/TagListPage";
import ArticlesListPage from "@/components/ArticlesListPage";
import TagArticlesListPage from "@/components/TagArticlesListPage";
import ArticlePage from "@/components/ArticlePage";
import AboutPage from "@/components/AboutPage";
import SettingsPage from "@/components/SettingsPage";

const routes = [
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
];

export default routes;
