<template>
    <div>
        <Header>订单追踪</Header>
        <van-tabs v-model="active" line-width="20%">
            <van-tab title="全部">
                <OrderItem v-for="order in orderList" :key="order.orderId" :order="order" @click.native="selectItem(order)"></OrderItem>
            </van-tab>
            <van-tab title="未受理">
                <OrderItem v-for="order in list1" :key="order.orderId" :order="order"></OrderItem>
            </van-tab>
            <van-tab title="已受理">
                <OrderItem v-for="order in list2" :key="order.orderId" :order="order"></OrderItem>
            </van-tab>
            <van-tab title="已开单">
                <OrderItem v-for="order in list3" :key="order.orderId" :order="order"></OrderItem>
            </van-tab>
            <van-tab title="已签收">
                <OrderItem v-for="order in list4" :key="order.orderId" :order="order"></OrderItem>
            </van-tab>
        </van-tabs>


        <van-action-sheet v-model="show" :actions="actions" close-on-click-action @select="onSelect"  cancel-text="取消"/>
    </div>
</template>

<script>
import { getOrders ,disOrder} from "../../api/order"
import OrderItem from './orderItem'
import { Toast } from 'vant'
import { mapState } from 'vuex'
export default {
    name: 'Track',
    components: {
        OrderItem
    },
    data() {
        return {
            active: 0,
            orderList: [],
            show: false,
            actions: [{ name: '查看订单详情' ,color:'#fc5531'}, { name: '取消发货' }],
            selectId:'',
            orderInfo:{}
        };
    },
    computed: {
        list1() {
            return this.orderList.filter(item => {
                return item.orderStatus == '未受理'
            })
        },
        list2() {
            return this.orderList.filter(item => {
                return item.orderStatus == '已受理'
            })
        },
        list3() {
            return this.orderList.filter(item => {
                return item.orderStatus == '已开单'
            })
        },
        list4() {
            return this.orderList.filter(item => {
                return item.orderStatus == '已签收'
            })
        },
        ...mapState('user', ['userInfo'])

    },
    created() {
        this.userInfo.userId && this.initData()
    },
    methods: {
        async initData() {
            let res = await getOrders()
            if (res.code == 200) {
                this.orderList = res.data.reverse()
            }
        },
        async onSelect(item) {
            if(item.name=="取消发货"){
                let res = await disOrder(this.selectId)
                if(res.code==200){
                    Toast.success('取消成功');
                }else {
                    Toast.fail('取消失败');
                }
            }else if(item.name=="查看订单详情"){
                localStorage.setItem('orderInfo',JSON.stringify(this.orderInfo))
                this.$router.push('/orderInfo')
            }

           
            
        },
        selectItem(order){
            this.show=true
            this.selectId = order.orderId
            this.orderInfo = order
        }
    }
}
</script>

<style>
#app {
    margin-bottom: 8vh;
}
</style>