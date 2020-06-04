const TOKEN = 'token'

App({
  globalData: {
    token: ""
  },
  onLaunch: function () {
    const token = wx.getStorageSync(TOKEN)

    if (token && token.length !== 0) {
      // 验证token是否过期
      this.check_token(token)
    } else {
      this.login()
    }
  },
  check_token(token) {
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: "POST",
      header: {
        token
      },
      success: res => {
        if (!res.data.errCode) {
          this.globalData.token = token
        } else {
          this.login()
        }
      },
      fail: err => {
        console.log(err);

      }
    })
  },
  login() {
    wx.login({
      // code只有五分钟的有效期
      success: res => {
        // 1.获取code
        const code = res.code

        // 2.将code发送给自己的服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          data: {
            code
          },
          method: "POST",
          success: res => {
            const token = res.data.token
            this.globalData.token = token

            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  }


})