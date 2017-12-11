/**
 * Created by li on 10/12/2017.
 */

export default {
    getUserInfo ({commit}) {
        // 异步请求 用户信息
        return indexApi.userInfo().then((json) => {
            commit('RECORD_USERINFO', json.data);
            return json.data;
        })
            .catch((err) => {
                throw err;
            });
    }
};
