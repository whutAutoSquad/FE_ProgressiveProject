import IContainer from '@/containers'

// 导出路由
export const routes = [
  {
    path: '/',
    name: 'IContainer',
    component: IContainer,
    redirect: '/event',
    children: [
      {
        path: '/event',
        name: '事件',
        component: resolve => require(['@/views/event'], resolve)
      },{
        path: '/plan',
        name: '计划',
        component: resolve => require(['@/views/plan'], resolve),
      },{
        path: '/geo',
        name: '地图',
        component: resolve => require(['@/views/geo'], resolve),
      },{
        path: '/setting',
        name: '设置',
        component: resolve => require(['@/views/setting'], resolve),
      }
    ]
  }
]