<template>
    <div class="wrap">
        <Header><van-icon name="arrow-left" @click="$router.push('/home')" /> <span>新增订单</span></Header>

        <div class="send" @click="$router.push({ name: 'receive', params: { role: '发货人' } })">
            <span>寄</span>

            <span class="con" v-if="sender.id == null">请填写发货人信息</span>
            <div class="hasCon" v-else>
                <p class="name">{{ sender.name }}</p>
                <!-- 只显示一行内容 -->
                <div class="van-ellipsis address">{{ sender.address }}</div>
            </div>

            <svg-icon name="person" className="person" color="#ccc"></svg-icon>
        </div>
        <div class="collect" @click="$router.push({ name: 'receive', params: { role: '收件人' } })">
            <span>收</span>

            <span class="con" v-if="collecter.id == null">请填写收件人信息</span>
            <div class="hasCon" v-else>
                <p class="name">{{ collecter.name }}</p>
                <!-- 只显示一行内容 -->
                <div class="van-ellipsis address">{{ collecter.address }}</div>
            </div>

            <svg-icon name="person" className="person" color="#ccc"></svg-icon>
        </div>


        <ul>
            <li @click="$router.push({ name: 'network', query: { type: 'start' } })"> <span>出发网点</span>
                <span v-if="startNetDot.id == null">请选择出发网点</span>
                <div v-else class="van-ellipsis startNetDotName">{{ startNetDot.name }}</div>

                <van-icon name="arrow" />
            </li>
            <li @click="$router.push({ name: 'network', query: { type: 'end' } })"> <span>到达网点</span>
                <span v-if="startNetDot.id == null">请选择到达网点</span>
                <div v-else class="van-ellipsis endNetDotName">{{ endNetDot.name }}</div>

                <van-icon name="arrow" />
            </li>
            <li @click="$router.push('/goodsInfo')"> <span>货物信息</span> <span>请选择货物信息</span><van-icon name="arrow" />
            </li>
            <li @click="$router.push('/addValueService')"> <span>增值服务</span> <span>请选择增值服务</span><van-icon
                    name="arrow" /></li>
            <li @click="show=true"> <span>付款方式</span> <span>{{paymentType}}</span><van-icon name="arrow" /></li>
            <li class="lastli">
                <van-checkbox v-model="checked" checked-color="#fc5531"></van-checkbox>
                <p>
                    <span>我已阅读并同意</span>
                    <span>《霸王条款》</span>
                </p>
            </li>
        </ul>

        <div class="sub">
            <div class="btn" @click="submit">
                <span>提交订单</span>
            </div>
        </div>

        <!-- 现付到付动作面板 -->
        <van-action-sheet v-model="show" :actions="actions" cancel-text="取消" close-on-click-action @cancel="onCancel" @select="selectPayment" />
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    data() {
        return {
            checked: true,
            sender: {
                name: null,
                tel: null,
                id: null,
                address: null
            },
            collecter: {
                name: null,
                tel: null,
                id: null,
                address: null
            },
            startNetDot: {
                name: null,
                id: null
            },
            endNetDot: {
                name: null,
                id: null
            },
            paymentType:'现付',
            // 取消动作面板
            show: false,
            actions: [{ name: '现付' }, { name: '到付' }],
        }
    },
    created() {
        this.initData()

    },
    methods: {
        initData() {
            this.sender.id = JSON.parse(localStorage.getItem('Sid'))
            this.sender.tel = JSON.parse(localStorage.getItem('Stel'))
            this.sender.name = JSON.parse(localStorage.getItem('Sname'))
            this.sender.address = JSON.parse(localStorage.getItem('Saddress'))

            this.collecter.id = JSON.parse(localStorage.getItem('Cid'))
            this.collecter.tel = JSON.parse(localStorage.getItem('Ctel'))
            this.collecter.name = JSON.parse(localStorage.getItem('Cname'))
            this.collecter.address = JSON.parse(localStorage.getItem('Caddress'))

            this.startNetDot.id = JSON.parse(localStorage.getItem('startNetId'))
            this.startNetDot.name = JSON.parse(localStorage.getItem('startNetName'))

            this.endNetDot.id = JSON.parse(localStorage.getItem('endNetId'))
            this.endNetDot.name = JSON.parse(localStorage.getItem('endNetName'))
        },
        onCancel() {
            Toast('取消');
        },
        selectPayment(action,index){
            console.log(action);
            this.paymentType = action.name
        },
        submit(){
            // 发请求

            this.$router.push('/home')
        }
    }
}
</script>

<style lang="less" scoped>
.send,
.collect {
    width: 375px;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 3px 0;
    background-color: #fff;

    .person {
        width: 60px;
        height: 60px;
    }

    span:nth-child(1) {
        display: block;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: rgb(98, 98, 98);
        border-radius: 50%;
        color: #fff;
        font-size: 20px;
    }

    // 无内容的样式
    .con {
        width: 250px;
        color: rgb(187, 183, 183);
        font-size: 20px;
    }

    // 有内容的样式
    .hasCon {
        width: 250px;

        .name {
            font-size: 20px;
            font-weight: bold;
        }

        .address {
            font-size: 16px;
            color: rgb(142, 142, 142);
        }
    }
}

.collect {
    span:nth-child(1) {
        background-color: var(--theme);
    }
}

ul {
    width: 375px;
    margin-top: 15px;

    li {
        height: 50px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: rgb(255, 255, 255);
        margin-bottom: 2px;
        color: rgb(131, 131, 131);
        font-size: 16px;

        &>span:nth-child(2) {
            width: 200px;
        }

        .startNetDotName,
        .endNetDotName {
            width: 200px;
            font-size: 18px;
            color: rgb(63, 63, 63);
        }
    }

    .lastli {
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        justify-content: left;

        .van-checkbox {
            margin-left: 15px;
        }

        p {
            margin-left: 15px;

            span:nth-child(2) {
                color: red;
                font-weight: bold;
            }
        }
    }

}

.sub {
    width: 375px;
    height: 60px;
    background-color: rgb(237, 237, 237);
    position: fixed;
    bottom: 0;

    .btn {
        height: 100%;
        width: 160px;
        line-height: 60px;
        text-align: center;
        background-color: var(--theme);
        float: right;
        font-size: 20px;
        color: rgb(255, 255, 255);
    }
}
</style>