<template>
    <div>
        <Header>首页</Header>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item class="item1"></van-swipe-item>
            <van-swipe-item class="item2"></van-swipe-item>
            <van-swipe-item class="item3"></van-swipe-item>
            <van-swipe-item class="item4"></van-swipe-item>
            <van-swipe-item class="item5"></van-swipe-item>
        </van-swipe>
        <HomeIcons></HomeIcons>
        <div class="divider" style="height:8px"></div>
        <div class="mid">
            <span>实训动态</span>
            <span @click="$router.push('/news')">更多</span>
        </div>
        <div class="divider"></div>

        <Condition></Condition>
        <Condition></Condition>
        <Condition></Condition>
        <Condition></Condition>
        <Condition></Condition>

        <!-- <svg-icon name="xiadan" color="red"></svg-icon> -->
    </div>
</template>

<script>
import HomeIcons from '@/components/HomeIcons'
import Condition from '@/components/Condition'
export default {
    name: 'Home',
    components: {
        HomeIcons,
        Condition,
    },
    data() {
        return {
            images: [
                'https://img01.yzcdn.cn/vant/apple-1.jpg',
                'https://img01.yzcdn.cn/vant/apple-2.jpg',
            ],
        }
    },
}
</script>

<style>
#app{
    margin-bottom: 8vh;
}
</style>


<style lang="less" scoped>

.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    height: 150px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
}
.item1,.item2,.item3,.item4,.item5{
    background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;

}
.item1{
    background-image: url('../../assets/img/s1.jpg');
}
.item2{
    background-image: url('../../assets/img/s1.jpg');
}
.item3{
    background-image: url('../../assets/img/s2.jpg');
}
.item4{
    background-image: url('../../assets/img/s4.jpg');
}
.item5{
    background-image: url('../../assets/img/s5.jpg');
}
.mid{
    // width: 375px;
    margin-top: 5px;
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
    background-color: rgb(255, 255, 255);
    font-size: 18px;
    span:nth-child(1){
        float: left;
        font-weight: bold;
        color: rgb(118, 118, 118);
    }
    span:nth-child(2){
        color: #39a9ed;
        float: right;
    }
}
</style>