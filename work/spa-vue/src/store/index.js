import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import menu from './modules/menu';
import products from './modules/products';
import cart from './modules/cart';
import checkout from './modules/checkout';

export const store = new Vuex.Store({
    modules: {
        menu,
        products,
        cart,
        checkout
    },
    strict: process.env.NODE_ENV !== 'production'
});