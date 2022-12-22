import Vue from "vue";
import VueRouter from "vue-router"
import routes from "@/router/routes"
// 引入store
import store from "@/store"
Vue.use(VueRouter)

// 重写push & replace方法
// 先备份一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 重写push
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => { }, () => { })
  }
}
// 重写replace
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(this, location, () => { }, () => { })
  }
}





let router = new VueRouter({
  routes,
  // 滚动行为
  // scrollBehavior(to, from, savedPosition) {
  //   return { y: 0 }
  // }
})


// 全局守卫，前置守卫
router.beforeEach(async (to, from, next) => {
  //to:获取到要跳转到的路由信息
  //from：获取到从哪个路由跳转过来来的信息
  //next: next() 放行  next(path) 放行 

  // 先获取仓库中的token，有就可以确定用户已经登录
  let token = store.state.user.token
  // 确定用户有登录信息而不是一个空数组
  let name = store.state.user.userInfo.nickName
  // next('/login')

  if (token) {
    if (to.path == "/login" || to.path == "/register") {
      next('/')
    } else {
      if (name) {
        next()
      } else {
        try {
          await store.dispatch("user/getUserInfo")
          next()
        } catch (error) {
          // 用户的token过期,走退出登录操作，清除用户信息和token
          await store.dispatch("user/userLogout")
          next("/login")
        }
      }
      next()
    }
  } else {
    // 没有token不允许进入下单，网点信息，个人中心，地址簿
    if (to.path == "/order" || to.path == "/network" || to.path == "/editInfo" || to.path == "/addressBook"){
      next('/login')
    }
    next()
  }






  // console.log(token);
  // if(token){
  //   next('/home')
  // }else{
  //   next('/home')
  // }
  // next()




  // 用户已经登录
  // if (token) {

  // next()

  // // 用户登录以后不允许跳转login页面，直接跳转home
  // if (to.path == "/login" || to.path == "/register") {
  //   next("/")
  // } else {
  //   // 用户已经登录，访问的是非登录注册页面
  //   // 此时用户可能没有用户信息,例如用户登录后初次跳转首页，或者跳转其他路由进行刷新
  //   if (name) {
  //     // 此时有用户信息，可正常跳转
  //     next()
  //   } else {
  //     // 此时用户没有userInfo，顶部没有信息展示，先派发请求，获取信息后在跳转
  //     // 发送请求，请求头中携带token，返回用户信息
  //     try {
  //       await store.dispatch("User/getUserInfo")
  //       next()
  //     } catch (error) {
  //       // 用户的token过期,走退出登录操作，清除用户信息和token
  //       await store.dispatch("User/userLogout")
  //       next("/login")
  //     }
  //   }
  //   next()
  // }
  // } else {
  // 无token，游客登录
  // 不允许用户前往支付相关的页面，以及个人中心，直接携带参数前往login

  // next("/login")


  // 其他情况你该去哪去哪
  // }


})


export default router