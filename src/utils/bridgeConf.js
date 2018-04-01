import { url } from 'utils'
import userAgent from 'utils/userAgent'
import request from 'utils/request'

const wxConfig = (data, resolve, reject) => {
  window.wx.config({
    debug: false,
    appId: data.appId,
    timestamp: data.timestamp,
    nonceStr: data.nonceStr,
    signature: data.signature,
    jsApiList: [
      'onMenuShareTimeline',
      'onMenuShareAppMessage',
      'onMenuShareQQ',
      'chooseImage',
      'previewImage',
      'getNetworkType',
      'getLocation',
      'hideAllNonBaseMenuItem',
      'showAllNonBaseMenuItem',
      'scanQRCode',
      'chooseWXPay'
    ]
  })
  window.wx.ready(() => {
    resolve(window.wx)
  })
  window.wx.error((error) => {
    reject(error)
    Toast.show(JSON.stringify(error))
  })
}


const readyWechat = async (reConfig) => {
  const authObj = await request({
    url: '/v1/oauth/codeUrl',
    params: {
    },
    method: 'get'
  })
  console.warn(authObj)
  // return new Promise((resolve, reject) => {
  //   fetch(`${url('http://api.damaozi.me/v1/oauth/codeUrl')}&data=${encodeURIComponent(JSON.stringify({ forceFlush: false, url: location.href }))}`, {
  //     credentials: 'same-origin'
  //   }).then((response) => {
  //     debugger
  //     fetch(`${url('http://api.damaozi.me/v1/oauth/codeUrl')}&data=${encodeURIComponent(JSON.stringify({ forceFlush: false, url: location.href }))}`, {
  //       credentials: 'same-origin'
  //     }).then((response) => {
  //       if (response && response.status >= 400) {
  //         return reject(response.statusText)
  //       }
  //       return response.json()
  //     }).then((response) => {
  //       if (!response.success) {
  //         return reject(response.message || response.msg)
  //       }
  //       if (window.wx) {
  //         wxConfig(response.data, resolve, reject)
  //       } else {
  //         let script = document.createElement('script')
  //         script.src = '//res.wx.qq.com/open/js/jweixin-1.2.0.js'
  //         script.onload = () => {
  //           wxConfig(response.data, resolve, reject)
  //         }
  //         document.body.appendChild(script)
  //       }
  //     }).catch((error) => {
  //       reject(JSON.stringify(error))
  //     })
  //   })
  // })
}

export {
  readyWechat
}
