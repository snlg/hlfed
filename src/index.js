import React from 'react'
import ReactDom from 'react-dom'
import AppContainer from 'containers/app'
import userAgent from 'utils/userAgent'
import { Router } from 'react-router-dom'
import { router } from 'utils'
import { Provider } from 'mobx-react'
import stores from './store'
import CONSTANTS from 'constants'
import { getUserInfo, getWxAuth } from 'services/user'
import { enableLogging } from 'mobx-logger'
enableLogging()
const render = async (Component) => {
  function renderPage () {
    ReactDom.render(
      <Provider store={stores}>
        <Router history={router}>
          <Component />
        </Router>
      </Provider>,
      document.getElementById('app'),
      () => {
        getOrder()
      }
    )
  }
  if (userAgent.browser.isWechatWebview && window.__wxjs_environment !== CONSTANTS.MINIPROGRAM) {
    // 微信环境并且不是小程序环境
    async function login() {
      // 暂停直到获取到返回数据
      let data = await getUserInfo()
      if (data.success) {
        this.props.store.getUserInfo(userInfo)
        renderPage()
      } else {
        if (data.code === CONSTANTS.USER_LOGIN_STATUS_OUT) {
          // 登录失效
          let data = await getWxAuth()
        }
      }
    }
    login()
  }else {
    ReactDom.render(
      <div>请在微信中打开</div>,
      document.getElementById('app'),
      () => {}
    )
  }
}
const getOrder = () => {
    clearInterval(window.__timer)
    window.__timer = setInterval(window.__orderFunc, 30000)
}
// window.__orderFunc = () => {
//   alert(1)
// }
if (module.hot) {
    module.hot.accept()
}
render(AppContainer)
