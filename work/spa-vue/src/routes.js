import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Cart from "./components/Cart";
import Products from "./components/Products";
import Checkout from "./components/Checkout";
import E404 from "./components/E404";
import Product from "./components/Product";
import orderSent from "./components/orderSent";
 
import {store} from "./store"

const routes = [
    {
        path: '',
        redirect: {name: 'products'}
    },
    {
        path: '/cart',
        component: Cart 
    },
    {
        name: 'products',
        path: '/products',
        component: Products,
        beforeEnter(from, to, next){
            store.dispatch('products/loadItems');
            next();
        }
    },
    {
        path: '/products/:id',
        component: Product
    },
    {
        path: '/checkout',
        component: Checkout,
    },
    {
        path: '/finish',
        component: orderSent,
    },
    {
        path: '*',
        component: E404 
    },
];

export const router = new VueRouter({
    routes,
    mode: 'history'
});