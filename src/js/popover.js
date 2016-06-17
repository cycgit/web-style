;(function (Vue, window) {
  var template = `
  <div class="popover-wrap" v-show="show">
    <div class="popover-box">
      <div class="popover-title">{{title}}</div>
      <div class="popover-content">{{content}}</div>
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
      }
    }
  })

  window.popover = popover
})(Vue, window)
