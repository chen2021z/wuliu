<template>
    <div>
        <div class="box">
            <div>
                <img src="@/assets/img/OIP-C.jpg" alt="">
            </div>
            <div class="content">
                <p>12月11日，web实训计划正式开始</p>
                <p>12月11日，web实训计划正式开始</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.box{
    margin-top: 1px;
    padding: 10px;
    height: 52px;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    // align-items: flex-start;

    &>div:nth-child(1){
        width: 80px;
        img{
            width: 100%;
        }
    }
    &>div:nth-child(2){
        width: 260px;
        
        p:nth-child(1){
            font-size: 16px;
            font-weight: bold;
        }
        p:nth-child(2){
            font-size: 12px;
        }
    }
}
</style>