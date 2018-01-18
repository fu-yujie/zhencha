/*let base='http://devlfybcardjh.zhiscity.com'
let devt='http://testpassport.zhiscity.com/'
let devt1='http://testwebapi.zhiscity.com'*/

//正式环境
let base='https://lfybcardjh.zhiscity.com'
let devt='https://passport.zhiscity.com/'
let devt1='https://webapi.zhiscity.com'


export default {
    //点击立即激活
    activation:`${base}/sincardactive/fire`,
    getHistoryList:`${base}/sincardactive/list`,//历史激活记录
    getHistoryDetail:`${base}/sincardactive/detail`,//历史激活记录详情
getCardInfo:`${base}/sincard/info`,
    getPassPortUrl:`${devt}`,
    getConfig:`${base}/sincardactive/config`,
    getinfoCode:`${base}/message/sendsmsforuservalidation`,
    checkCode:`${base}/message/validationsms`,
    cardBind:`${base}/sincard/bind`,
    getValidation:`${base}/validation/cashaccount`
}
