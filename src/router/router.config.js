/**
 * Created by li on 10/12/2017.
 */

import login from '../pages/login/login';

const routerMap = [
    {
        path: '/',
        redirect: {name: 'login'}
    },
    {
        path: '/login',
        name: 'login',
        component: login,
        meta: {
            title: '注册登录'
        }
    }
];

export default routerMap;

