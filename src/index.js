import React from 'react'
import ReactDom from 'react-dom'
import AppContainer from 'containers/app'
import userAgent from 'utils/userAgent'
import { Router } from 'react-router-dom'
import { router } from 'utils'
import { Provider } from 'mobx-react'
import stores from './store'
import CONSTANTS from 'constants'
import { readyWechat } from 'utils/bridgeConf'

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
  if (!userAgent.browser.isWechatWebview && window.__wxjs_environment !== CONSTANTS.MINIPROGRAM) {
    // 微信环境并且不是小程序环境
    await readyWechat()
    renderPage()
    // readyWechat(true).then(() => {
    //   renderPage()
    // })
  }else {
    ReactDom.render(
      <div>请在微信中打开</div>,
      document.getElementById('app'),
      () => { }
    )
  }
}
const getOrder = () => {
  // if (!userAgent.browser.isXiaoDianWebview && window.__wxjs_environment !== CONSTANTS.MINIPROGRAM) {
  //   window.Store.dispatch(actions.commonFetchGetOrder())
  //   clearInterval(window.__timer)
  //   window.__timer = setInterval(window.__orderFunc, 30000)
  // }
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
