// components/my-mslot/my-mslot.js
Component({
  // 让使用者可以给组件传入数据
  properties: {

  },
  // 定义组件内部初始化数据
  data: {

  },
  // 定义组件内部的函数
  methods: {

  },
  // 定义组件的配置选项
  options: {
    multipleSlots: true
  },
  // 外界给组件传入额外的样式
  externalClasses: [

  ],
  // 可以监听properties/data的改变
  observers: {

  },
  // 组件的生命周期
  // 1.监听所在页面的生命周期
  pageLifetimes: {
    show() {
      console.log("监听组件所在页面显示出来时");
    },
    hide() {
      console.log("监听组件所在页面隐藏出来时");
    },
    resize() {
      console.log("监听页面尺寸的改变");
    }
  },

  // 2.监听组件本身的生命周期
  lifetimes: {
    created() {
      console.log("组件被创建");
    },
    attached() {
      console.log("组件被添加在页面");
    },
    ready() {
      console.log("组件被渲染出来");
    },
    moved() {
      console.log("组件被移动到节点树另一个位置");
    },
    detached() {
      console.log("组件被移除掉");
    }
  }
})