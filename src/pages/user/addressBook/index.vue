<template>
    <div>
        <Header><van-icon name="arrow-left" @click="$router.push('/home')" /> <span>地址簿</span></Header>
        <van-tabs v-model="activeName" line-width="50%">
            <van-tab title="发件人" name="sender">
                <addressCard v-for="card in senderInfo" :key="card.addressId" :card="card"
                    @click.native="selectCard(card)">
                </addressCard>
            </van-tab>
            <van-tab title="发货人" name="collecter">
                <addressCard v-for="card in collecterInfo" :key="card.addressId" :card="card"
                    @click.native="selectCard(card)">
                </addressCard>
            </van-tab>
        </van-tabs>

        <div class="add" @click="addAddress">新增地址</div>
        <van-action-sheet v-model="show" :actions="actions" cancel-text="取消" close-on-click-action @cancel="onCancel"
            @select="selectItem" />

    </div>
</template>

<script>
import addressCard from '../../../components/addressCard.vue';
import { Toast } from 'vant';
import { getAddressList,deleteAddress } from '../../../api/address'
export default {
    components: {
        addressCard
    },
    data() {
        return {
            activeName: 'sender',
            addressCards: [],
            show: false,
            actions: [{ name: '编辑' }, { name: '删除' }, { name: '克隆' }],
            selectCardInfo: {}
        }
    },
    created() {
        this.initData()
    },
    computed: {
        senderInfo() {
            return this.addressCards.filter(item => {
                return item.collectOrsend == 1
            })
        },
        collecterInfo() {
            return this.addressCards.filter(item => {
                return item.collectOrsend == 2
            })
        },
        collectOrsend(){
            return this.activeName=="sender"?1:2
        }

    },
    methods: {
        async initData() {
            let res = await getAddressList()
            console.log(res);
            if (res.code == 200) {
                this.addressCards = res.data
            }
        },
        onCancel() {
            // Toast('取消');
        },
        selectCard(card) {
            this.selectCardInfo = card
            this.show = true
        },
        async selectItem(action, index) {
            localStorage.setItem("Eid", JSON.stringify(this.selectCardInfo.addressId))
            localStorage.setItem("Ename", JSON.stringify(this.selectCardInfo.myname))
            localStorage.setItem("Etel", JSON.stringify(this.selectCardInfo.phoneNumber))
            localStorage.setItem("Eprovince", JSON.stringify(this.selectCardInfo.province))
            localStorage.setItem("Ecity", JSON.stringify(this.selectCardInfo.city))
            localStorage.setItem("Ecounty", JSON.stringify(this.selectCardInfo.region))
            localStorage.setItem("EaddressDetail", JSON.stringify(this.selectCardInfo.detailedAddress))
            localStorage.setItem("EareaCode", JSON.stringify(this.selectCardInfo.code))
            localStorage.setItem("EisDefault", JSON.stringify(this.selectCardInfo.isDefault))
            // console.log(action);
            if (action.name == '编辑') {
                // params 只能配合 name 使用
                this.$router.push({ name: 'newAddress', query: { from: 'addressBook' ,type:'update'} })
            } else if (action.name == '删除') {
                let res = await deleteAddress(this.selectCardInfo.addressId)
                if(res.code == 200){
                    Toast.success('删除成功');
                    this.initData()
                }else{
                    Toast.fail('删除失败');
                }
            
            } else {
                // 克隆
                this.$router.push({ name: 'newAddress', query: { from: 'addressBook' ,type:'clone',collectOrsend:this.collectOrsend} })
            }
        },
        addAddress() {
            localStorage.setItem("Eid", JSON.stringify(''))
            localStorage.setItem("Ename", JSON.stringify(''))
            localStorage.setItem("Etel", JSON.stringify(''))
            localStorage.setItem("Eprovince", JSON.stringify(''))
            localStorage.setItem("Ecity", JSON.stringify(''))
            localStorage.setItem("Ecounty", JSON.stringify(''))
            localStorage.setItem("EaddressDetail", JSON.stringify(''))
            localStorage.setItem("EisDefault", JSON.stringify(''))
            localStorage.setItem("EareaCode", JSON.stringify(''))
            this.$router.push({ name: 'newAddress', query: { from: 'addressBook',type:'add' ,collectOrsend:this.collectOrsend} })
        }

    },
}
</script>

<style lang="less" scoped>
.add {
    width: 375px;
    height: 6vh;
    position: fixed;
    bottom: 0;
    background-color: var(--theme);
    color: #fff;
    text-align: center;
    font-size: 16px;
    line-height: 6vh;
}
</style>