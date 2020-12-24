export default {
    namespaced: true,
    state: {
        info: [
            {
                name: 'Name',
                value: '',
                pattern: /^[a-zA-Zа-яА-я]{2,30}$/
            },
            {
                name: 'Phone',
                value: '',
                pattern: /^(8|\+7)[-]?[(]?\d{3}\)?[-]?((\d{1})[-]?){7}$/
            },
            {
                name: 'Email',
                value: '',
                pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/
            },
        ],
        submitProcces: false,
        submited: false,
    },
    getters:{
        info(state){
            return state.info;
        },
        submitProcces(state){
                return state.submitProcces;
        },
        validValCnt(state){
            let cnt = 0;
            for (let i=0; i < state.info.length; i++){
                if (state.info[i].pattern.test(state.info[i].value)) cnt++;
            }
            return cnt;
        },
        submited(state) {
            return state.submited;
        }
    },
    mutations:{
        updValue(state,data){
            state.info[data.i].value = data.val;
        },
        startSubmit(state){
            state.submitProcces = true;
            state.submited = true;
        },
        submited(state){
            state.submitProcces = false;
        }
    },
    actions:{
        updValue({commit}, data) {
            commit('updValue', data);
        },
        onSubmit({getters, commit, rootGetters}){
            commit('startSubmit');

            let data = {};
            let info = getters.info;
            for (let el of info){
                data[el.name] = el.value;
            }
            data.id_products = rootGetters['cart/products_id'];

            console.log(data);
            
            setTimeout(() => commit('submited'), 2000);
        }
    }
}