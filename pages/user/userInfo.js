// pages/user/userInfo.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo : {},
    hasUserInfo: false
  },
  excit: function (e) {
    wx.removeStorage({
      key: 'sessionid',
      success: function (res) {
        console.log(res.data)
        wx.switchTab({
          url: '../index/index'
        })
      }
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
    //查看是否登录过
    try {
      var checkLogin = wx.getStorageSync('sessionid')
      if (checkLogin) {
        // Do something with return value
        if (app.globalData.userInfo) {
          this.setData({
            userInfo: app.globalData.userInfo,
            hasUserInfo: true
          })
        } else {
          wx.getUserInfo({
            success: res => {
              app.globalData.userInfo = res.userInfo
              this.setData({
                userInfo: res.userInfo,
                hasUserInfo: true
              })
            }
          })
        }
      } else {
        //调整登录页面
        var openId = "001"
        wx.redirectTo({
          url: '../login/login?openId=' + openId
        })
      }
    } catch (e) {
      // Do something when catch error
      console.log(e)
    }
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
    console.log("下拉")
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
  
  }
})