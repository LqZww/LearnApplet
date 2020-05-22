// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "zww",
    age: 18,
    games: [{
        id: 1,
        name: '英雄联盟'
      },
      {
        id: 2,
        name: '天龙八部'
      },
      {
        id: 3,
        name: '王者荣耀'
      }
    ],
    count: 0
  },
  addCount() {
    this.setData({
      count: this.data.count + 1
    })
  },
  reduceCount() {
    this.setData({
      count: this.data.count - 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})