import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'//首页路由
import alreadyBind from '@/view/alreadyBind'
import noBind from '@/view/noBind'

Vue.use(Router)

export default new Router({
  routes: [
    /*{ path: '*', component: NotFoundComponent },//404页面*/
    {//首页
          path: '/',
          name: 'home',
          component: home
      },
      {//激活成功已绑卡
          path: '/alreadyBind',
          name: 'alreadyBind',
          component: alreadyBind
      },
      {//激活成功未绑卡
          path: '/noBind',
          name: 'noBind',
          component: noBind
      }
  ]
})
