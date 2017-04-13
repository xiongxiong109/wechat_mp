// pages/storage/storage.js
Page({
  data:{
    storeKey: 'test_store',
    curSize: 0, // kb
    total: 1024 * 10,
    percent: 0,
    color: '#0c0',
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
    this.calcStoreSize();
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
  calcStoreSize: function() {
    var res = wx.getStorageInfoSync();
    var percent = Math.floor(res.currentSize / res.limitSize * 10000) / 100;
    this.setData({
      curSize: res.currentSize,
      total: res.limitSize,
      percent: percent,
      color: percent > 2 ? '#c00': '#0c0'
    });
    console.log(res);
  },
  evt_set: function() {
    var storeArr = wx.getStorageSync(this.data.storeKey) || [];
    for (var i = 0; i < 500; i++) {
      storeArr = [...storeArr, {nm: Math.random() * 1000000000}];
    }
    // 这是一个性能消耗比较高的操作, 不要放在for循环中
    wx.setStorageSync(this.data.storeKey, [...storeArr, {nm: Math.random() * 1000000000}]);
    this.calcStoreSize();
  },
  evt_clear: function() {
    var that = this;
    wx.clearStorage({
      success: function() {
        that.calcStoreSize();
      }
    });
  }
})