import IndexContainer from 'containers/page'
import UserContainer from 'containers/user'
import UserLoginContainer from 'containers/user/login'
import TestContainer from 'containers/test'

export default [
  {
    title: '首页',
    path: '/test',
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
    title: 'test',
    path: '/',
    component: TestContainer
  }
]
