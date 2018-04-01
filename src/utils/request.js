import axios from 'axios'
import "babel-polyfill";
/**
 * @param options
 * options {
 *  url: 请求url
 *  method： 请求类型
 *  params: 请求参数
 * }
 */
const requestErr = (error) => {
  if (error && (error.code || error.status) && (error.msg || error.message || error.statusText)) {
    return {
      success: false,
      code: parseInt(error.code || error.status),
      msg: error.msg || error.message || error.statusText
    }
  } else {
    return { success: false, code: -1, msg: error && (error.msg || error.message) ? (error.msg || error.message) : JSON.stringify(error) }
  }
}
const requestSuccess = (response) => {
  if (!response) {
    return requestErr({ code: -1, msg: '未知错误' })
  }
  if (!response.success) {
    return requestErr({ msg: response.msg, code: response.code })
  }
  return {
    success: true,
    data: response.data
  }
}
export default async (options = {}) => {
  debugger
  options.url = `hulai${options.url}`
  try {
    const { data } = await axios({
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json'
      },
      ...options
    })
    return requestSuccess(data)
  } catch (e) {
    return requestErr(e.response || e)
  }
}
