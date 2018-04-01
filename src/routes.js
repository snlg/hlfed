import IndexContainer from 'containers/page'
import UserContainer from 'containers/user'
import UserLoginContainer from 'containers/user/login'
import UserMobxContainer from 'containers/user/mobx'

export default [
  {
    title: '首页',
    path: '/',
    component: IndexContainer
  },
  {
    title: '用户中心',
    path: '/user',
    component: UserContainer
  },
  {
    title: '用户登陆',
    path: '/user/login',
    component: UserLoginContainer
  },
  {
    title: 'mobx测试',
    path: '/user/mobx',
    component: UserMobxContainer
  }
]
