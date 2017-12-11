/**
 * Created by li on 10/12/2017.
 */
import Vue from 'vue';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(Mint);

import App from './pages/app';
import router from './router/router';
import store from './store/';

window.root = new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});