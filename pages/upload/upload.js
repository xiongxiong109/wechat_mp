// pages/upload/upload.js
Page({
  data:{
    needCustomHeader: false,
    temAvatarUrl: '',
    avatarUrls: []
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
  evt_toggleNeed: function(ev) {
    var cur = ev.detail.value;
    var that = this;
    this.setData({
      needCustomHeader: cur
    });
  },
  // 图片选择
  evt_selectAvatar: function() {
    var that = this;
    wx.chooseImage({
      count: 1, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function(res){
        // success
        var url = res.tempFilePaths[0];
        if (url) {
          that.setData({
            temAvatarUrl: url,
            avatarUrls: res.tempFilePaths
          });
        }
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    });
  },
  // 图片预览
  evt_preview: function() {
    if (this.data.avatarUrls.length) {
      wx.previewImage({
        // current: 'String', // 当前显示图片的链接，不填则默认为 urls 的第一张
        urls: this.data.avatarUrls
      })
    }
  }
})