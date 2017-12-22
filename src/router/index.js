import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'//首页路由
import alreadyBind from '@/view/alreadyBind'
import noBind from '@/view/noBind'
import selectPaperwork from '@/view/selectPaperwork'
import uploadIdcard from '@/view/uploadIdcard'

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
      },
      {//选择证件类型
          path: '/selectPaperwork',
          name: 'selectPaperwork',
          component: selectPaperwork
      },
      {//上传身份证
          path: '/uploadIdcard',
          name: 'uploadIdcard',
          component: uploadIdcard
      }
  ]
})
