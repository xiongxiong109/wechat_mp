// pages/ajax/ajax.js
var ajax = require('../../utils/ajax');
Page({
  data:{
    isFetch: false,
    title: 'wx request请求测试',
    list: [],
    txt: '获取远端数据'
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  // methods
  fetch: function() {
    var _this = this;
    this.setData({
      isFetch: true,
      txt: 'loading'
    });
    wx.showLoading();
    ajax({
      url: 'apis/list',
      data: {},
      success: function(res) {
        _this.setData({
          title: res.title,
          list: res.list
        });
        wx.showToast({title: 'success', icon: 'success'});
      },
      complete: function() {
        _this.setData({
          isFetch: false,
          txt: 'fetch'
        });
      }
    })
  }
})