import request from 'utils/request'
export const getCityCode = (code) => {
  return request({
    url: '/foxThirdActs/taobaoke/getFavoritesItemInfo',
    params: {
      code
    },
    method: 'get'
  })
}
