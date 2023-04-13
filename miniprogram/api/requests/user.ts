import { domain, wxRequest } from '../index';

export const updateUserInfoApi = (userInfo: UserInfo) => {
    console.log(userInfo, "userInfo");
    var currentUser = wx.getStorageSync("currentUser")
    console.log("currentUserss", wx.getStorageSync("currentUser"))
    wxRequest({
        url: `${domain}/api/v1/users/${currentUser.id}`,
        data: { 
          avatar_url: userInfo.avatarUrl,
          gender: userInfo.gender,
          nickname: userInfo.nickName,
        },
        method: 'PUT',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (res) {
          console.log('' + res.errMsg)
          wx.setStorageSync("currentUser", res.data.data.current_user)
        },
        fail (res) {
          console.log('登录失败！' + res.errMsg)
        }
      })
}