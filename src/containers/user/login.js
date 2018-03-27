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
       test3
      </div>
    )
  }
}

export default withRouter(IndexContainer)