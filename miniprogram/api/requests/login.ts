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
        console.log(666)
        wx.setStorageSync("currentUser", res.data.data.currentUser)
        wx.setStorageSync("sessionId", res.header["Set-Cookie"])
        if (res.data.data.currentUser.nickname) {
          wx.navigateTo({url: '/pages/login/index'})
        }
      },
      fail (res) {
        console.log('登录失败！' + res.errMsg)
      }
    })
}
