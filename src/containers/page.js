import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import assign from 'lodash/assign'
import { router } from 'utils'

class IndexContainer extends Component {
  componentWillMount () {
  }
  render () {
    return (
      <div>
       首页
      </div>
    )
  }
}

export default withRouter(IndexContainer)