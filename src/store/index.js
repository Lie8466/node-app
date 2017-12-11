/**
 * Created by li on 10/12/2017.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './action';
import getters from './getters';

Vue.use(Vuex);

const state = {
    userInfo: null,
    login: false,
    pageTitle: ''
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});
