import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  // {
  //   path: '/login',
  //   component: () => import('@/views/login/index'),
  //   hidden: true
  // },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  // {
  //   path: '/tianhuisou/',
  //   component: Layout,
  //   redirect: '/tianhuisou/'
  // },
  {
    path: '/',
    component: Layout,
    meta: { title: '主页' },
    redirect: '/home',
    name: 'Home',
    children: [{
      path: '/home',
      component: () => import('@/views/nested/menu2/index')
    }]
  },
  // {
  //   path: '/home',
  //   component: Layout,
  //   meta: { title: '主页' },
  //   children: [
  //     {
  //       path: '/',
  //       component: () => import('@/views/nested/menu2/index')
  //     }
  //   ]
  // },
  {
    path: '/typeinfo',
    component: Layout,
    redirect: '/typeinfo/basicgeo',
    name: 'typeinfo',
    meta: {
      title: '按信息类型',
      icon: 'earth'
    },
    children: [
      {
        path: 'basicgeo',
        component: () => import('@/views/nested/menu2/index'), // Parent router-view
        name: '5efdaa3b2f4c072e1060006b',
        meta: { title: '基础地理' }
      },
      {
        path: 'basiccoverage',
        component: () => import('@/views/nested/menu2/index'),
        name: '5efdaa3b2f4c072e1060006c',
        meta: { title: '基础覆被' }
      },
      {
        path: 'remotesense',
        component: () => import('@/views/nested/menu2/index'),
        name: '5efdaa3b2f4c072e1060006d',
        meta: { title: '遥感遥测' }
      },
      {
        path: 'natural',
        component: () => import('@/views/nested/menu2/index'),
        name: '5efdaa3b2f4c072e1060006e',
        meta: { title: '自然资源' }
      },
      {
        path: 'environment',
        component: () => import('@/views/nested/menu2/index'),
        name: '5efdaa3b2f4c072e1060006f',
        meta: { title: '环境生态' }
      },
      {
        path: 'disaster',
        component: () => import('@/views/nested/menu2/index'),
        name: '5efdaa3b2f4c072e10600070',
        meta: { title: '灾害灾难' }
      },
      {
        path: 'socioeconomic',
        component: () => import('@/views/nested/menu2/index'),
        name: '5efdaa3b2f4c072e10600071',
        meta: { title: '社会经济' }
      },
      {
        path: 'standard',
        component: () => import('@/views/nested/menu2/index'),
        name: '5efdaa3b2f4c072e10600072',
        meta: { title: '标准规范' }
      }
    ]
  },
  {
    path: '/level',
    component: Layout,
    redirect: '/level/industry',
    name: 'level',
    meta: {
      title: '按网站级别',
      icon: 'zhuanti'
    },
    children: [
      {
        path: 'industry',
        component: () => import('@/views/nested/menu2/index'), // Parent router-view
        name: '5efdaa3b2f4c072e10600066',
        meta: { title: '国家级行业中心' }
      },
      // {
      //   path: 'basicdb',
      //   component: () => import('@/views/nested/menu2/index'),
      //   name: '5efdaa3b2f4c072e10600067',
      //   meta: { title: '国家四大基础库' }
      // },
      {
        path: 'basicpf',
        component: () => import('@/views/nested/menu2/index'),
        name: '5efdaa3b2f4c072e10600068',
        meta: { title: '国家科技平台' }
      },
      {
        path: 'profession',
        component: () => import('@/views/nested/menu2/index'),
        name: '5efdaa3b2f4c072e10600069',
        meta: { title: '相关行业网站' }
      },
      {
        path: 'regioncenter',
        component: () => import('@/views/nested/menu2/index'),
        name: '5efdaa3b2f4c072e1060006a',
        meta: { title: '区域数据中心' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  base: '/tianhuisou/',
  // mode: 'history',
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
