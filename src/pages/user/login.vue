<template>
    <div>
        <van-nav-bar title="登录" />

        <van-form @submit="onSubmit">
            <van-field v-model="username" name="username" label="手机号" placeholder="手机号"
                :rules="[{ required: true, message: '请填写手机号' }, { validator, message: '请输入正确手机号' }]" />
            <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' },{ validator:checkPassword, message: '密码长度应大于5位 小于15位' }]" />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">登录</van-button>
            </div>
        </van-form>

        <router-link to="/register">没有账号，去注册</router-link>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        validator(val) {
            return /^1[3-9]\d{9}$/.test(val);
        },
        checkPassword(val){
            if(val.length>5 && val.length <15){
                return true;
            }else{
                return false;
            }
        },
        async onSubmit(values) {
            // console.log('submit', values);
            let res =  await this.$store.dispatch('user/postLogin',values)
            if(res == 'ok'){
                this.$store.dispatch('user/getUserInfo')
                this.$router.push('/')
            }else{
                Toast.fail('密码错误');
            }
        },
    },
};
</script>

<style lang="less" scoped>
.van-form{
    background-color: #fff ;
}
a{
    font-size: 13px;
    float: right;
    margin-right: 15px;
}
</style>