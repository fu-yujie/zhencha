/*let base='http://devlfybcardjh.zhiscity.com'
let devt='http://testpassport.zhiscity.com/'
let devt1='http://testwebapi.zhiscity.com';
let devt2='http://testlfybwx.zhiscity.com/Basic/Special/Index'
let devt3='http://testlfybwx.zhiscity.com/Assets/Static/cjwt/cjwt_detail_list_s/cjwt_article_list_sbkjh.html'*/



let base='http://qalfybcardjh.zhiscity.com'
let devt='http://qapassport.zhiscity.com/'
let devt1='http://qawebapi.zhiscity.com'
let devt2='http://qalfybwx.zhiscity.com/Basic/Special/Index'
let devt3='http://qalfybwx.zhiscity.com/Assets/Static/cjwt/cjwt_detail_list_s/cjwt_article_list_sbkjh.html'

//正式环境
/*let base='https://lfybcardjh.zhiscity.com'
let devt='https://passport.zhiscity.com/'
let devt1='https://webapi.zhiscity.com';
let devt2='https://lfybwx.zhiscity.com/Basic/Special/Index';
let devt3='https://lfybwx.zhiscity.com/Assets/Static/cjwt/cjwt_detail_list_s/cjwt_article_list_sbkjh.html'*/


export default {
    //点击立即激活
    activation:`${base}/sincardactive/fire`,
    getHistoryList:`${base}/sincardactive/list`,//历史激活记录
    getHistoryDetail:`${base}/sincardactive/detail`,//历史激活记录详情
getCardInfo:`${base}/sincard/info`,
    getPassPortUrl:`${devt}`,
    backHome:`${devt2}`,
    cjwt:`${devt3}`,
    getConfig:`${base}/sincardactive/config`,
    getinfoCode:`${base}/message/sendsmsforuservalidation`,
    checkCode:`${base}/message/validationsms`,
    cardBind:`${base}/sincard/bind`,
    getValidation:`${base}/validation/cashaccount`
}
