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
import { getNetList } from "@/api/network.js"
import netInfoCard from '@/components/netInfoCard'
export default {
    components: {
        netInfoCard,
    },
    data() {
        return {
            activeName: 'a',
            address: '',
            netPointInfo: []
        };
    },
    created() {
        // console.log(this.$route.query.type);
        this.initData()

    },
    methods: {
        async initData() {
            if (this.$route.query.type == 'start') {
                this.address = JSON.parse(localStorage.getItem('Scity'))
            } else {
                this.address = JSON.parse(localStorage.getItem('Ccity'))
            }
            let res = await getNetList(this.address)
            console.log(res);
            if (res.code == 200) {
                this.netPointInfo = res.data.map(i => {
                    return {
                        id: i.websiteId,
                        name: i.websiteName,
                        province: i.websiteProvince,
                        city: i.websiteCity,
                        county: i.websiteRegion,
                        phone: i.phone,
                        tel: i.tel,
                        category: ['不发货', '自提送货'],
                        code: i.code,
                        detailedAddress: i.detailedAddress
                    }
                })
            }
        }
    },
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