export default [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/pages/user/login'),
  },{
    name: 'register',
    path: '/register',
    component: () => import('@/pages/user/register'),
  },


  {
    path: '/home',
    name: 'home',
    component: () => import('@/pages/home/index'),
    meta: {
      showFooter: true
    }
  }, {
    path: '/track',
    name: 'track',
    component: () => import('@/pages/track/index'),
    meta: {
      showFooter: true
    }
  }, {
    name: 'user',
    path: '/user',
    component: () => import('@/pages/user/index'),
    meta: {
      showFooter: true
    }
  },
  {
    name: 'order',
    path: '/order',
    component: () => import('@/pages/home/order/index'),
  }, {
    name: 'receive',
    path: '/receive',
    component: () => import('@/pages/home/order/receive'),
  }, {
    name: 'newAddress',
    path: '/newAddress',
    component: () => import('@/pages/home/order/newAddress'),
  }, {
    name: 'network',
    path: '/network',
    component: () => import('@/pages/home/order/network'),
  }, {
    name: 'goodsInfo',
    path: '/goodsInfo',
    component: () => import('@/pages/home/order/goodsInfo'),
  }, {
    name: 'addValueService',
    path: '/addValueService',
    component: () => import('@/pages/home/order/addValueService'),
  }, {
    name: 'netPoint',
    path: '/netPoint',
    component: () => import('@/pages/home/netPoint/index'),
  }, {
    name: 'news',
    path: '/news',
    component: () => import('@/pages/home/news/index'),
  }, {
    name: 'addressBook',
    path: '/addressBook',
    component: () => import('@/pages/user/addressBook/index'),
  },




  {
    path: "*",
    redirect: "/home"
  }
]