import requests from "../utils/request";

// 获取网点信息
export const getNetList = (websiteCity) => requests({url:`/website/getAllWebsitesOfCity`,method:"get",params:{websiteCity}})