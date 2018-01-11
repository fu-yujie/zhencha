// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import $ from 'n-zepto'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import vueutil from './util/vueutil.js'
import store from './store'
import 'mint-ui/lib/style.css'
/*import VueWechatTitle from 'vue-wechat-title'*/


//阻止vue在启动时生成生产提示
Vue.config.productionTip = false
Vue.use(VueResource);
Vue.use(MintUI);
Vue.use(vueutil);
/*Vue.use(VueWechatTitle)*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
Vue.directive('lfocus', function(el, pra, a) {

    let oInput = el.querySelector('input');
    oInput.onfocus = function() {
        //创建focus的事件
    };

    oInput.onblur = function() {
        //同时创建blur事件
   alert(111)
    };
})
