import { domain, wxRequest } from '../index';

export const loginApi = (code: string) => {
  wx.request({
      url: `${domain}/api/v1/minps/login`,
      data: { code },
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(999999, res)
        wx.setStorageSync("currentUser", res.data.data.currentUser)
        wx.setStorageSync("sessionId", res.header["Set-Cookie"])
      },
      fail (res) {
        console.log('登录失败！' + res.errMsg)
      }
    })
}
