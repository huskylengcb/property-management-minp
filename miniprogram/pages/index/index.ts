import { getAdvertsList } from '../../api/requests/advert';
import { updateUserInfoApi } from '../../api/requests/user';
// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    // motto: 'Hello World',
    // currentUser: wx.getStorageSync("currentUser"),
    // canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // canIUseGetUserProfile: false,
    // canIUseOpenData: false
    // canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  onLoad() {
    console.log(111111);
    var a = getAdvertsList();
    console.log(a);
  },

  onShow() {
    console.log(777);
  },
})
