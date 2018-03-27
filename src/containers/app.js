import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import LoadingComponent from 'components/common/loading'
import BundleComponent from 'components/common/bundle'
// import { handleResetErrorMessage } from 'actions/errorMessage'
import { setTitle } from 'utils/bridgeApi'
import { parseQuery } from 'utils'
import assign from 'lodash/assign'
import ROUTES from '../routes'
import IndexContainer from 'containers/page'
import TestContainer from 'containers/test'
import UserContainer from 'containers/user'

const createComponent = (component, title, path) => () => (
  <BundleComponent load={component}>
    {
      (Component_) => {
        setTitle(title)
        // window.__orderFunc()
        // window.Store.dispatch(handleResetErrorMessage())
        return Component_ ? <Component_ /> : <LoadingComponent />
      }
    }
  </BundleComponent>
)

export default class AppContainer extends Component {
  render() {
    return <div>
      <Route render={(props) => {
        return <Switch>
          {ROUTES.map((item, i) => {
            return <Route key={i} {...props} path={item.path} {...assign({ exact: true }, item.option)} component={createComponent(item.component, item.title)} />
          })}
        </Switch>
      }} />
    </div>
  }
}
