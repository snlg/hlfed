import UAParser from 'ua-parser-js'

let userAgent = UAParser(navigator.userAgent)
userAgent.device.isMobile = ((/mobile/i).test(navigator.userAgent) || (/iphone/i).test(navigator.userAgent) || (/android/i).test(navigator.userAgent))
userAgent.device.isIOS = (/iPad|iPhone|iPod/).test(navigator.userAgent)
userAgent.browser.isWechatWebview = (/MicroMessenger/i).test(navigator.userAgent)
userAgent.browser.isQQWebview = (/QQ/i).test(navigator.userAgent) && !(/MicroMessenger/i).test(navigator.userAgent)
userAgent.browser.isAlipayWebview = (/AlipayClient/i).test(navigator.userAgent)
userAgent.browser.isSNWebview = (/SNYifubao/i).test(navigator.userAgent)

export default userAgent
