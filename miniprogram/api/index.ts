export const domain = 'http://127.0.0.1:3000'

interface Header {
  'content-type': string;
}

interface Params {
  url: string;
  data: any;
  method: 'PUT' | 'POST';
  header: Header;
  success: (res: any) => void;
  fail:(res: any) => void;
}

export const wxRequest = (params: Params) => {
  var header = {
    'cookie': wx.getStorageSync("sessionId"), // 读取本地保存好的上⼀次cookie
    'content-type': 'application/json' // 默认值
  };
  wx.request({
    url: params.url,
    data: params.data,
    method: params.method,
    header: header,
    success (res) {
      if (res.data.status == 401) {
        console.log(8888)
        wx.navigateTo({
          url: '/pages/login/index',
          // events: {
          //   // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
          //   acceptDataFromOpenedPage: function(data) {
          //     console.log(data)
          //   },
          //   someEvent: function(data) {
          //     console.log(data)
          //   }
          // },
          // success: function(res) {
          //   // 通过eventChannel向被打开页面传送数据
          //   res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
          // }
        })
        return;
      }
      console.log(res)
      params.success(res);
    },
    fail: () => {
      params.fail
    }
  })
}
