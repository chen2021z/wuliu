<template>
    <div>
        <van-tabbar v-model="active" active-color="var(--theme)">
            <van-tabbar-item name="home" icon="home-o" @click="setTabbar('home')">首页</van-tabbar-item>
            <van-tabbar-item name="track" icon="search" @click="setTabbar('track')">追踪</van-tabbar-item>
            <van-tabbar-item name="user" icon="setting-o" @click="setTabbar('user')">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
        };
    },
    computed: {
        ...mapState('Tabbar', ['tabbarName']),
        active: {
            get() {
                return this.tabbarName
            },
            set(val) {
                this.$store.commit('Tabbar/SETTABBER', val)
            }
        }
    },

    watch: {
        // tabbarName(newVal,oldVal){
        //     this.active = newVal
        // }
        // 监听路由变化
        $route(to, from) {
            if (to.path == '/track') {
                this.active = 'track'
            } else if (to.path == '/user') {
                this.active = 'user'
            } else {
                this.active = 'home'
            }
        }
    },
    methods: {
        setTabbar(tab) {
            this.$store.commit('Tabbar/SETTABBER', tab)
            this.$router.push({ name: tab })
        }
    },

}
</script>

<style lang="less" scoped>
.van-tabbar{
    // margin-top: 8vh;
    height: 8vh;
}
</style>