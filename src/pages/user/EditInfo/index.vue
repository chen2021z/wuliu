<template>
    <div>
        <Header><van-icon name="arrow-left" @click="$router.push('/user')" /> <span>修改个人信息</span></Header>

        <van-uploader :after-read="afterRead" v-model="fileList" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            fileList: [
                { url: 'https://img01.yzcdn.cn/vant/leaf.jpg' },
            ],
        }
    },
    methods: {
        afterRead(file) {
            // 此时可以自行将文件上传至服务器
            console.log(file);
        },
    },
}
</script>

<style lang="less" scoped>

</style>