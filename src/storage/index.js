import { createStore } from 'vuex';

export default createStore({
    state: {
        count: 1,
        price: 1000,
        status: 'none'
    },
    getters: {
        count: (state) => state.count,
        price: (state) => state.price,
        status: (state) => state.status,
        total(state) {
            return state.count * state.price;
        }
    },
    mutations: {
        increase(state) {
            state.count++;
        },
        decrease(state) {
            if (state.count > 0)
                state.count--;
        },
        setCount(state, value) {
            state.count = parseInt(value);
        },
        setStatus(state, value) {
            state.status = value;
        }
    },
    actions: {
        sendOrder(store) {
            store.commit('setStatus', 'pending');
            
            setTimeout(() => {
                store.commit('setStatus', 'done');
            }, 500);
        }
    },
    strict: process.env.NODE_ENV !== 'production'
});