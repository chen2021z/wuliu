<template>
    <div>
        <div class="wrap">
            <Header><van-icon name="arrow-left" @click="$router.push('/order')" /> <span>网点选择</span></Header>

            <van-tabs v-model="activeName">
                <van-tab title="列表模式" name="list">
                    <div>
                        <netInfoCard></netInfoCard>
                        <netInfoCard></netInfoCard>
                        <netInfoCard></netInfoCard>
                        <netInfoCard></netInfoCard>
                        <netInfoCard></netInfoCard>

                    </div>
                </van-tab>
                <van-tab title="地图模式" name="map">
                    <div>
                        <baidu-map class="map" :center="address"></baidu-map>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import netInfoCard from '@/components/netInfoCard'
export default {
    components:{
        netInfoCard,
    },
    data() {
        return {
            activeName: 'a',
            address:''
        };
    },
    created(){
        // console.log(this.$route.query.type);
        if(this.$route.query.type == 'start'){
            this.address = JSON.parse(localStorage.getItem('Saddress')).split('市')[0] + '市' || ''
        }else{
            this.address = JSON.parse(localStorage.getItem('Caddress')).split('市')[0] + '市' || ''
        }
        
    }
}
</script>

<style lang="less" scoped>
.wrap{
    width: 375px;
    height: 100vh;
    ::v-deep .van-tabs__wrap{
        height: 6vh;
    }
}
.map {
    width: 100%;
    height: 84vh;
}
</style>