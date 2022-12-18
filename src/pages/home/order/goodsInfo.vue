<template>
    <div>
        <Header><van-icon name="arrow-left" @click="$router.push('/order')" /> <span>新增订单</span></Header>
        <div class="goodsNames">
            <p>货物名称:</p>
            <div class="goodsNameList list">
                <!-- <router-link to="/home">111111111111</router-link> -->
                <!-- 这里用事件委托不好 -->
                <div @click="selectName" :class="{ active: nameActive == '日用品' }">
                    日用品
                </div>
                <div @click="selectName" :class="{ active: nameActive == '家用电器' }">
                    家用电器
                </div>
                <div @click="selectName" :class="{ active: nameActive == '数码产品' }">
                    数码产品
                </div>
                <div @click="selectName" :class="{ active: nameActive == '食品饮料' }">
                    食品饮料
                </div>
                <div @click="selectName" :class="{ active: nameActive == '设备及材料' }">
                    设备及材料
                </div>
                <div @click="selectName" :class="{ active: nameActive == '服装鞋帽' }">
                    服装鞋帽
                </div>
                <div @click="selectName" :class="{ active: nameActive == '其他' }">
                    其他
                </div>
            </div>
        </div>

        <div class="goodsPacks">
            <p>货物包装:</p>
            <div class="goodsPacksList list">
                <div @click="selectPack" :class="{ active: packActive == '包装袋' }">
                    包装袋
                </div>
                <div @click="selectPack" :class="{ active: packActive == '裸妆' }">
                    裸妆
                </div>
                <div @click="selectPack" :class="{ active: packActive == '膜' }">
                    膜
                </div>
                <div @click="selectPack" :class="{ active: packActive == '木架' }">
                    木架
                </div>
                <div @click="selectPack" :class="{ active: packActive == '纤袋' }">
                    纤袋
                </div>
                <div @click="selectPack" :class="{ active: packActive == '信封' }">
                    信封
                </div>
                <div @click="selectPack" :class="{ active: packActive == '纸箱' }">
                    纸箱
                </div>
            </div>
        </div>

        <div class="weight">
            <p>重量体积：</p>
            <div class="weivol">
                <!-- 件数 -->
                <van-field v-model="num" maxlength="3" type="digit" label="件数" placeholder="0" @focus="show1 = true" />
                <!-- 重量 -->
                <van-field v-model="weight" maxlength="3" type="number" label="重量(公斤)" placeholder="0"
                    @focus="show2 = true" />
                <!-- 体积 -->
                <van-field v-model="volume" maxlength="3" type="number" label="体积(立方)" placeholder="0"
                    @focus="show3 = true" />
            </div>
        </div>

        <div class="remark">
            <p>备注:</p>
            <div class="textcon">
                <van-field v-model="remark" autosize rows="3" type="textarea" placeholder="请把托运中注意事项写出来" />
            </div>
        </div>

        <van-button type="danger" @click="submit">提交</van-button>


        <!-- 数字键盘 -->
        <van-number-keyboard v-model="num" :show="show1" theme="custom" :extra-key="['00', '.']" 
        close-button-text="完成" @blur="show1 = false" @input="onInput" @delete="onDelete" />
        <van-number-keyboard v-model="weight" :show="show2" theme="custom" :extra-key="['00', '.']"
            close-button-text="完成" @blur="show2 = false" @input="onInput" @delete="onDelete" />
        <van-number-keyboard v-model="volume" :show="show3" theme="custom" :extra-key="['00', '.']"
            close-button-text="完成" @blur="show3 = false" @input="onInput" @delete="onDelete" />
    </div>
</template>

<script>
import { Toast } from 'vant';

export default {
    data() {
        return {
            //数字键盘展示
            show1: false,
            show2: false,
            show3: false,
            nameActive: '',
            packActive: '',
            num: '',
            weight: '',
            volume: '',
            remark: '',
            value: ''
        }
    },
    created(){
        this.initData()
    },
    methods: {
        initData(){
            this.nameActive = JSON.parse(localStorage.getItem('nameActive'))
            this.packActive = JSON.parse(localStorage.getItem('packActive'))
            this.num = JSON.parse(localStorage.getItem('num'))
            this.weight = JSON.parse(localStorage.getItem('weight')) 
            this.volume = JSON.parse(localStorage.getItem('volume')) 
            this.remark = JSON.parse(localStorage.getItem('remark')) 
        },
        selectName(event) {
            this.nameActive = event.target.innerText;
        },
        selectPack(event) {
            this.packActive = event.target.innerText;
        },
        submit() {
            const { nameActive, packActive, num, weight, volume, remark } = this
            if (nameActive == '') {
                Toast.fail('请选择货物名称');
            } else if (packActive == '') {
                Toast.fail('请选择货物包装');
            } else if (num == '') {
                Toast.fail('请输入货物件数');
            } else if (weight == '') {
                Toast.fail('请输入货物重量');
            } else if (volume == '') {
                Toast.fail('请输入货物体积');
            } else {
                // 数据存储本地，返回订单页
                localStorage.setItem('nameActive', JSON.stringify(nameActive))
                localStorage.setItem('packActive', JSON.stringify(packActive))
                localStorage.setItem('num', JSON.stringify(num))
                localStorage.setItem('weight', JSON.stringify(weight))
                localStorage.setItem('volume', JSON.stringify(volume))
                localStorage.setItem('remark', JSON.stringify(remark))

                this.$router.push('/order')
            }
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
.goodsNames,
.goodsPacks,
.weight,
.remark {
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

    .weivol {
        border-top: 2px solid rgb(209, 209, 209);

        ::v-deep .van-field__control {
            background-color: rgb(240, 240, 240);
            border-radius: 3px;
        }
    }

    .textcon {
        border-top: 2px solid rgb(209, 209, 209);
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