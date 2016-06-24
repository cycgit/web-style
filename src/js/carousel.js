;(function (Vue, window) {
  var template = `
  <div class="v-carousel-wrap">
    <div class="v-carousel-content" :style="{width: source.length + '00%' }">
      <div class="v-carousel-one" :style="{backgroundImage: 'url(' + item + ')', width: 100 / source.length + '%' }" v-for="item in source"></div>
    </div>
  </div>`

  var carousel = Vue.extend({
    template,
    props: {
      source: {
        type: Array,
        default: []
      }
    }
  })

  window.carousel = carousel
})(Vue, window)
