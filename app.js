//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  },
  getConfig:function(data){
    return {
      url: "http://appnew.shcem.com:5400/shcem",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      method:"POST",
      data:{
        json: {
          "ServiceName": "Shcem.Inform.ServiceContract.IQueryInfoService",
          "MethodName": "getTopInformList",
          "Params": JSON.stringify({
            'ProductID': 0,
            'AppTypeID':0,
            'CatogoryID':1895,
            'Top':3
          }),
          "Userid":"usercode",
          "Version":"Vlatest"
        }
      }
    }
  },
  url:{
    apiUrl:"http://appnew.shcem.com:5400/shcem"
  }
})