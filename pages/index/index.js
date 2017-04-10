Page({
  data: {
    links: [
      {url: '/pages/logs/logs', nm: 'log'},
      {url: '/pages/test/test', nm: '测试页面'},
      {url: '/pages/ajax/ajax', nm: '测试request'}
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