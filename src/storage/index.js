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
        setCount(state, value) {
            if (value === '+1')
                state.count++;

            else if (value === '-1'){
                if (state.count > 1) state.count--;
            }

            else {
                let parsed = parseInt(value);
                if (isNaN(parsed) || parsed < 1)
                    state.count = 1;
                else {
                    if (!(/^[0-9]+$/.test(value))) 
                        value = value.replace(/[a-z]/gi, '');
 
                    state.count = parseInt(value);
                }
                    
            }
        },
        setStatus(state, value) {
            state.status = value;
        }
    },
    actions: {
        Increase(store) {
            store.commit('setCount', '+1');
        },
        Decrease(store) {
            store.commit('setCount', '-1');
        },
        SetCount(store, value) {
            store.commit('setCount', value);
        },
        SendOrder(store) {
            store.commit('setStatus', 'pending');
            
            setTimeout(() => {
                store.commit('setStatus', 'done');
            }, 500);
        }
    },
    strict: process.env.NODE_ENV !== 'production'
});