import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Library from "./components/Library";
import BookPage from "./components/BookPage";
import E404 from "./components/E404";
import Change from "./components/Change";

const routes = [
    {
        path: '',
        redirect: {name: 'library'}
    },
    {
        path: '/library',
        name: 'library',
        component: Library
    },
    {
        path: '/:id',
        component: BookPage 
    },
    {
        path: '/change/:id',
        component: Change 
    },
    {
        path: '*',
        name: 'E404',
        component: E404 
    },
];

export const router = new VueRouter({
    routes,
});