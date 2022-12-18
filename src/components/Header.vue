<template>
    <div>
        <header>
            <div class="slot">
                <slot ></slot>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
header{
    width: 375px;
    // height: 60px;
    
    line-height: 10vh;
    background-color: var(--theme);
    .slot{
        height: 10vh;
        // line-height: 10vh;
        color: #fff;
        font-size: 20px;
        line-height: 10vh;
        padding-left: 10px;
    }
}
</style>