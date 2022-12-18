<template>
    <div>
        <div class="wrap">
            <Header><van-icon name="arrow-left" @click="$router.push('/receive')" /> <span>地址簿编辑</span></Header>

            <van-address-edit :area-list="areaList"  show-delete show-set-default show-search-result
                :search-result="searchResult" :area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave"
                @delete="onDelete" @change-detail="onChangeDetail" value="110101" @confirm="selectAddress" />
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
            
        };
    },
    created(){
        
    },
    methods: {
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
        selectAddress(val){
            console.log(111,val);
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