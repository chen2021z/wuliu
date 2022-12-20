// import {reqCode,reqRegister,reqLogin,reqUserInfo,reqLogout} from "@/api"
import { getToken ,setToken,removeToken} from "@/utils/auth"

const state = {
  // token从本地获取，如果没有则为null
  token:getToken(),
  userInfo:{}
}
const mutations = {

  GETTOKEN(state,token){
    state.token = token
  },
  GETUSERINFO(state,data){
    state.userInfo = data
  },
  CLEAR(state){
    // 清除state信息  
    state.token = '',
    state.userInfo = {}
    // 清除本地信息
    removeToken()
  }
}
const actions = {
  // 发送注册请求
  async postRegister({commit},data){
    let result = await reqRegister(data)
    if(result.code == 200){
      return "ok"
    }else{
      return Promise.reject(new Error("faile"))
    }
  },
  // 登录请求
  async postLogin({commit},data){
    let result =  await reqLogin(data)
    if(result.code == 200){
      // 储存服务器下发的token,并存储在localstorage
      setToken(result.data.token)
      commit("GETTOKEN",result.data.token)
      // 持久化存储token
      return "ok"
    }else{
      return Promise.reject(new Error("faile"))
    }
  },
  // 通过token返回用户信息
  async getUserInfo({commit}){
    // let result = await reqUserInfo()
    if (result.code == 200) {
      commit("GETUSERINFO",result.data)
      return 'ok'
    }else{
      return Promise.reject(new Error("faile"))
    }
  },
  //退出登录
  async userLogout({commit}) {
    //只是向服务器发起一次请求，通知服务器清除token
    let result = await reqLogout();
    //action里面不能操作state，提交mutation修改state
    if(result.code==200){
      commit("CLEAR");
      return 'ok';
    }else{
      return Promise.reject(new Error('faile'));
    }
  },
  
}


export default {
  namespaced:true,
  state,
  mutations,
  actions,
}