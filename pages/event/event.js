// pages/home/home.js
Page({
  data: {
    titles: ['a', 'b', 'c']
  },
  handleTouchStart() {
    console.log("手指触摸动作开始");
  },
  handleTouchMove() {
    console.log("手指触摸后移动");
  },
  handleTouchEnd() {
    console.log("手指触摸动作结束");
  },
  handleTap() {
    console.log("手指触摸后马上离开");
  },
  handleLongPress() {
    console.log("手指触摸超过350ms再离开");
  },
  handleEventClick(event) {
    console.log(event);
  },
  handleItemClick(event) {
    console.log(event);
    const dataset = event.currentTarget.dataset
    const title = dataset.item
    const index = dataset.index
    console.log(title, index);
  },
  handleCaptureView1() {
    console.log("handleCaptureView1111");
  },
  handleBindView1() {
    console.log("handleBindView1111");
  },
  handleCaptureView2() {
    console.log("handleCaptureView2222");
  },
  handleBindView2() {
    console.log("handleBindView2222");
  },
  handleCaptureView3() {
    console.log("handleCaptureView3333");
  },
  handleBindView3() {
    console.log("handleBindView3333");
  }
})