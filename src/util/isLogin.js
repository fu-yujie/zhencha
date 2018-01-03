import Vue from 'vue';
import links from '../api/links.js'
const utils = {
	vueRequest(quest,jwt){
		Vue.http({
			method : quest.method || 'GET',
			url : quest.url,
//			headers : quest.headers || {
//				'Content-Type':'application/json;charset=utf-8',
//			},
			headers : {
				//'Content-Type':'application/json;charset=utf-8',
				//'mso' : jwt || ''
				'PlatType': '3'
			},
			//emulateHTTP : true,
			//emulateJSON:true,
			//credentials : true,
			body : quest.body || '',
			params: quest.params || '',
		}).then(res => {
			if(res.body.Code == 0){
				quest.cb(res)
			}else if(res.body.Code == 1000){
				quest.err(res)
			}else if(res.body.Code == 1001){
				window.location = res.body.result.jumpUrl.splice('?')[0] + window.location.href
			}else{
				quest.err(res)
			}
		}).catch(err => {
			quest.err(err)
		})
	},
	//检测登录
	checkLogin(res){
		if(res.status == 302){
        	window.location = links.getPassPortUrl + 'm/Account/Login?returnUrl=' + encodeURIComponent(window.location.href + '&back=true')
		}
	},
	//获取用户信息
    getUserData : function(obj){
		obj.$http.post(links.checkLogin,{
			"PassportId":0
		},{emulateJSON:true,headers:{'PlatType': '3'}})
		.then(res => {
			/*console.log(res)*/
			/*console.log(222)*/
			if(!res.body.SINCardId){
				window.location = links.getPassPortUrl + 'm/Account/BindingHealth?flag=1&Login=login&returnUrl=' + encodeURIComponent(window.location.href)
			}else{
				obj.$store.commit('changeUserData',res.body)
			}
		}, err => {
			this.checkLogin(err)
			/*console.log(111);*/
		})
	},
}

export default utils
