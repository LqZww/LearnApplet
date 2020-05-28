// pages/image/image.js
Page({
  data: {
    imagePath: ""
  },
  handleChooseAlbum() {
    wx.chooseImage({
      success: (res) => {
        console.log(res);
        // const path = res.tempFilePaths[0]
        this.setData({
          imagePath: res.tempFilePaths[0]
        })
      },
    })
  },
  handleImageLoad(){
    console.log("图片加载完成");
    
  }



})