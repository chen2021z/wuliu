<template>
    <div>
        <div class="wrap">
            <Header><van-icon name="arrow-left" @click="$router.push('/home')" /> <span>网点查询</span></Header>

            <van-tabs v-model="activeName" @click="selectCity">
                <van-tab :title="city ? city : '点击选择城市'" name="city"></van-tab>
                <van-tab title="列表模式" name="list">
                    <netInfoCard v-for=" net, index in netPointInfo" :key="index" :netPointInfo="net"></netInfoCard>

                </van-tab>
                <van-tab title="地图模式" name="map">
                    <div class="mapCon">
                        <baidu-map class="map" :center="city"></baidu-map>
                    </div>
                </van-tab>
            </van-tabs>

            <van-area v-show="show" title="请选择城市" :area-list="areaList" :columns-num="2" @confirm="confirmAddress" />
        </div>
    </div>
</template>

<script>
import { areaList } from '@vant/area-data';
import netInfoCard from "@/components/netInfoCard"
export default {
    naem: 'netPoint',
    components: {
        netInfoCard
    },
    data() {
        return {
            city: '',
            activeName: 'city',
            show: true,
            areaList,
            netPointInfo: [{
                id: '00001',
                name: '庆隆朝阳五方',
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
                name: '庆隆朝阳五方111',
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
    methods: {
        confirmAddress(arr) {
            this.city = arr[1].name
            this.show = false
            // 切换tab 发请求展示数据
            this.activeName = 'list'
            // console.log(arr);
        },
        selectCity(name, title) {
            if (name == 'city') {
                this.show = true
            } else {
                this.show = false
            }
            // console.log(name, title);

        }
    }
}
</script>

<style lang="less" scoped>
.wrap {
    height: 90vh;
}
 
.van-area {
    width: 100%;
    position: fixed;
    bottom: 0;
}
::v-deep .van-tabs__wrap{
    height: 7vh;
}
.map{
    width: 375px;
    height: 83vh;
}
</style>