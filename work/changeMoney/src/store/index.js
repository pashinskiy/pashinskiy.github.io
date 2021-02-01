import { createStore } from 'vuex'

export const store = createStore({
    state() {
        return {
            data: null,
            balance: {
                'RUR': 10000,
            }
        }
    },
    getters: {
        getDate(state) {
            return state.data ? state.data.Timestamp : null;
        },
        valutes(state) {
            return state.data ? state.data.Valute : {};
        },
        balance(state) {
            return state.balance;
        },
        valBalance: (state) => (code) => {
            return state.balance[code] ? state.balance[code] : 0;
        }
    },
    mutations: {
        loadData(state, data) {
            state.data = data;
        },
        changeBalans(state, obj) {
            if (!state.balance[obj.inCode]) state.balance[obj.inCode] = +obj.inValue;
            else state.balance[obj.inCode] += +obj.inValue;

            let raz = Math.trunc((state.balance[obj.outCode] - obj.outValue)*100)/100;
            if (!raz) delete state.balance[obj.outCode];
            else state.balance[obj.outCode] = raz;
        }
    },
    actions: {
        loadData(store) {
            fetch('https://www.cbr-xml-daily.ru/daily_json.js')
                .then(responce => responce.json())
                .then(res => store.commit('loadData', res))
        },
        changeBalans(store, obj) {
            store.commit('changeBalans', obj);
        }
    }
});
