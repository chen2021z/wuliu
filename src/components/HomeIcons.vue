<template>
    <div>
        <div class="content">
            <div class="item" @click="$router.push('/order')">
                <div class="circle" style="background:#1afa29">
                    <svg-icon name="xiadan" color="#fff"></svg-icon>
                </div>
                <span>
                    下单
                </span>
            </div>
            <div class="item" @click="$router.push('/netPoint')">
                <div class="circle" style="background:#f8e508">
                    <svg-icon name="wangdian" color="#fff"></svg-icon>
                </div>
                <span>
                    网点信息
                </span>
            </div>
            <div class="item">
                <div class="circle" style="background:#08f8d4">
                    <svg-icon name="yunfei" color="#fff"></svg-icon>
                </div>
                <span>
                    运费时效
                </span>
            </div>
            <div class="item">
                <div class="circle" style="background:#d308f9">
                    <svg-icon name="genzong" color="#fff"></svg-icon>
                </div>
                <span>
                    订单跟踪
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.content {
    width: 375px;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    .item {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        .circle {
            width: 60px;
            height: 60px;
            line-height: 60px;
            text-align: center;
            background-color: #ccc;
            border-radius: 50%;
        }

        span {
            font-size: 14px;
            color: rgb(109, 109, 109);
        }
    }
}
</style>