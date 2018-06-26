import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserTasks from '@/components/user-tasks';
import Main from '@/components/common/main-tab';
import LoanApply from '@/components/loan-apply';
import UserCenter from '@/components/user-center';


Vue.use(Router)
const router =  new Router({
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      component: Main,
      children: [
        {
          path: '',
          redirect: 'loanapply'
        },
        // 申请借款
        {
          path: 'loanapply',
          component: LoanApply,
          name: 'loanapply'
        },
        // 个人中心
        {
          path: 'usercenter',
          component: UserCenter,
          name: 'usercenter'
        },
        // 我的申请
        {
          path: 'usertasks',
          component: UserTasks,
          name: 'usertasks'
        }
      ]
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
});
console.log(router)
export default router;

router.beforeEach((to, from, next) => {// 路由跳转前
 /* let isLogin = store.state.isLogin;
  let isHome = to.path.indexOf('/login') != -1;
  let isRegist = to.path.indexOf('/findpassword') != -1;
  let isIndex = (to.path.lastIndexOf('/') == to.path.length) || (to.path.indexOf('/index') != -1);
  if (!isLogin && !isHome && !isIndex && !isRegist) {
    localStorage.clear();
    next('/login');
  } else {
    next();
  }*/
  next();
});

