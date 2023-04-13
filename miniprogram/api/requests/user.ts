import { wxRequest } from '../index';

export const updateUserInfoApi = (userInfo: UserInfo) => {
    var currentUser = wx.getStorageSync("currentUser")
    wxRequest({
        url: `/api/v1/users/${currentUser.id}`,
        data: { 
          avatar_url: userInfo.avatarUrl,
          gender: userInfo.gender,
          nickname: userInfo.nickName,
        },
        method: 'PUT',
        success (res) {
          wx.setStorageSync("currentUser", res.data.data.current_user)
        },
        fail (res) {
          console.log('登录失败！' + res.errMsg)
        }
      })
}