;(function (Vue, components) {
  var template = `
  <div class="v-tabs-nav-wrap" v-el:tabs>
    <div class="v-tabs-nav clear" :style="{width: navWidth + 'px'}">
      <div class="v-tabs-nav-item" v-for="item in source" @click="switch($index)">{{item.title}}</div>
    </div>
  </div>
  <div class="v-tabs-wrap">
    <div class="v-tabs-content" :style="{width: source.length * 100 + '%', left: - active + '00%'}">
      <slot></slot>
    </div>
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
        active: 0,
        navWidth: 'auto',
      }
    },
    methods: {
      switch(index){
        if(this.active != index){
          this.active = index
        }
      }
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
