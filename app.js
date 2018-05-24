//app.js
App({
  globalData: {
    userInfo: null
  },
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wx.setEnableDebug({
      enableDebug: true
    })

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log('code='+res.code)
        wx.request({
          url: 'http://localhost:8089/weixinManage/wikiLogin/userLogin', //仅为示例，并非真实的接口地址
          data: {
            code: res.code
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function (res) {
            console.log('后台返回数据token：'+res.data.token)
            var token = res.data.token
            if (token){
              // 获取用户信息 
              wx.getSetting({ //返回值中只会出现小程序已经向用户请求过的权限
                success: res => {
                  console.log('getSetting = ' + res)
                  if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框


                    wx.getUserInfo({
                      success: res => {
                        var app = getApp();
                        // 可以将 res 发送给后台解码出 unionId
                        app.globalData.userInfo = res.userInfo
                        console.log('userInfo=' + app.globalData.userInfo)
                        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                        // 所以此处加入 callback 以防止这种情况
                        if (this.userInfoReadyCallback) {
                          this.userInfoReadyCallback(res)
                        }
                      }
                    })


                  }
                }
              })
            }else{
              console.log('登录失败')
            }
          }
        })
      }
    })

  }
})