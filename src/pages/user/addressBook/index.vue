<template>
    <div>
        <Header><van-icon name="arrow-left" @click="$router.push('/home')" /> <span>地址簿</span></Header>
        <van-tabs v-model="activeName" line-width="50%">
            <van-tab title="发件人" name="sender">
                <addressCard v-for="card in senderInfo" :key="card.id" :card="card" @click.native="selectCard(card)">
                </addressCard>
            </van-tab>
            <van-tab title="发货人" name="collecter">
                <addressCard v-for="card in collecterInfo" :key="card.id" :card="card" @click.native="selectCard(card)">
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
export default {
    components: {
        addressCard
    },
    data() {
        return {
            activeName: 'sender',
            addressCards: [{
                address_id: '0001',
                user_id: '0002',
                myname: '我的好兄弟1',
                detailed_address: '福星东路0011号',
                phone_number: '19974077529',
                code: '010101',
                collect_orsend: '1',
                is_default: 'true',
                city: '湘潭市',
                province: '湖南省',
                region: '岳塘区'
            }, {
                address_id: '0001',
                user_id: '0002',
                myname: '我的好兄弟2',
                detailed_address: '福星东路0011号',
                phone_number: '19974077529',
                code: '010101',
                collect_orsend: '1',
                is_default: 'false',
                city: '湘潭市',
                province: '湖南省',
                region: '岳塘区'
            }, {
                address_id: '0001',
                user_id: '0002',
                myname: '我的好兄弟3',
                detailed_address: '福星东路0011号',
                phone_number: '19974077529',
                code: '010101',
                collect_orsend: '2',
                is_default: 'false',
                city: '湘潭市',
                province: '湖南省',
                region: '岳塘区'
            }],
            show: false,
            actions: [{ name: '编辑' }, { name: '删除' }, { name: '克隆' }],
            selectCardInfo: {}
        }
    },
    computed: {
        senderInfo() {
            return this.addressCards.filter(item => {
                return item.collect_orsend == 1
            })
        },
        collecterInfo() {
            return this.addressCards.filter(item => {
                return item.collect_orsend == 2
            })
        },

    },
    methods: {
        onCancel() {
            // Toast('取消');
        },
        selectCard(card) {
            this.selectCardInfo = card
            this.show = true
        },
        selectItem(action, index) {


            localStorage.setItem("Eid", JSON.stringify(this.selectCardInfo.address_id))
            localStorage.setItem("Ename", JSON.stringify(this.selectCardInfo.myname))
            localStorage.setItem("Etel", JSON.stringify(this.selectCardInfo.phone_number))
            localStorage.setItem("Eprovince", JSON.stringify(this.selectCardInfo.province))
            localStorage.setItem("Ecity", JSON.stringify(this.selectCardInfo.city))
            localStorage.setItem("Ecounty", JSON.stringify(this.selectCardInfo.region))
            localStorage.setItem("EaddressDetail", JSON.stringify(this.selectCardInfo.detailed_address))
            localStorage.setItem("EisDefault", JSON.stringify(this.selectCardInfo.is_default))
            // console.log(action);
            if (action.name == '编辑') {
                // params 只能配合 name 使用
                this.$router.push({ name: 'newAddress' ,query:{from:'addressBook'}})
            } else if (action.name == '删除') {

            } else {
                // 克隆
            }
        },
        addAddress(){
            localStorage.setItem("Eid", JSON.stringify(''))
            localStorage.setItem("Ename", JSON.stringify(''))
            localStorage.setItem("Etel", JSON.stringify(''))
            localStorage.setItem("Eprovince", JSON.stringify(''))
            localStorage.setItem("Ecity", JSON.stringify(''))
            localStorage.setItem("Ecounty", JSON.stringify(''))
            localStorage.setItem("EaddressDetail", JSON.stringify(''))
            localStorage.setItem("EisDefault", JSON.stringify(''))
            this.$router.push({ name: 'newAddress' ,query:{from:'addressBook'}})
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