// pages/home/home.js
Page({
  data: {
    counter: 0,
    index: "",
    title: ""
  },
  handleIncrement(event) {
    console.log(event);
    this.setData({
      counter: this.data.counter + 1
    })
  },
  tabControlClick(event) {
    console.log(event);
    const index = event.detail.index
    const title = event.detail.title
    this.setData({
      index: index,
      title: title
    })
  },
  handleIncrementCpn() {
    // 1.获取组件对象
    const my_sel = this.selectComponent('.sel-class')
    // 2.通过setData修改组件中的数据(不合理)
    // my_sel.setData({
    //   counter: my_sel.data.counter + 1
    // })

    // 3.通过方法对数据进行修改（合理）
    my_sel.incrementCounter(10)


  }
})