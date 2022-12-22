import requests from "../utils/request";

// 下订单
export const addOrder = (data) => requests({url:`/order/addOrder`,method:"post",data})

// 获取订单
export const getOrders = () => requests({url:`/order/getAllOrders`,method:"get"})
