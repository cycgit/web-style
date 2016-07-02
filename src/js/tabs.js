;(function (Vue, components) {
  var template = `
  <div class="v-tabs-nav-wrap" v-el:tabs>
    <div class="v-tabs-nav clear" :style="{width: navWidth + 'px'}">
      <span class="v-tabs-nav-item" v-for="item in source">{{item.title}}</span>
    </div>
  </div>
  <div class="v-tabs-content">
    hello world
  </div>`

  var tabs = Vue.extend({
    template,
    compute: {

    },
    props: {
      source: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        active: 1,
        navWidth: 'auto',
      }
    },
    methods: {

    },
    ready: function () {
      // 计算宽度
      var arr = this.$els['tabs'].querySelectorAll('.v-tabs-nav-item');
      var width = 0
      arr.forEach(function (item) {
        // 不能用offsetWidth
        width+=Math.ceil(getComputedStyle(item, null).width.slice(0, -2)) + 64
      })
      this.navWidth = width - 24
    }
  })

  components.tabs = tabs
})(Vue, function () {
  window.components = window.components ? window.components : {}
  return window.components
}())
