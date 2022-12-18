<template>
    <div>
        <div class="infocard" @click="selectCard">
            <p>{{ name }}</p>
            <p>城市:{{ province }}-{{ city }}-{{ county }}</p>
            <p>电话：{{ phone }}</p>
            <p>手机：{{ tel }}</p>
            <p>地址：{{ address }}</p>
        </div>
    </div>
</template>

<script>
export default {
    // props:['netPointName,']
    data() {
        return {
            id: '001',
            name: '东莞谢岗营业部',
            province: '广东',
            city: '东莞',
            county: '谢岗镇',
            phone: '19974077529',
            tel: '0752-7823720',
            address: '广东省东莞市拱墅区莫干山路 50 号'
        }
    },
    methods: {
        selectCard() {
            console.log(this.$route.query.type);
            // 将当前数据储存本地，然后跳转
            if (this.$route.query.type == 'start') {
                localStorage.setItem("startNetId", JSON.stringify(this.id))
                localStorage.setItem("startNetName", JSON.stringify(this.name))
            } else if(this.$route.query.type == 'end'){
                localStorage.setItem("endNetId", JSON.stringify(this.id))
                localStorage.setItem("endNetName", JSON.stringify(this.name))
            }else{

            }


            this.$router.push('/order')

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
}
</style>