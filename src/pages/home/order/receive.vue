<template>
    <div>
        <div class="wrap">
            <Header><van-icon name="arrow-left" @click="$router.push('/order')" /> <span>地址簿编辑</span></Header>
            <van-search v-model="value" placeholder="输入城市、区县、姓名、电话号码搜索" />

            <van-address-list v-model="chosenAddressId" :list="list" default-tag-text="默认" @add="onAdd" @edit="onEdit"
                @select="clickItem" />

            <!-- 展示取消按钮 -->
            <van-action-sheet v-model="show" :actions="actions" cancel-text="取消" close-on-click-action
                @cancel="onCancel" @select="onSelectBtn" />
        </div>


    </div>
</template>

<script>
import { getAddressList ,deleteAddress} from '../../../api/address'
import { Toast } from 'vant';
export default {
    data() {
        return {
            // 绑定搜索框的值
            value: '',
            chosenAddressId: '2',
            list: [],
            show: false,
            actions: [{ name: '编辑' }, { name: '删除' }, { name: '克隆' }],
            // 点击编辑的卡片信息
            editCard: {
                id: '',
                name: '',
                province: '',
                city: '',
                county: '',
                tel: '',
                addressDetail: '',
                isDefault: 'false',
                areaCode:''
            }
        }
    },
    created() {
        this.initData()
    },
    methods: {
        async initData() {
            let res = await getAddressList()
            let arr = res.data.filter(item => {
                return item.collectOrsend == this.$route.query.role
            })
            console.log(arr);
            this.list = arr.map(item => {
                return {
                    id: item.addressId,
                    name: item.myname,
                    tel: item.phoneNumber,
                    isDefault: item.isDefault,
                    city:item.city,
                    address: item.province + item.city + item.region + item.detailedAddress,
                    addressDetail: item.detailedAddress,
                    areaCode:item.code
                }
            })
        },
        onAdd() {
            this.$router.push({ path: '/newAddress', query: { collectOrsend: this.$route.query.role, type: 'add' } })
            // Toast('新增地址');
        },
        onEdit(item, index) {
            // console.log(item);
            const { id, name, tel, address, isDefault, addressDetail,city ,areaCode} = item
            this.editCard.id = id
            this.editCard.name = name
            this.editCard.city = city
            this.editCard.tel = tel
            this.editCard.isDefault = isDefault
            this.editCard.addressDetail = addressDetail
            this.editCard.address = address
            this.editCard.areaCode = areaCode

            this.show = true
            // Toast('编辑地址:' + index);
        },
        onCancel() {
            Toast('取消');
        },
        async onSelectBtn(action, index) {
            // index 从0开始，依次为编辑、删除、克隆  action包含当前选项的name
            // console.log(action, index);
            localStorage.setItem("Eid", JSON.stringify(this.editCard.id))
            localStorage.setItem("Ename", JSON.stringify(this.editCard.name))
            localStorage.setItem("Etel", JSON.stringify(this.editCard.tel))
            localStorage.setItem("Eaddress", JSON.stringify(this.editCard.address))
            localStorage.setItem("EaddressDetail", JSON.stringify(this.editCard.addressDetail))
            localStorage.setItem("EisDefault", JSON.stringify(this.editCard.isDefault))
            localStorage.setItem("EareaCode", JSON.stringify(this.editCard.areaCode))
            if (action.name == '编辑') {
                this.$router.push({ path: '/newAddress', query: { from: 'receive', type: 'update', collectOrsend: this.$route.query.role } })
            }else if (action.name == '删除') {
                let res = await deleteAddress(this.editCard.id)
                if(res.code == 200){
                    Toast.success('删除成功');
                    this.initData()
                }else{
                    Toast.fail('删除失败');
                }
            } else {
                // 克隆
                this.$router.push({ name: 'newAddress', query: { from: 'addressBook' ,type:'clone',collectOrsend:this.$route.query.role} })
            }
        },
        // 选中某一地址
        clickItem(item, index) {
            // 将数据持久化存储到localstorage
            if (this.$route.query.role == '1') {
                localStorage.setItem("Sid", JSON.stringify(item.id))
                localStorage.setItem("Saddress", JSON.stringify(item.address))
                localStorage.setItem("Stel", JSON.stringify(item.tel))
                localStorage.setItem("Sname", JSON.stringify(item.name))
                localStorage.setItem("Scity", JSON.stringify(item.city))
                localStorage.setItem("SareaCode", JSON.stringify(item.areaCode))
            } else {
                localStorage.setItem("Cid", JSON.stringify(item.id))
                localStorage.setItem("Caddress", JSON.stringify(item.address))
                localStorage.setItem("Ctel", JSON.stringify(item.tel))
                localStorage.setItem("Cname", JSON.stringify(item.name))
                localStorage.setItem("Ccity", JSON.stringify(item.city))
                localStorage.setItem("CareaCode", JSON.stringify(item.areaCode))
            }


            this.$router.push({
                name: 'order',
            })
        }
    }
}
</script>

<style lang="less" scoped>
.wrap {
    background: var(--wrap);
    height: 100vh
}
</style>