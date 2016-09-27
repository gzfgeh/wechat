var app = getApp();
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    content:{json: {
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
  },

  onLoad:function(){
    var thar = this;
    wx.request({
      url: app.url.apiUrl,
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
      },
      success: function (res) {
        console.log(res)
         that.setData({
           imgUrls: res.data.top_stories
         })
      }
    })
  }


})