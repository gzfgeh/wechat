Page({
  data: {   
    "category":[
    {"id":"1","name":"LDPE","valueId":1},
    {"id":"2","name":"HDPE","valueId":5},
    {"id":"3","name":"LLDPE","valueId":6},
    {"id":"4","name":"PP均聚","valueId":20},
    {"id":"5","name":"PP共聚","valueId":21},
    {"id":"6","name":"PVC","valueId":31},
    {"id":"7","name":"全部","valueId":0}
  ]

  },
  // tab切换
  changeState:function(e){
 var that=this;
  if( this.data.currentTab === e.target.dataset.current) {  
    consoloe.log(0)
      return false;  
    } else {  
     
      that.setData( {  
        currentTab: e.target.dataset.current  
      })  
    } 
  },

   bindViewTap: function() {
    wx.navigateTo({
      url: '../malldetail/malldetail'
    })
  }
})