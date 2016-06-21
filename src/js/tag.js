;(function (Vue, window) {
  var template = `
  <div class="input tag-wrap">
    <div class="tag" v-for="item in source">
      <span class="content" :style="{}">{{item}}</span><span class="del">&times;</span>
    </div>
  </div>`

  var tag = Vue.extend({
    template,
    props: {
      source: {
        type: Array,
        default: []
      }
    }
  })

  window.tag = tag
})(Vue, window)
