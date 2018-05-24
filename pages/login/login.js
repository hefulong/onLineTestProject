// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName : null,
    passWord: null
  },
  inputName: function (e) {
    this.setData({
      userName: e.detail.value
    })
  },
  inputPassWord: function (e) {
    this.setData({
      passWord: e.detail.value
    })
  },
  loginIt: function (e) {
    var userName = this.data.userName
    var passWord = this.data.passWord
    if (passWord == '123456' && userName == 'hfl'){
      wx.setStorage({
        key: 'userName',
        data: userName,
      })
      wx.setStorage({
        key: 'sessionid',
        data: '123456789',
      })
      wx.switchTab({
        url: '../user/userInfo'
      })
    }else{
      wx.showToast({
        title: '登录失败',
        icon: 'none',
        duration: 2000
      })
    }
  },
  backIndex: function(e){
    wx.switchTab({
      url: '../index/index'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {


  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
})
