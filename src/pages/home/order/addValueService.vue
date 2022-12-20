<template>
    <div>
        <Header><van-icon name="arrow-left" @click="$router.push('/order')" /> <span>增值服务</span></Header>
        <div class="sendTypes">
            <p>送货方式:</p>
            <div class=" list">
                <!-- <router-link to="/home">111111111111</router-link> -->
                <!-- 这里用事件委托不好 -->
                <div @click="selectType" :class="{ active: typeActive == '自提' }">
                    自提
                </div>
                <div @click="selectType" :class="{ active: typeActive == '提货上门' }">
                    提货上门
                </div>
                <div @click="selectType" :class="{ active: typeActive == '送货上楼' }">
                    送货上楼
                </div>
            </div>
        </div>
        <div class="proxyOrder">
            <p>代签回单:</p>
            <div class=" list">
                <!-- <router-link to="/home">111111111111</router-link> -->
                <!-- 这里用事件委托不好 -->
                <div @click="selectProxy" :class="{ active: proxyActive == '不签回单' }">
                    不签回单
                </div>
                <div @click="selectProxy" :class="{ active: proxyActive == '原件返回' }">
                    原件返回
                </div>
                <div @click="selectProxy" :class="{ active: proxyActive == '传真返回' }">
                    传真返回
                </div>
            </div>

            <!-- 投保价值 -->
            <van-field v-model="addValue" maxlength="8" type="number" label="投保价值" placeholder="0"
                 />
            <!-- 代收货款 -->
            <van-field v-model="proxyMoney" maxlength="8" type="number" label="代收货款" placeholder="0"
                />
        </div>

        <van-button type="danger" @click="submit">提交</van-button>


        <!-- 数字键盘 -->
        <!-- <van-number-keyboard v-model="addValue" :show="show1" theme="custom" :extra-key="['00', '.']"
            close-button-text="完成" @blur="show1 = false" @input="onInput" @delete="onDelete" />
        <van-number-keyboard v-model="proxyMoney" :show="show2" theme="custom" :extra-key="['00', '.']"
            close-button-text="完成" @blur="show2 = false" @input="onInput" @delete="onDelete" /> -->
    </div>
</template>

<script>
import { json } from 'body-parser';
import { Toast } from 'vant';
export default {
    data() {
        return {
            typeActive: "自提",
            proxyActive: "不签回单",
            addValue: '',
            proxyMoney: '',
            show1: false,
            show2: false,

        }
    },
    created(){
        this.initData()
    },
    methods: {
        initData(){
            this.typeActive = JSON.parse(localStorage.getItem('typeActive'))
            this.proxyActive = JSON.parse(localStorage.getItem('proxyActive'))
            this.addValue = JSON.parse(localStorage.getItem('addValue'))
            this.proxyMoney = JSON.parse(localStorage.getItem('proxyMoney')) 
        },
        selectType(event) {
            this.typeActive = event.target.innerText;
        },
        selectProxy(event) {
            this.proxyActive = event.target.innerText;
        },
        submit() {
            // 数据存储本地，返回订单页
            localStorage.setItem('typeActive', JSON.stringify(this.typeActive))
            localStorage.setItem('proxyActive', JSON.stringify(this.proxyActive))
            localStorage.setItem('addValue', JSON.stringify(this.addValue))
            localStorage.setItem('proxyMoney', JSON.stringify(this.proxyMoney))
            this.$router.push('/order')
        },
        onInput(value) {
            // Toast(value);
        },
        onDelete() {
            // Toast('删除');
        },

    }
}
</script>

<style lang="less" scoped>
.sendTypes,
.proxyOrder {
    width: 375px;
    background-color: #fff;
    margin-bottom: 10px;

    p {
        height: 30px;
        line-height: 30px;
        font-size: 20px;
        font-weight: bold;
        padding: 10px 0 10px 20px;
        color: rgb(99, 99, 99);
    }

    .list {
        // width: 100%;
        border-top: 2px solid rgb(209, 209, 209);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: flex-start;
        padding: 0 20px;

        div {
            margin: 7px 0;
            width: 100px;
            height: 30px;
            line-height: 30px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 20px;
            text-align: center;
            font-size: 16px;
        }

        // 选中状态
        .active {
            color: var(--theme);
            border-color: var(--theme);
        }
    }

    ::v-deep .van-field__control {
        background-color: rgb(240, 240, 240);
        border-radius: 3px;
    }

}

.van-button {
    // margin: 10px auto;
    border-radius: 4px;
    margin-bottom: 40px;
    margin-top: 20px;
    width: 80px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}
</style>