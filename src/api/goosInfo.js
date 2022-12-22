import requests from "../utils/request";

export const getGoodsNames = () => requests({url:`/cargo/getGoodsNames`,method:"get"})

export const getGoodsPack = () => requests({url:`/cargo/getGoodsPack`,method:"get"})

export const getGoodsType = () => requests({url:`/cargo/getSendGoodsType`,method:"get"})

export const getGoodsReturnSlip = () => requests({url:`/cargo/getReturnSlip`,method:"get"})