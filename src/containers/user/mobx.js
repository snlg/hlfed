import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import assign from 'lodash/assign'
import { router } from 'utils'
import { observer, inject } from 'mobx-react'
@inject('store')
@observer

class IndexContainer extends Component {
  componentWillMount() {
  }
  render() {
    const { name } = this.props.store.UserInfoStore
    debugger
    return (
      <div>
        {name}
      </div>
    )
  }
}

export default withRouter(IndexContainer)