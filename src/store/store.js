import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        filter: ''
    },
    mutations: {
        applyFilter(state, payload) {
            state.filter = payload;
        }
    }
});