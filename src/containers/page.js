import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import assign from 'lodash/assign'
import { router } from 'utils'
class IndexContainer extends Component {
  componentWillMount () {
    // Style.use()
  }
  render () {
    return (
      <div>
        <div>
          首页
       </div>
      </div>
    )
  }
}

export default withRouter(IndexContainer)