<template>
    <div>
        <div class="card">
            <p>{{card.myname}}{{card.phone_number}}</p>
            <p>{{card.province}}{{card.city}}{{card.region}}{{card.detailed_address}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props:['card']
    }
</script>

<style lang="less" scoped>
.card{
    width: 375px;
    background-color: #fff;
    padding: 10px;
    margin: 5px 0;
    // border-top: 2px solid rgb(228, 228, 228);
    // border-bottom: 2px solid rgb(228, 228, 228);

    p:nth-child(1){
        font-size: 16px;
        font-weight: bold;
        color:rgb(112, 112, 112);
    }
    p:nth-child(2){
        font-size: 14px;
        color:rgb(112, 112, 112);
    }
}
</style>