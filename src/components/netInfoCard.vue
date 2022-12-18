<template>
    <div>
        <div class="infocard" @click="selectCard">
            <p>{{ netPointInfo.name }}</p>
            <p>城市:{{ netPointInfo.province }}-{{ netPointInfo.city }}-{{ netPointInfo.county }}</p>
            <p>电话：{{ netPointInfo.phone }}</p>
            <p>手机：{{ netPointInfo.tel }}</p>
            <p>详细地址：{{ netPointInfo.detailedAddress }}</p>
            <p><span v-for="item,index in netPointInfo.category" :key="index">{{item}}</span></p>
        </div>
    </div>
</template>

<script>
export default {
    props:['netPointInfo'],
    data() {
        return {
            // id: '001',
            // name: '东莞谢岗营业部',
            // province: '广东',
            // city: '东莞',
            // county: '谢岗镇',
            // phone: '19974077529',
            // tel: '0752-7823720',
            // address: '广东省东莞市拱墅区莫干山路 50 号',
            // code:'',
            // category: ['不发货', '自提送货'],
        }
    },
    created(){
        // console.log(this.netPointInfo);
    },
    methods: {
        selectCard() {
            // console.log(this.$route.query.type);
            // 将当前数据储存本地，然后跳转
            if (this.$route.query.type == 'start') {
                localStorage.setItem("startNetId", JSON.stringify(this.netPointInfo.id))
                localStorage.setItem("startNetName", JSON.stringify(this.netPointInfo.name))
                this.$router.push('/order')
            } else if(this.$route.query.type == 'end'){
                localStorage.setItem("endNetId", JSON.stringify(this.netPointInfo.id))
                localStorage.setItem("endNetName", JSON.stringify(this.netPointInfo.name))
                this.$router.push('/order')
            }else{
                // 没有传type。为undefined,说明是在查询列表
                // console.log(this.$route);
            }


           

        }
    }
}
</script>

<style lang="less" scoped>
.infocard {
    width: 375px;
    background-color: #fff;
    margin-top: 5px;
    color: rgb(126, 126, 126);
    font-size: 16px;
    padding: 5px 10px;

    p {
        // margin-left: 10px;
        padding: 3px 0;
    }

    p:nth-child(1) {
        font-size: 20px;
        font-weight: bold;
        color: rgb(86, 86, 86);
    }
    p:nth-last-child(1){
        span{
            font-size: 12px;
            color: var(--theme);
            border: 1px solid var(--theme);
            padding: 3px;
            margin-right: 10px;
            border-radius: 6px;
        }
    }   
}
</style>