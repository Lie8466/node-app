<template>
    <div class="login-page">
        <form class="form-horizontal" @submit.prevent="submit">
            <div class="form-group">
                <label class="col-sm-5 control-label">用户名</label>
                <div class="col-sm-2">
                    <input type="email" class="form-control" v-model="username" placeholder="请输入用户名">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-5 control-label">密码</label>
                <div class="col-sm-2">
                    <input type="password" class="form-control" v-model="password" placeholder="请输入密码">
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-5 col-sm-2">
                    <button type="submit" class="btn btn-block btn-primary">登录</button>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-5 col-sm-2">
                    <div class="user-login">没有账号? <a>点此注册</a></div>
                </div>
            </div>
        </form>
    </div>
</template>
<style lang="scss">
    @import '~@common/styles/common.scss';
    .login-page {
        margin: 13% auto;
        .user-login {
            text-align: center;
            color: $grey;
        }
    }

</style>
<script lang="javascript">

    export default{
        data () {
            return {
                username: '',
                password: ''
            };
        },
        methods: {
            submit () {
                console.log('submit');
            }
        }
    };
</script>
