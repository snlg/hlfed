import React from 'react'
import ReactDom from 'react-dom'
// import * as redux from 'redux'
import AppContainer from 'containers/app'
import userAgent from 'utils/userAgent'
import { Router } from 'react-router-dom'
import { router } from 'utils'


const render = (Component) => {
  function renderPage () {
    ReactDom.render(
      // <Provider store={store}>
        
      // </Provider>,
      <Router history={router}>
        <Component />
      </Router>,
      document.getElementById('app'),
      () => {
        getOrder()
      }
    )
  }
  renderPage()
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
