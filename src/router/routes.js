import temp from '@/temp'
import IContainer from '@/containers'


// 导出路由
export const routes = [
  {
    path: '/',
    name: 'IContainer',
    component: IContainer,
    redirect: '/events',
    children: [
      {
        path: '/events',
        name: '事件',
        component: temp,
      },{
        path: '/plan',
        name: '计划',
        component: temp,
      },{
        path: '/setting',
        name: '设置',
        component: temp,
      }
    ]
  }
]