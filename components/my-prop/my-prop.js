// components/my-prop/my-prop.js
Component({
  properties: {
    // title: String,
    // content: String
    title: {
      type: String,
      value: "默认标题",
      observer: function (newVal, oldVal) {
        console.log(newVal, oldVal);
      }
    },
    content: {
      type: String,
      value: "默认内容",
      observer: function (newVal, oldVal) {
        console.log(newVal, oldVal);
      }
    }
  },
  externalClasses: [
    'titleclass'
  ]

})