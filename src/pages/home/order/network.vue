<template>
    <div>
        <div class="wrap">
            <Header><van-icon name="arrow-left" @click="$router.push('/order')" /> <span>网点选择</span></Header>

            <van-tabs v-model="activeName">
                <van-tab title="列表模式" name="list">
                    <div>
                        <netInfoCard v-for=" net, index in netPointInfo" :key="index" :netPointInfo="net"></netInfoCard>
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
    components: {
        netInfoCard,
    },
    data() {
        return {
            activeName: 'a',
            address: '',
            netPointInfo: [{
                id: '00001',
                name: '庆隆朝阳五方12',
                province: '北京',
                city: '北京',
                county: '朝阳区',
                phone: '16666666666',
                tel: '0795-2398192124124',
                category: ['不发货', '自提送货'],
                code: '010101',
                detailedAddress: '大红门万泽龙物流园西排121号'
            }, {
                id: '00001',
                name: '庆隆朝阳五方13',
                province: '北京',
                city: '北京',
                county: '朝阳区',
                phone: '16666666666',
                tel: '0795-2398192124124',
                category: ['不发货', '自提送货'],
                code: '010101',
                detailedAddress: '大红门万泽龙物流园西排121号'
            }]
        };
    },
    created() {
        // console.log(this.$route.query.type);
        if (this.$route.query.type == 'start') {
            this.address = JSON.parse(localStorage.getItem('Saddress')).split('市')[0] + '市' || ''
        } else {
            this.address = JSON.parse(localStorage.getItem('Caddress')).split('市')[0] + '市' || ''
        }

    }
}
</script>

<style lang="less" scoped>
.wrap {
    width: 375px;
    height: 100vh;

    ::v-deep .van-tabs__wrap {
        height: 6vh;
    }
}

.map {
    width: 100%;
    height: 84vh;
}
</style>