// components/my-event/my-event.js
Component({
  methods: {
    handleIncrement() {
      this.triggerEvent('increment', {
        name: 'zww',
        age: 22
      }, {})
    }
  }
})