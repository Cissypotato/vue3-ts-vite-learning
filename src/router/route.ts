//对外暴露的常量路由（静态路由）

export const constantRoute = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: {
      title: '登录页',
      isShow: false,
      icon: 'Setting',
    },
  },
  {
    path: '/',
    component: () => import('@/views/layout/index.vue'),
    name: 'layout',
    redirect: '/home',
    meta: {
      title: 'layout',
      isShow: true,
      icon: 'Setting',
    },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          isShow: true,
          icon: 'HomeFilled',
        },
      },
    ],
  },
  {
    path: '/screen',
    component: () => import('@/views/screen/index.vue'),
    name: 'Screen',
    meta: {
      title: '数据大屏',
      isShow: true,
      icon: 'Platform',
    },
  },
  {
    path: '/acl',
    component: () => import('@/views/layout/index.vue'),
    name: 'Acl',
    meta: {
      title: '权限管理',
      isShow: true,
      icon: 'Lock',
    },
    children: [
      {
        path: '/acl/user',
        component: () => import('@/views/acl/user/index.vue'),
        name: 'Acl',
        meta: {
          title: '用户管理',
          isShow: true,
          icon: 'HomeFilled',
        },
      },
      {
        path: '/acl/role',
        component: () => import('@/views/acl/role/index.vue'),
        name: 'Role',
        meta: {
          title: '角色管理',
          isShow: true,
          icon: 'HomeFilled',
        },
      },
      {
        path: '/acl/permission',
        component: () => import('@/views/acl/permission/index.vue'),
        name: 'Permission',
        meta: {
          title: '菜单管理',
          isShow: true,
          icon: 'HomeFilled',
        },
      },
    ],
  },
  {
    path: '/product',
    component: () => import('@/views/layout/index.vue'),
    name: 'Product',
    meta: {
      title: '商品管理',
      isShow: true,
      icon: 'Goods',
    },
    children: [
      {
        path: '/product/user',
        component: () => import('@/views/product/trademark/index.vue'),
        name: 'TradeMark',
        meta: {
          title: '品牌管理',
          isShow: true,
          icon: 'ShoppingCartFull',
        },
      },
      {
        path: '/product/attr',
        component: () => import('@/views/product/attr/index.vue'),
        name: 'Attr',
        meta: {
          title: '属性管理',
          isShow: true,
          icon: 'ChromeFilled',
        },
      },
      {
        path: '/product/spu',
        component: () => import('@/views/product/spu/index.vue'),
        name: 'Spu',
        meta: {
          title: 'SPU管理',
          isShow: true,
          icon: 'Calendar',
        },
      },
      {
        path: '/product/sku',
        component: () => import('@/views/product/sku/index.vue'),
        name: 'Sku',
        meta: {
          title: 'SKU管理',
          isShow: true,
          icon: 'Orange',
        },
      },
    ],
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404页',
      isShow: false,
      icon: 'Setting',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '任意页面',
      isShow: false,
      icon: 'Setting',
    },
  },
]
