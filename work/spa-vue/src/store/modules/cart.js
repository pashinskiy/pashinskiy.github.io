import { store } from '../';
export default {
    namespaced: true,
    state: {
        products_id: []
    },
    getters: {
        products_id(state) {
            return state.products_id;
        },
        productsInCart(state) {
            
            return store.getters['products/items'].filter(
                (elem) => state.products_id.indexOf(elem.id_product) !== -1
            );
        },
        lengthCart(state) {
            return state.products_id.length;
        },
        totalPrice(state) {
            let total = 0;
            if (state.products_id.length)
                for (let id of state.products_id) {
                    let price = store.getters['products/item'](id).price;
                    total += price;
                }
            return total;
        },
        inCart: (state) => (id) => {
            if (state.products_id.indexOf(id) == -1) return false;
            return true;
        }
    },
    mutations: {
        add(state, id) {
            if (state.products_id.indexOf(id) === -1) {
                state.products_id.push(id);
            }
        },
        remove(state, id) {
            let index = state.products_id.indexOf(id)
            if (index !== -1) {
                state.products_id.splice(index, 1);

            }
        },
        clear(state) {
            state.products_id = [];
        }
    },
    actions: {
        add(store, id) {
            store.commit('add', id);
        },
        remove(store, id) {
            store.commit('remove', id);
        },
        clear(store) {
            store.commit('clear');
        }
    }
}