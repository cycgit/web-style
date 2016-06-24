;(function (Vue, window) {
  var template = `
  <div class="v-carousel-wrap">
    <div class="v-carousel-content" :style="{width: source.length + 1 + '00%', height: contentHeight, left: -activeIndex + '00%'}">
      <div class="v-carousel-one" :style="{backgroundImage: 'url(' + item + ')', width: 100 / ( source.length + 1 ) + '%' }" v-for="item in source"></div>
      <div class="v-carousel-one" :style="{backgroundImage: 'url(' + source[0] + ')', width: 100 / ( source.length + 1 ) + '%' }"></div>
    </div>
    <ul class="v-carousel-dots" :style="{height: ctrlHeight}">
      <li v-for="item in source" @click="toTarget($index)" :class="$index == activeIndex ? 'active' : ''">&bull;</li>
    </ul>
  </div>`

  var carousel = Vue.extend({
    template,
    props: {
      source: {
        type: Array,
        default: []
      },
      contentHeight: {
        type: String,
        default: '100%'
      },
      ctrlHeight: {
        type: String,
        default: '0'
      },
      delayTime: {
        type: Number,
        default: 3000
      }
    },
    data() {
      if(this.ctrlHeight == '0%' || this.ctrlHeight == '0px' || this.ctrlHeight == '0em'){
        this.ctrlHeight = 0
      }
      if(this.delayTime > 0){
        this.autoPlay()
      }
      return {
        activeIndex: 0,
        timer: ''
      }
    },
    methods: {
      toTarget(index) {
        if(this.activeIndex == index){
          return
        }else {
          this.activeIndex = index
          this.autoPlay()
        }
      },
      autoPlay() {
        clearInterval(this.timer)
        this.timer = setInterval(function() {
          this.activeIndex++
          console.log(this.activeIndex);
          if(this.activeIndex >= this.source.length){
            this.activeIndex = 0
          }
        }.bind(this), this.delayTime);
      }
    }
  })

  window.carousel = carousel
})(Vue, window)
