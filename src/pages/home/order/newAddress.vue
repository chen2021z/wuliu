<template>
    <div>
        <div class="wrap">
            <Header><van-icon name="arrow-left" @click="routerBack" /> <span>地址簿编辑</span></Header>

            <van-address-edit :area-list="areaList" :address-info="addressInfo" show-delete show-set-default
                show-search-result :search-result="searchResult" :area-columns-placeholder="['请选择', '请选择', '请选择']"
                @save="onSave" @delete="onDelete" @change-detail="onChangeDetail" value="110101"
                @confirm="selectAddress" @change-area="changeArea" />
        </div>

    </div>
</template>

<script>
import { areaList } from '@vant/area-data';
import { Toast } from 'vant';

export default {
    data() {
        return {
            areaList,
            searchResult: [],
            cardInfo: {},
            addressInfo: {
                id: '',
                name: '张三',
                tel: '1',
                province: { code: '120000', name: '天津市' },
                city: { code: '120100', name: '天津市' },
                county: { code: '120102', name: '河东区' },
                addressDetail: '',
                isDefault: false
            }
        };
    },
    created() {
        // console.log(this.$route.params.cardInfo);
        // this.cardInfo = this.$route.params.cardInfo

    },
    mounted() {
        this.addressInfo.id = JSON.parse(localStorage.getItem('Eid')),
            this.addressInfo.name = JSON.parse(localStorage.getItem('Ename')),
            this.addressInfo.tel = JSON.parse(localStorage.getItem('Etel')),
            this.addressInfo.province = JSON.parse(localStorage.getItem('Eprovince')),
            this.addressInfo.city = JSON.parse(localStorage.getItem('Ecity')),
            this.addressInfo.county = JSON.parse(localStorage.getItem('Ecounty')),
            this.addressInfo.addressDetail = JSON.parse(localStorage.getItem('EaddressDetail')),
            this.addressInfo.isDefault = JSON.parse(localStorage.getItem('EisDefault'))
    },
    methods: {
        routerBack() {
            if (this.$route.query.from == 'addressBook') {
                this.$router.push('addressBook')
            } else {
                this.$router.push('/receive')
            }

        },
        onSave(content) {
            console.log(content);
            Toast('save');
        },
        onDelete() {
            Toast('delete');
        },
        onChangeDetail(val) {
            if (val) {
                this.searchResult = [
                    {
                        name: '黄龙万科中心',
                        address: '杭州市西湖区',
                    },
                ];
            } else {
                this.searchResult = [];
            }
        },
        selectAddress(val) {
            localStorage.setItem('Eprovince',JSON.stringify(val[0].name))
            localStorage.setItem('Ecity',JSON.stringify(val[1].name))
            localStorage.setItem('Ecounty',JSON.stringify(val[2].name))
            
            console.log(111, val);
        },
        changeArea(val) {
            console.log(val);
        }
    },
};
</script>

<style lang="less" scoped>
.wrap {
    height: 100vh;
    // background-color: aqua;
}
</style>