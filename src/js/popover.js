;(function (Vue, window) {
  var template = `
  <div class="v-popover-wrap" v-show="show" transition="v-popover">
    <div class="v-popover-box">
      <div class="v-popover-title">{{title}}</div>
      <div class="v-popover-content">{{content}}</div>
    </div>
  </div>`

  var popover = Vue.extend({
    template,
    props: {
      show: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: '标题'
      },
      content: {
        type: String,
        default: '内容'
      },
      position: {
        type: Object,
        default: {}
      }
    }
  })

  components.popover = popover
})(Vue, function () {
  window.components = window.components ? window.components : {}
  return window.components
}())
