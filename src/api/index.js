import axios from 'axios';
import config from './config'
import appConfigs from "../configs";
import util from "../util/util";
import Vue from "vue";

var qs = require('qs');
/*const headers={
    'PlatType': '3'
}*/
axios.defaults.headers.post['platType'] = '3';
axios.defaults.headers.get['platType'] = '3';
//axios.defaults.headers.post['ContentType'] = 'multipart/form-data';

//点击立即激活
export const activation=(data)=>{
   /* alert(1)*/
    var post = Vue.http({
        method : "POST",
        url : config.activation,
        headers : {
            'Content-Type':'application/x-www-form-urlencoded',
            'platType': '3'
        },
        body : createPostParams(data),
        /*timeout:240000*/
    })
    return post;

    //return axios.post(config.activation,createPostParams(data))
};
/*export const activation=(data)=>{
    return axios.post(config.activation,createPostParams(data))
}*/
//获取历史激活记录
export const getHistoryList=(data)=>{
    return axios.get(config.getHistoryList,{params:data})
}
//获取社保卡信息
export const getCardInfo=(data)=>{
    return axios.get(config.getCardInfo,{params:data})
}

//获取基础数据
export const getConfig=(data)=>{
    return axios.get(config.getConfig,data)
}
//历史激活记录详情
export const getHistoryDetail=(data)=>{
    return axios.get(config.getHistoryDetail,{params:data})
}
//发送验证码
export const getinfoCode=(data)=>{
    return axios.get(config.getinfoCode,{params:data})
}
//验证验证码
export const checkCode=(data)=>{
    return axios.get(config.checkCode,{params:data})
}
export const cardBind=(data)=>{
    return axios.post(config.cardBind,createPostParams(data))
}
export const getValidation=(data)=>{
    return axios.get(config.getValidation,{params:data})
}


function createPostParams(obj) {
    return qs.stringify(obj);
}


