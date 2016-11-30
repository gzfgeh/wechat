Page({
  data: {

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
  }

 
})