Page({
  data: {
    links: [
      {url: '/pages/logs/logs', nm: 'log'},
      {url: '/pages/test/test', nm: '测试页面'},
      {url: '/pages/ajax/ajax', nm: '测试request'},
      {url: '/pages/upload/upload', nm: '测试wx.upload'},
      {url: '/pages/storage/storage', nm: '测试wx.storage'},
      {url: '/pages/location/location', nm: '测试地理位置'}  
    ]
  },
  onShow() {
    this.setData({
      persent: 56
    })
  },
   onShareAppMessage() {
     return {
       title: 'hello world',
       path: '/page/user'
     }
   }
})