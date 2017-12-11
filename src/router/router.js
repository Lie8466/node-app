/**
 * Created by li on 10/12/2017.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router.config';

import store from '../store';

Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

export default router;

