import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

// state 仓库存储数据的地方
// mutation 修改state的唯一手段
// action 处理action，可以书写自己的业务逻辑，和处理异步
// getter 相当于计算属性
import Tabbar from "./Tabbar";
import user from "./user"
import getters from './getters'

// 对外暴露一个Store实例
export default new Vuex.Store({
  modules:{
    // 都添加了命名空间，名字为本身
    Tabbar,
    user
  },
  getters
})