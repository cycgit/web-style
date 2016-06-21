(function (Vue, components) {
  let template = ` <div class="tp">
                    <div class="tp-header">
                        <input placeholder="请选择时间" :value="out">
                        <i class="iconfont icon-crosscircle"></i>
                    </div>
                    <div class="tp-body">
                    
                        <ul v-el:h>
                            <li v-for="n in h" :class="{'tp-active': n == sh}" @click="click(n, 'h')">{{n}}</li>
                        </ul>
                        
                        <div class="tp-line"></div>
                        
                        <ul v-el:m>
                            <li v-for="n in m" :class="{'tp-active': n == sm}" @click="click(n, 'm')">{{n}}</li>
                        </ul>
                         
                        <div class="tp-line"></div>
                        
                        <ul v-el:s>
                           <li v-for="n in s" :class="{'tp-active': n == ss}" @click="click(n, 's')">{{n}}</li>
                        </ul>
                    </div>
                </div>`

  let timePicker = Vue.extend({
    template,
    props: {
      val: {
        coerce: function (val) {
          // console.log(val)
          return val
        }
      }
    },
    data(){

      console.log(this.val)


      var sp = this.val.split(':')

      return {
        val: this.val,
        sh: sp[0],
        sm: sp[1],
        ss: sp[2]
      }
    },
    ready(){
      this.$els.h.scrollTop = this.sh * 24
      this.$els.m.scrollTop = this.sm * 24
      this.$els.s.scrollTop = this.ss * 24
    },
    computed: {
      h(){
        return 24
      },
      m(){
        return 60
      },
      s(){
        return 60
      },
      out(){
        return `${this.sh}:${this.sm}:${this.ss}`
      }
    },
    watch: {
      sh(n){
        this.scroll(n, 'h')
      },
      sm(n){
        this.scroll(n, 'm')
      },
      ss(n){
        this.scroll(n, 's')
      }
    },
    methods: {
      click(num, type){
        this['s' + type] = num
      },
      scroll(num, type){

        var dom = this.$els[type]

        requestAnimationFrame(step)
        function step() {
          var pg = num * 24 - dom.scrollTop
          if (pg > 0) {
            dom.scrollTop += 12
            requestAnimationFrame(step)
          } else if (pg < -12) {
            dom.scrollTop -= 12
            requestAnimationFrame(step)
          } else {
            dom.scrollTop += pg
          }
        }
      },
      change(){

      }
    }
  })

  components.timePicker = timePicker
})(Vue, function () {
  window.components = window.components ? window.components : {}
  return window.components
}())



