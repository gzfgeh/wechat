var homeService = require('homeService.js');
Page({
  data: {
    imgUrls: [],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000
  },

  onLoad:function(){
    var that = this;
    homeService.getTopInforData(function(res){
        that.setData({
          imgUrls:res
        })
    }, function(error){
        console.log(error)
    });
    
  }


})