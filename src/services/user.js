import request from 'utils/request'
// don't allow state modifications outside actions
const getUserInfo = () => {
  return request({
    url: '/hulai/v1/user/get',
    method: 'get'
  })
}
const getWxAuth = () => {
  return request({
    url: '/hulai/v1/oauth/login',
    params: {
      redirectUri: `http://${encodeURIComponent(location.href)}`
    },
    method: 'get'
  })
}
export {
  getUserInfo,
  getWxAuth
}
