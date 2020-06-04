// pages/home/home.js
Page({
  handleShowToast() {
    wx.showToast({
      title: '弹出了',
      duration: 3000,
      icon: 'loading',
      mask: true,
      success: function () {
        console.log("成功");
      },
      fail: function () {
        console.log("失败");
      }
    })
  },
  handleShowModal() {
    wx.showModal({
      title: "Modal",
      content: "Modal弹窗",
      success: function (res) {
        console.log(res);

      }
    })
  },
  handleShowLoading() {
    wx.showLoading({
      title: 'Loading',
      mask: true
    })

    setTimeout(() => {
      wx.hideLoading()
    }, 1000)
  },
  handleShowActionSheet() {
    wx.showActionSheet({
      itemList: ['天龙八部', '英雄联盟'],
      itemColor: 'red',
      success: res => {
        console.log(res);
      }
    })
  },
  onShareAppMessage: function (options) {
    console.log(options);
    return {
      title: "hhhhh",
      path: '/pages/home/home'
    }



  }
})