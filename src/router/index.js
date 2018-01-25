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
import modify from '@/view/modify'

Vue.use(Router)

export default new Router({
  routes: [
    /*{ path: '*', component: NotFoundComponent },//404页面*/
    {//首页
          path: '/',
          name: 'home',
          component: home,
        meta:{title:'居民社保卡激活'}
      },
      {//激活成功已绑卡
          path: '/alreadyBind',
          name: 'alreadyBind',
          component: alreadyBind,
          meta:{title:'居民社保卡激活'}
      },
      {//激活成功未绑卡
          path: '/noBind',
          name: 'noBind',
          component: noBind,
meta:{title:'居民社保卡激活'}
      },
      {//选择证件类型
          path: '/selectPaperwork',
          name: 'selectPaperwork',
          meta:{title:'居民社保卡激活'},
          component: selectPaperwork,

      },
      {//上传身份证
          path: '/uploadIdcard',
          name: 'uploadIdcard',
          component: uploadIdcard,
          meta:{title:'居民社保卡激活'}
      },
      {//激活申请提交成功
          path: '/activeSuccess',
          name: 'activeSuccess',
          component: activeSuccess,
          meta:{title:'居民社保卡激活'}
      },
      {//审核中
          path: '/underReview',
          name: 'underReview',
          component: underReview,
          meta:{title:'居民社保卡激活'}
      },
      {//审核未通过
          path: '/notPass',
          name: 'notPass',
          component: notPass,
          meta:{title:'居民社保卡激活'}
      },
      {//激活成功
          path: '/success/:ID',
          name: 'success',
          component: success,
          meta:{title:'居民社保卡激活'}
      },
      {//激活失败
          path: '/fail',
          name: 'fail',
          component: fail,
          meta:{title:'居民社保卡激活'}
      },
      {//上传户口本
          path: '/uploadAccount',
          name: 'uploadAccount',
          component: uploadAccount,
          meta:{title:'居民社保卡激活'}
      },
      {//上传户口本
          path: '/modify',
          name: 'modify',
          component: modify,
          meta:{title:'社保卡金融账户修改'}
      }
  ]
})
