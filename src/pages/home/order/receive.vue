<template>
    <div>
        <div class="wrap">
            <Header><van-icon name="arrow-left" @click="$router.push('/order')" /> <span>{{ role }}</span></Header>
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
import { Toast } from 'vant';
export default {
    data() {
        return {
            // 是发货人还是收件人
            role: '',
            // 绑定搜索框的值
            value: '',
            chosenAddressId: '1',
            list: [
                {
                    id: '1',
                    name: '张三',
                    tel: '13000000000',
                    address: '湖南省湘潭市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
                    isDefault: true,
                },
                {
                    id: '2',
                    name: '李四',
                    tel: '1310000000',
                    address: '江西省宜春市拱墅区莫干山路 50 号',
                }, {
                    id: '3',
                    name: '王五',
                    tel: '1310000000',
                    address: '广东省东莞市拱墅区莫干山路 50 号',
                }, {
                    id: '4',
                    name: '赵六',
                    tel: '1310000000',
                    address: '湖南省长沙市拱墅区莫干山路 50 号',
                }, {
                    id: '5',
                    name: '陈七',
                    tel: '1310000000',
                    address: '浙江省杭州市拱墅区莫干山路 50 号',
                },
            ],
            show: false,
            actions: [{ name: '编辑' }, { name: '删除' }, { name: '克隆' }],
        }
    },
    created() {
        this.getRole()
    },
    methods: {
        getRole() {
            // 根据角色不同，获取不同数据
            // console.log(this.$route.params.role);
            this.role = this.$route.params.role
        },
        onAdd() {
            this.$router.push('/newAddress')
            // Toast('新增地址');
        },
        onEdit(item, index) {
            this.show = true
            // Toast('编辑地址:' + index);
        },
        onCancel() {
            Toast('取消');
        },
        onSelectBtn(action, index) {
            // index 从0开始，依次为编辑、删除、克隆  action包含当前选项的name
            console.log(action, index);
        },
        // 选中某一地址
        clickItem(item, index) {
            // 将数据持久化存储到localstorage
            if (this.role == '发货人') {
                localStorage.setItem("Sid", JSON.stringify(item.id))
                localStorage.setItem("Saddress", JSON.stringify(item.address))
                localStorage.setItem("Stel", JSON.stringify(item.tel))
                localStorage.setItem("Sname", JSON.stringify(item.name))
            }else{
                localStorage.setItem("Cid", JSON.stringify(item.id))
                localStorage.setItem("Caddress", JSON.stringify(item.address))
                localStorage.setItem("Ctel", JSON.stringify(item.tel))
                localStorage.setItem("Cname", JSON.stringify(item.name))
            }


            this.$router.push({
                name: 'order',
                // params路由参数接收后刷新页面会丢失数据
                // params:{
                //     // 发货人1  收件人2
                //     sendOrCollect:1,
                //     id:item.id,
                //     address:item.address,
                //     tel:item.tel,
                //     name:item.name
                // }
            })
            // console.log(item,index);
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