<template>
    <div class="wrap">
        <Header>个人中心</Header>
        <div class="info">
            <div class="photo">
                <img v-if="userInfo.userId" :src="userInfo.avatar" alt="">
                <img v-else src="../../assets/img/head.png" alt="" width="100%">
            </div>
            <div class="name">
                <div v-if="userInfo.userId">
                    <p>{{ userInfo.nickName }}</p>
                    <p>{{ userInfo.userName }}</p>
                </div>
                <div v-else>
                    <strong @click="$router.push('/login')">
                        请登录
                    </strong>
                </div>
            </div>
        </div>

        <ul>
            <li @click="$router.push('/addressBook')"> <span><svg-icon name="address"></svg-icon>地址簿</span> <van-icon
                    name="arrow" /></li>
            <div class="divider"></div>
            <li @click="$router.push('/track')"> <span><svg-icon name="order"></svg-icon>订单跟踪</span> <van-icon
                    name="arrow" /></li>
            <div class="divider"></div>
            <li @click="$router.push('/editInfo')"> <span><svg-icon name="myinfo"></svg-icon>个人信息</span> <van-icon
                    name="arrow" /></li>
            <div class="divider"></div>
            <!-- <li> <span><svg-icon name="transport" ></svg-icon>运单查询</span> <van-icon name="arrow" /></li>
            <li> <span><svg-icon name="preference" ></svg-icon>订单偏好</span> <van-icon name="arrow" /></li>
            <li> <span><svg-icon name="feedback" ></svg-icon>功能反馈</span> <van-icon name="arrow" /></li>
            <li> <span><svg-icon name="service" ></svg-icon>联系客服</span> <van-icon name="arrow" /></li>
            <li> <span><svg-icon name="help" ></svg-icon>使用帮助</span> <van-icon name="arrow" /></li> -->


        </ul>

        <div class="logout" @click="logout" v-if="userInfo.userId">
            退出当前账号
        </div>

    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'User',
    components: {
    },
    data() {
        return {

        }
    },
    created() {

    },
    computed: {
        ...mapState('user', ['userInfo'])
    },
    methods: {
        logout() {
            this.$store.dispatch('user/userLogout')
            this.$router.push('/')
        }
    },
}
</script>


<style lang="less" scoped>
.wrap {
    height: 667px;
}

.info {
    width: 375px;
    height: 100px;
    background-color: var(--theme);
    color: #fff;
    overflow: hidden;
    display: flex;
    justify-content: left;
    align-items: center;

    .photo {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        margin: 20px;
        background-color: #fff;

        img {
            width: 100%;
        }
    }

    .name {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        strong {
            font-size: 24px;
        }

        p:nth-child(1) {
            font-size: 24px;
        }

        p:nth-child(2) {
            font-size: 14px;
            text-align: center;
            border-radius: 20px;
            line-height: 20px;
            height: 20px;
            width: 100px;
            background-color: rgba(0, 0, 0, .2);
        }
    }
}

ul {
    width: 375px;

    li {
        height: 50px;
        // line-height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgb(255, 255, 255);
        margin-bottom: 2px;
        color: rgb(131, 131, 131);
        font-size: 16px;

        .van-icon {
            font-size: 20px;
            margin-right: 15px;
        }

        span {
            display: flex;
            align-items: center;

            .svg-icon {
                font-size: 35px;
                padding: 0 6px;
            }
        }
    }
}

.logout {
    margin: 10px auto;
    width: 350px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    color: rgb(132, 132, 132);
    background-color: rgb(255, 255, 255);
    border-radius: 5px;


}
</style>