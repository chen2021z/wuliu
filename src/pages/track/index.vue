<template>
    <div>
        <Header>订单追踪</Header>
        <van-tabs v-model="active">
            <van-tab title="全部">
                <p>内容 1</p>
            </van-tab>
            <van-tab title="未受理">内容 2</van-tab>
            <van-tab title="已受理">内容 3</van-tab>
            <van-tab title="已开单">内容 4</van-tab>
            <van-tab title="已签收">内容 4</van-tab>
        </van-tabs>

    </div>
</template>

<script>


export default {
    name: 'Track',
    components: {

    },
    data() {
        return {
            active: 0,
        };
    },
}
</script>

<style lang="less" scoped>

</style>