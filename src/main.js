import Vue from 'vue'
import WebStyle from './components/index'
/* eslint-disable no-new */
new Vue({
  el: 'body',
  methods: {
    toggle () {
      this.$refs.confirm.alert('显示成功')
    }
  },
  components: {
    time: WebStyle.DatePicker
  }
})
