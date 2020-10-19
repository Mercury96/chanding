//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      env:'text-6ylpb',
      traceUser:true
    })
  }
})