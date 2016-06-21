;(function (Vue, window) {
  var template = `
  <div class="popover-wrap" v-show="show" transition="popover" :style="{left: position.x + 'px', top: position.y + 'px'}">
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
      },
      position: {
        type: Object,
        default: {}
      }
    }
  })

  function calcPosition(e) {
    var target = e.target
    return {
      x: target.offsetLeft,
      y: target.offsetTop + target.scrollHeight + 5
    }
  }

  window.popover = popover
  window.calc = calcPosition
})(Vue, window)
