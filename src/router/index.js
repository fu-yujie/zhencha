import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'//首页路由
import alreadyBind from '@/view/alreadyBind'//已绑卡
import noBind from '@/view/noBind'//未绑卡
import selectPaperwork from '@/view/selectPaperwork'//选择证件类型
import uploadIdcard from '@/view/uploadIdcard'//上传身份证
import activeSuccess from '@/view/activeSuccess'//激活申请提交成功
import underReview from '@/view/underReview'//审核中
import notPass from '@/view/notPass'//审核未通过
import success from '@/view/success'//激活成功
import fail from '@/view/fail'//激活失败
import uploadAccount from '@/view/uploadAccount'

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
      },
      {//激活申请提交成功
          path: '/activeSuccess',
          name: 'activeSuccess',
          component: activeSuccess
      },
      {//审核中
          path: '/underReview',
          name: 'underReview',
          component: underReview
      },
      {//审核未通过
          path: '/notPass',
          name: 'notPass',
          component: notPass
      },
      {//激活成功
          path: '/success/:ID',
          name: 'success',
          component: success
      },
      {//激活失败
          path: '/fail',
          name: 'fail',
          component: fail
      },
      {//上传户口本
          path: '/uploadAccount',
          name: 'uploadAccount',
          component: uploadAccount
      }
  ]
})
