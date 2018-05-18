import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import assign from 'lodash/assign'
import { router } from 'utils'
import Style from './page.less'
class IndexContainer extends Component {
  componentWillMount () {
    Style.use()
  }
  componentWillUnmount () {
    Style.Unuse()
  }
  render () {
    return (
      <div>
        <div className='warp'>
          首页
          <img src="https://placeimg.com/350/350/people/grayscale" alt="" />
          <div className='border'>
            <p>测试字体</p>
          </div>
          <div className='example'>
            <p>测试字体</p>
          </div>
       </div>
      </div>
    )
  }
}

export default withRouter(IndexContainer)