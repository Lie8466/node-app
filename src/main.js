/**
 * Created by li on 10/12/2017.
 */
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@common/styles/common.scss';

import App from './pages/app';
import router from './router/router';
import store from './store/';

Vue.use(ElementUI);

window.root = new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});
