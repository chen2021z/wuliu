<template>
    <div>
        <div class="box">
            <p><span>订单编号:</span> {{ orderId }} <span>{{ status }}</span> </p>
            <p><span>始发地:</span> {{ startPlace }}  </p>
            <p><span>目的地:</span> {{ endPlace }} </p>
            <p><span>收货人:</span> {{ collecter }}  </p>
            <p><span>品名:</span> {{ goodsName }}  </p>
            <p><span>货量:</span> {{ goodsNum }}件{{ goodsWeight }}公斤 {{ goodsVolume }}立方  </p>
            <p><span>创建时间:</span> {{ createTime }}  </p>
        </div>
    </div>
</template>

<script>
export default {
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

        }
    }
}
</script>

<style lang="less" scoped>
.box{
    margin-top: 5px;
    background-color: #fff;
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