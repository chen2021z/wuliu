<template>
    <div>
        <div class="wrap">
            <Header><van-icon name="arrow-left" @click="routerBack" /> <span>地址簿编辑</span></Header>

            <van-address-edit :area-list="areaList" :address-info="addressInfo" show-delete show-set-default
                show-search-result :search-result="searchResult" :area-columns-placeholder="['请选择', '请选择', '请选择']"
                @save="onSave" @delete="onDelete" @change-detail="onChangeDetail" value="110101"
                @change-area="changeArea" />
        </div>

    </div>
</template>

<script>
import { areaList } from '@vant/area-data';
import { Toast } from 'vant';
import { updateAddress, addAddress } from "../../../api/address"
export default {
    data() {
        return {
            areaList,
            searchResult: [],
            cardInfo: {},
            addressInfo: {
                id: '',
                name: '',
                tel: '1',
                province: '',
                city: '',
                county: '',
                addressDetail: '',
                isDefault: false,
                areaCode:''
            }
        };
    },
    mounted() {
        this.initData()
    },
    methods: {
        initData() {
            this.addressInfo.id = JSON.parse(localStorage.getItem('Eid')),
                this.addressInfo.name = JSON.parse(localStorage.getItem('Ename')),
                this.addressInfo.tel = JSON.parse(localStorage.getItem('Etel')),
                this.addressInfo.province = JSON.parse(localStorage.getItem('Eprovince')),
                this.addressInfo.city = JSON.parse(localStorage.getItem('Ecity')),
                this.addressInfo.county = JSON.parse(localStorage.getItem('Ecounty')),
                this.addressInfo.addressDetail = JSON.parse(localStorage.getItem('EaddressDetail')),
                this.addressInfo.areaCode = JSON.parse(localStorage.getItem('EareaCode')),
                this.addressInfo.isDefault = JSON.parse(localStorage.getItem('EisDefault')) == 1 ? true : false
        },
        routerBack() {
            if (this.$route.query.from == 'addressBook') {
                this.$router.push('addressBook')
            } else {
                this.$router.push({path:'/receive',query:{role:this.$route.query.collectOrsend}})
            }

        },
        async onSave(content) {
            console.log(content);
            const { id, name, tel, province, city, county, addressDetail, isDefault ,areaCode} = content
            // 将bool类型的isDefault转换
            let handleisDefault = isDefault ? 1 : 0
            // console.log(handleisDefault);
            if (this.$route.query.type == 'update') {
                let res = await updateAddress({ myname: name, detailedAddress: addressDetail, phoneNumber: tel, isDefault: handleisDefault, city, province, region: county, addressId: id , collectOrsend: this.$route.query.collectOrsend,code:areaCode})
                if (res.code == 200) {
                    Toast.success('修改成功');
                    if (this.$route.query.from == 'addressBook') {
                        this.$router.push('/addressBook')
                    } else {
                        this.$router.push({ path: '/receive', query: { role: this.$route.query.collectOrsend } })
                    }
                } else {
                    Toast.fail('修改失败');
                }
            } else if (this.$route.query.type == 'add') {
                let res = await addAddress({ myname: name, detailedAddress: addressDetail, phoneNumber: tel, isDefault: handleisDefault, city, province, region: county, collectOrsend: this.$route.query.collectOrsend,code:areaCode })
                if (res.code == 200) {
                    Toast.success('新增成功');
                    if (this.$route.query.from == 'addressBook') {
                        this.$router.push('/addressBook')
                    } else {
                        this.$router.push({ path: '/receive', query: { role: this.$route.query.collectOrsend } })
                    }
                } else {
                    Toast.fail('新增失败');
                }
            } else {
                // 克隆
                let res = await addAddress({ myname: name, detailedAddress: addressDetail, phoneNumber: tel, isDefault: handleisDefault, city, province, region: county, collectOrsend: this.$route.query.collectOrsend,code:areaCode })
                if (res.code == 200) {
                    Toast.success('克隆成功');
                    if (this.$route.query.from == 'addressBook') {
                        this.$router.push('/addressBook')
                    } else {
                        this.$router.push({ path: '/receive', query: { role: this.$route.query.collectOrsend } })
                    }
                } else {
                    Toast.fail('克隆失败');
                }
            }


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
        changeArea(val) {
            console.log(val);
            localStorage.setItem('Eprovince', JSON.stringify(val[0].name))
            localStorage.setItem('Ecity', JSON.stringify(val[1].name))
            localStorage.setItem('Ecounty', JSON.stringify(val[2].name))
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