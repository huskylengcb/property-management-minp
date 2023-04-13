export const domain = 'http://127.0.0.1:3000'

interface Header {
  'content-type': string;
}

interface Params {
  url: string;
  data?: any;
  method: 'PUT' | 'POST' | 'GET';
  header?: Header;
  success?: (res: any) => void;
  fail?: (res: any) => void;
}

export const wxRequest = (params: Params) => {
  var header = {
    'cookie': wx.getStorageSync("sessionId"), // 读取本地保存好的上⼀次cookie
    'content-type': 'application/json' // 默认值
  };
  wx.request({
    url: `${domain}${params.url}`,
    data: params.data || {},
    method: params.method,
    header: header,
    success (res) {
      if (res.data.status == 401) {
        wx.navigateTo({
          url: '/pages/login/index',
        })
        return;
      }
      params.success && params.success(res);
      return res;
    },
    fail: (res) => {
      params.fail && params.fail(res);
      return res;
    }
  })
}
