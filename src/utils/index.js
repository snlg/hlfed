import createHistory from 'history/createBrowserHistory'

const router = createHistory()


const url = (api) => {
  api += '?t=' + +new Date()
  return api
}

const unparams = (str) => {
  let params = {}
  str = str.split('&')
  for (let i = 0; i < str.length; i++) {
    let item = str[i].split('=')
    params[item[0]] = decodeURIComponent(item[1])
  }
  return params
}

export {
  router,
  unparams,
  url
}