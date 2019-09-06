import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        search: '',
    },
    mutations: {
        updateSearch(store, value) {
            store.search = value;
        }

    },
    actions: {}
});