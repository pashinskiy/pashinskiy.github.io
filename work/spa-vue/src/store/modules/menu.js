export default {
    namespaced: true,
    state: {
        items: [
            {
                url: '/products',
                text: 'Products'
            },
            {
                url: '/cart',
                text: 'Cart'
            },
            {
                url: '/checkout',
                text: 'Order now'
            },
        ],

    },
    getters: {
        items(state){
            return state.items;
        }
    }
}