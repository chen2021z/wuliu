<template>
    <div>
        <Header>订单追踪</Header>
        <van-tabs v-model="active" line-width="20%">
            <van-tab title="全部">
                <OrderItem v-for="order in orderList" :key="order.orderId" :order="order"></OrderItem>
            </van-tab>
            <van-tab title="未受理">内容 2</van-tab>
            <van-tab title="已受理">内容 3</van-tab>
            <van-tab title="已开单">内容 4</van-tab>
            <van-tab title="已签收">内容 4</van-tab>
        </van-tabs>

    </div>
</template>

<script>
import { getOrders } from "../../api/order"
import OrderItem from './orderItem'
export default {
    name: 'Track',
    components: {
        OrderItem
    },
    data() {
        return {
            active: 0,
            orderList: []
        };
    },
    created() {
        this.initData()
    },
    methods: {
        async initData() {
            let res = await getOrders()
            if (res.code == 200) {
                this.orderList = res.data
            }
        }
    }
}
</script>

<style>
#app {
    margin-bottom: 8vh;
}
</style>