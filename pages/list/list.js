// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://pic.hahait.com/upfiles/2014-06-28/20140628115151541.jpg'
    ],
    price: '￥99.99',
    device: 'ABC-J',
    amount:500,
    listData: []
  },
  //返回顶部
  goTop: function (e) {
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 1500
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("生命周期函数--监听页面加载 onLoad")
    wx.showNavigationBarLoading() //在标题栏中显示加载
    var that = this
    wx.request({
      url: 'http://localhost:8089/weixinManage/listData/getList',
      data: {},
      method: 'GET',
      // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        console.log("监听用户下拉动作--success")
        // var userName = this.data.userName
        var appenArray = that.data.listData
        for (var i = 0; i < 15; i++) {
          var arrayObj =
            {
              imgUrls: 'http://pic.hahait.com/upfiles/2014-06-28/20140628115151541.jpg',
              price: '￥99.99',
              device: '初始数据_' + i + '',
              amount: 500
            }
          appenArray.push(arrayObj);
        }

        that.setData({
          listData: appenArray
        })

      },
      fail: function () {
        // fail
        console.log("监听用户下拉动作--fail")
      },
      complete: function () {
        // complete
        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新
      }
    }) 
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
    console.log("页面相关事件处理函数--监听用户下拉动作")
    wx.showNavigationBarLoading() //在标题栏中显示加载
    var that = this
    wx.request({
      url: 'http://localhost:8089/weixinManage/listData/getList',
      data: {},
      method: 'GET',
      // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        console.log("监听用户下拉动作--success")
        that.setData({
          listData: []
        })
        var appenArray = that.data.listData
        for (var i = 0; i < 15; i++) {
          var arrayObj =
            {
              imgUrls: 'http://pic.hahait.com/upfiles/2014-06-28/20140628115151541.jpg',
              price: '￥99.99',
              device: '下拉刷新_' + i + '',
              amount: 500
            }
          appenArray.push(arrayObj);
        }

        that.setData({
          listData: appenArray
        })

      },
      fail: function () {
        // fail
        console.log("监听用户下拉动作--fail")
      },
      complete: function () {
        // complete
        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新
      }
    }) 
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("页面上拉触底事件的处理函数")
    wx.showNavigationBarLoading() //在标题栏中显示加载
    var that = this
    wx.request({
      url: 'http://localhost:8089/weixinManage/listData/getList',
      data: {},
      method: 'GET',
      // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        console.log("监听用户下拉动作--success")
        // var userName = this.data.userName
        var appenArray = that.data.listData
        for(var i=0;i<15;i++){
          var arrayObj =
            {
              imgUrls: 'http://pic.hahait.com/upfiles/2014-06-28/20140628115151541.jpg',
              price: '￥99.99',
              device: '上拉数据'+i+'',
              amount: 500
            }
          appenArray.push(arrayObj);
        }

        that.setData({
          listData: appenArray
        })

      },
      fail: function () {
        // fail
        console.log("监听用户下拉动作--fail")
      },
      complete: function () {
        // complete
        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新
      }
    }) 
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})