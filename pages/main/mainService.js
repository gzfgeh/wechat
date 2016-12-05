var config = require('../../utils/conmon.js');

var idList = [];
var clickList = [];
var topID = [];

function getTopInforData(succ, fail){
    var postdata = {
        json: {
          "ServiceName": "Shcem.Inform.ServiceContract.IQueryInfoService",
          "MethodName": "getTopInformList",
          "Params": JSON.stringify({
            'ProductID': 0,
            'AppTypeID':0,
            'CatogoryID':1895,
            'Top':3
          })
        }
      };

     wx.request(
        config.getConfig(postdata, function(res){
            if (res.data.CODE == "MSG00000"){
                var data = JSON.parse(res.data.DATA);
                for(var i=0; i< data.length; i++){
                    idList.push(data[i].FileID);
                    clickList.push(data[i].InfoLinkId);
                    topID.push(data[i].ID);
                }
                getPicAddr(JSON.stringify(idList), function(res){
                    succ(JSON.parse(res.data.DATA));
                }, function(res){
                    fail(res.INFO);
                })
                
            }else{
                fail(res.INFO);
            }
          }, function(res){
            fail(res.INFO);
          })
      ) 
}

function getPicAddr(idLists, succ, fail){
    wx.request(
        config.getDownloadData({ids:idLists}, function(res){
            succ(res)
        }, function(res){
            fail(res)
        })
    )
}

module.exports = {
    getTopInforData:getTopInforData
}