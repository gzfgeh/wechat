var mainService=require('mainService.js');

Page({
  data: {
    imgUrls: [],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    currentTab: 0,
    // indicator-dots:true
  },

  onLoad:function(){
    var that = this;
    mainService.getTopInforData(function(res){
      
        that.setData({
          imgUrls:res
        })
    }, function(error){
        console.log(error)
    });
    
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