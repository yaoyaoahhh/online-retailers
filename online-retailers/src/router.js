/*jshint esversion:6*/
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";

Vue.use(Router);

const List = () =>
    import ("./views/List.vue");
const Detail = () =>
    import ("./views/Detail.vue");

const router = new Router({
    mode: "hash",
    base: process.env.BASE_URL,
    routes: [{
            path: "/list/:id",
            name: "list",
            component: List
        },
        {
            path: "/detail/:id",
            name: "detail",
            component: Detail,
        },
        {
            path: '*',
            name: "home",
            component: Home
        }
    ],

});
export default router;
// router.beforeEach((to, from, next) => {

//     next();
// });