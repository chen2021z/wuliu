<template>
    <div>
        <Header><van-icon name="arrow-left" @click="$router.push('/home')" /> <span>新闻动态</span></Header>
        <Condition></Condition>
        <Condition></Condition>
        <Condition></Condition>
        <Condition></Condition>
        <Condition></Condition>
        <Condition></Condition>
        <Condition></Condition>
        <Condition></Condition>
        <Condition></Condition>
        <Condition></Condition>
        <Condition></Condition>
        <Condition></Condition>
        <Condition></Condition>
        <Condition></Condition>
    </div>
</template>

<script>
import Condition from '@/components/Condition'
export default {
    components:{
        Condition
    }
}
</script>

<style lang="less" scoped>

</style>