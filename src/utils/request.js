// 对axios的二次封装
import axios from "axios";


// 引入store/User，获取state中的token
import userToken from "@/store/user"

// axios对象的方法create，创建一个axios实例
const requests = axios.create({
  // 基础路径，发请求是，路径中会带有api
  baseURL : "/api",
  // 超时的时间
  timeout:5000,
})

// 请求拦截器
requests.interceptors.request.use((config)=>{
  // config:配置对象，里面有一个属性很重要，headers请求头
  // 进度条开始


  // 在请求头中携带token
  if(userToken.state.token){
    config.headers.token = userToken.state.token
  }


  return config
})

// 响应拦截器
requests.interceptors.response.use((res)=>{
  // 响应成功的回调
  // 进度条结束
  return res.data
},(err)=>{
  // 响应失败的回调
  return Promise.reject(new Error("faile"))
})

// 对外暴露
export default requests