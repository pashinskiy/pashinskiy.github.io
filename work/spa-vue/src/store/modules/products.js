import Vue from 'vue';

export default {
    namespaced: true,
    state: {
        items: [],
    },
    getters: {
        items(state) {
            return state.items;
        },
        itemsMap(state){
            let itemsMap = {};
            for (let i=0; i<state.items.length; i++){
                let product = state.items[i];
                itemsMap[product.id_product] = product;
            }
            return itemsMap;
        },
        item: (state,getters) => (id) => {
            return getters.itemsMap[id];
        }
    },
    mutations: {
        loadItems(state, data){
            state.items = data;
        }
    },
    actions: {
        loadItems(store){
            Vue.http.get('data.json')
                .then(res => res.json())
                .then(data => store.commit('loadItems', data));
        }
    }
};