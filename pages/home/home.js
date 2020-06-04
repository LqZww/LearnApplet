// pages/home/home.js
Page({
  data: {
    title: "呵呵呵呵"
  },
  handlePushDetail() {
    wx.navigateTo({
      url: '/pages/detail/detail?title=zwwlq',
    })
  }

})