// pages/wxml/wxml.js
Page({
  data: {
    message: 'hello world',
    firstname: 'zww',
    lastname: 'lq',
    age: 20,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 50,
    games: ["天龙八部", "英雄联盟", "王者荣耀"],
    letters: ['a', 'b', 'c']
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    }, 1000)
  },
  handleSwitchColor() {
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleSwitchShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handleIncrement() {
    this.setData({
      score: this.data.score + 5
    })
  }


})