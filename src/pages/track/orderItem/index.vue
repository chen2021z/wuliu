<template>
    <div>
        <div class="box">
            <p><span>订单编号:</span> {{ order.orderId }} <span>{{ order.orderStatus }}</span> </p>
            <p class="van-ellipsis"><span>始发地:</span> {{ order.province1 }}{{ order.city1 }}{{ order.region1 }}{{ order.detailedAddress1 }}</p>
            <p class="van-ellipsis"><span>目的地:</span> {{ order.province2 }}{{ order.city2 }}{{ order.region2 }}{{ order.detailedAddress2 }}</p>
            <p><span>品名:</span> {{ order.myname2 }}  </p>
            <p><span>货量:</span> {{ order.num }}件{{ order.weigth }}公斤 {{ order.volume }}立方  </p>
            <p><span>创建时间:</span> {{ time }}  </p>
        </div>
    </div>
</template>

<script>

export default {
    props:["order"],
    data() {
        return {
            orderId: 'DD163290',
            startPlace: '湖南省湘潭市岳塘区',
            endPlace: '江西省宜春市铜鼓县',
            collecter: '陈治',
            goodsName: '食品饮料',
            goodsNum: '1',
            goodsWeight: '2',
            goodsVolume: '3',
            createTime: '2022-12-19 20:45:41',
            goodsStatus: 0
        }
    },
    computed: {
        status() {
            switch (this.goodsStatus) {
                case 0:
                    return '已撤销';
                    break;
                case 1:
                    return '未受理';
                    break;
                case 2:
                    return '已受理';
                    break;
                case 3:
                    return '已开单';
                    break;
                case 4:
                    return '已签收';
                    break;



            }

        },
        time(){
            return  this.order.createOrderTime.split('.')[0].split('T').join(" ")
            
        }
    }
}
</script>

<style lang="less" scoped>
.box{
    margin-top: 5px;
    background-color: rgb(255, 255, 255);
    padding: 10px;
    p{
        font-size: 15px;
        color: rgb(114, 114, 114);
        padding: 2px 0;
        span:nth-child(1){
            width: 80px;
            display: inline-block;
        }
        span:nth-child(2){
            color:skyblue;
            // margin-right:0;
            float: right;
        }
    }
}
</style>