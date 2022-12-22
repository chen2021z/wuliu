import requests from "../utils/request";

// 获取个人所有地址
export const getAddressList = () => requests({url:`/address/getAllAddress`,method:"get"})

// 更新地址簿
export const updateAddress = (data) => requests({url:`/address/updateAddress`,method:"put",data})

// 新增地址
export const addAddress = (data) => requests({url:'address/addAddress',method:'post',data})

// 删除地址
export const deleteAddress = (id)=> requests({url:`/address/delAddress/${id}`,method:'delete'})