// pages/home/home.js
import request from '../../service/network.js'
Page({
  data: {

  },
  onLoad: function (options) {
    // get请求
    // wx.request({
    //   url: 'https://autumnfish.cn/related/playlist',
    //   data: {
    //     id: 33894312
    //   },
    //   success: res => {
    //     console.log(res);
    //   }
    // })

    // post请求
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method: "POST",
    //   data: {
    //     name: "zww",
    //     age: 18
    //   },
    //   success: res => {
    //     console.log(res);
    //   }
    // })

    // 封装
    request({
      url: "https://autumnfish.cn/related/playlist",
      data: {
        id: 33894312
      }
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }
})