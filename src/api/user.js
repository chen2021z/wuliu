import requests from "../utils/request";

// 注册用户 /api/user/passport/register post
export const reqRegister = (data) => requests({url:`/user/passport/register`,method:"post",data})

// 登录  /api/user/passport/login  post
export const reqLogin = (data) => requests({url:'user/passport/login',method:'post',data})

//获取用户信息【需要带着用户的token向服务器要用户信息】
//URL:/api/user/passport/auth/getUserInfo  method:get 
export const reqUserInfo = ()=>requests({url:'/user/passport/auth/getUserInfo',method:'get'});

//退出登录
//URL:/api/user/passport/logout  get
export const reqLogout = ()=> requests({url:'/user/passport/logout',method:'get'});