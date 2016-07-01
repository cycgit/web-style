;(function (Vue, components) {
  var template = `
  <div class="v-tabs-nav-wrap">
    <div class="v-tabs-nav clear">
      <div class="v-tabs-nav-item v-tabs-nav-active">选项卡一</div>
      <div class="v-tabs-nav-item">选项卡二</div>
      <div class="v-tabs-nav-item">选项卡三</div>
      <div class="v-tabs-nav-item">选项卡四</div>
      <div class="v-tabs-nav-item">选项卡五</div>
    </div>
  </div>
  <div class="v-tabs-content">
    hello world
  </div>`

  var tabs = Vue.extend({
    template,
    props: {
      source: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        active: 1
      }
    },
    methods: {

    }
  })
})(Vue, function () {
  window.components = window.components ? window.components : {}
  return window.components
}())
