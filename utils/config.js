function getVersion() {
    return 'Vlatest';
  }

function getAuthKey() {
    var authKey='usercode';

    var dataStr = wx.getStorageSync('USER_CODE_KEY');
    if(dataStr) {
      var data = JSON.parse(dataStr);
      if(data) {
        var authData =data.token;
        authKey=authData;
      }
    }

    return authKey;
  }

function getConfig(content, succ, failure){
    content.json.Userid = getAuthKey();
    content.json.Version = getVersion();
    return {
      url: "http://appnew.shcem.com:5400/shcem",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      method:"POST",
      data:content,
      success:function(res){
        typeof succ=="function" && succ(res);
      },
      fail:function(ret){
        typeof failure=="function" && failure(ret);
      }
    }
  }


  function getDownloadData(content, succ, failure){
      return {
          url: "http://fms.shcem.com/api/file/DownloadFiles",
          headers: {
              'Content-Type': 'application/json'
          },
          method:"POST",
          data:content,
          success: function(res){
              typeof succ=="function" && succ(res);
          },
          fail: function(res){
              typeof failure=="function" && failure(ret);
          }
      }
  }

  module.exports = {
  getConfig: getConfig,
  getDownloadData: getDownloadData
}