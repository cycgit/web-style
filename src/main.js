import Vue from 'vue'
import app from './App.vue'
import WebStyle from './components/index'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { app,
    box: WebStyle.box
  }
})
