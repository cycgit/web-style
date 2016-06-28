;(function (Vue, window) {
  var template = `
  <div class="v-popover-tag" @click.stop="pop($event)">
    <slot></slot>
  </div>
  <div class="v-popover-wrap" :style="{left: x + 'px', top: y + 'px', visibility: show ? 'visible' : 'hidden'}" v-el:pop>
    <div class="v-popover-box">
      <div class="v-popover-title">{{title}}</div>
      <div class="v-popover-content">{{content}}</div>
      <div :class="['v-popover-arrow', placement == 'top' ? 'v-popover-arrow-top' : 'v-popover-arrow-bottom']" :style="{left: arrowLeft + 'px'}"></div>
    </div>
  </div>`

  var popover = Vue.extend({
    template,
    props: {
      title: {
        type: String,
        default: '标题'
      },
      content: {
        type: String,
        default: '内容'
      },
      placement: {
        type: String,
        default: 'top'
      }
    },
    data() {
      return {
        show: false,
        arrowLeft: 0,
        x: 0,
        y: 0
      }
    },
    methods: {
      pop(e) {
        if(this.show){
          this.show = false
          return
        }
        var target = e.target
        this.arrowLeft = target.offsetWidth / 2
        this.x = target.offsetLeft
        if(this.placement == 'top'){
          this.y = target.offsetTop - this.$els['pop'].offsetHeight - 3
        }else {
          this.y = target.offsetTop + target.offsetHeight + 3
        }
        this.show = true
      }
    }
  })

  components.popover = popover
})(Vue, function () {
  window.components = window.components ? window.components : {}
  return window.components
}())
