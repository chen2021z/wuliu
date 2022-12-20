<template>
    <div>
        <Header>订单追踪</Header>
        <van-tabs v-model="active" line-width="20%">
            <van-tab title="全部">
                <OrderItem></OrderItem>
            </van-tab>
            <van-tab title="未受理">内容 2</van-tab>
            <van-tab title="已受理">内容 3</van-tab>
            <van-tab title="已开单">内容 4</van-tab>
            <van-tab title="已签收">内容 4</van-tab>
        </van-tabs>

    </div>
</template>

<script>

import OrderItem from './orderItem'
export default {
    name: 'Track',
    components: {
        OrderItem
    },
    data() {
        return {
            active: 0,
        };
    },
}
</script>

<style>
#app{
    margin-bottom: 8vh;
}
</style>