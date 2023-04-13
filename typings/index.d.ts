/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}

interface UserInfo {
  avatarUrl: string;
  nickName: string
  gender: number
  city: string
  country: string
  language: string
  province: string
}