import userAgent from 'utils/userAgent'

const setTitle = (title) => {
  document.title = title || 'hl'
  if (document.title && (userAgent.device.isIOS)) {
    hackSyncWechatTitle()
  }
}

const hackSyncWechatTitle = () => {
  var iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  iframe.src = '/favicon.ico'
  iframe.onload = () => {
    setTimeout(() => {
      document.body.removeChild(iframe)
    }, 10)
  }
  document.body.appendChild(iframe)
}

export {
  setTitle
}