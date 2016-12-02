var mainService=require('mainService.js');

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
   
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    currentTab: 0,
    // indicator-dots:true
  },
  // tab切换
  changeState:function(e){
 var that=this;
  if( this.data.currentTab === e.target.dataset.current) {  
      return false;  
    } else {  
      that.setData( {  
        currentTab: e.target.dataset.current  
      })  
    } 
  },
     //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../mainDetail/maindetail'
    })
  }

 
})