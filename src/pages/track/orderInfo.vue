<template>
    <div>
        <Header><van-icon name="arrow-left" @click="$router.push('/track')" /> <span>订单信息</span></Header>

        <ul>
            <li><span>订单编号：</span>{{order.orderId }}</li>
            <li><span>发货人：</span>{{order.myname1 }}</li>
            <li><span>发货人电话：</span>{{order.orderId }}</li>
            <li><span>发货人地址：</span>{{order.province1 }}{{order.city1 }}{{order.region1 }}{{order.detailedAddress1 }}</li>
            <li><span>收货人：</span>{{order.myname2 }}</li>
            <li><span>收货人电话：</span>{{order.orderId }}</li>
            <li><span>收货人地址</span>{{order.province2 }}{{order.city2 }}{{order.region2 }}{{order.detailedAddress2 }}</li>
            <li><span>下单时间</span>{{order.createOrderTime }}</li>
            <li><span>始发网点：</span>{{order.websiteName1 }}</li>
            <li><span>终端网点：</span>{{order.websiteName1 }}</li>
            <li><span>货物名称：</span>{{order.goodsNames }}</li>
            <li><span>货物包装：</span>{{order.goodsPack }}</li>
            <li><span>货物货量：</span>{{order.num }}件 {{order.weigth }}公斤 {{order.volume }}立方</li>
            <li><span>价格信息：</span>0.45元/公斤 90元/立方 最低10元</li>
            <li><span>上门接货：</span>客户自送</li>
            <li><span>送货方式：</span>自提</li>
            <li><span>投保价值：</span>{{order.valueInsured }}</li>
            <li><span>代收货款金额：</span>{{order.goodsPayment }}</li>
            <li><span>签收回单类型：</span>不签回单</li>
            <li><span>付款方式：</span>{{order.payment }}</li>
            <li><span>订单状态：</span>{{order.orderStatus }}</li>
            <li><span>注意事项：</span>{{order.remark }}</li>

        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            order:''
        }
    },
    created(){
        this.order = JSON.parse(localStorage.getItem('orderInfo'))
    }
}
</script>

<style lang="less" scoped>
ul{
    li{
        border-top: 1px solid rgb(243, 242, 242);
        font-size: 15px;
        height: 40px;
        width: 375px;
        line-height: 40px;
        background-color: #fff;
        color: rgb(106, 105, 105);
        span:nth-child(1){
            display: inline-block;
            width: 120px;
            padding-left: 15px;
        }
    }
}
</style>