// pages/location/location.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    var that = this;
    wx.showNavigationBarLoading();
    wx.getLocation({
      type: 'gcj02',
      success: function(res) {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      },
      complete: function() {
        wx.hideNavigationBarLoading();
      }
    })
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  evt_chooseLocation: function() {
    var that = this;
    wx.openLocation({
      latitude: that.data.latitude,
      longitude: that.data.longitude,
      scale: 28,
      success: function(res){
        // success
        console.log(res);
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  }
})