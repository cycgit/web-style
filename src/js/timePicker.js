(function (Vue, components) {

  /**
   *
   * @params val (08:20:30)
   *
   * @events time-change(val)
   */




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

          if (val.indexOf(':') != -1) {

            // val = ('0' + n.getHours()).slice(-2) + ':' + ('0' + n.getMinutes()).slice(-2) + ':' + ('0' + n.getSeconds()).slice(-2)
            let sp = val.split(':')
            val = parseInt(sp[0]) + ':' + parseInt(sp[1]) + ':' + parseInt(sp[2])
          }



          return val
        }
      }
    },
    data(){

      var sp = this.val.split(':')

      if (!this.val) sp = [-1, -1, -1]

      return {
        sh: sp[0],
        sm: sp[1],
        ss: sp[2],
        op: false
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
        if(!this.val) return ''
        let sp = this.val.split(':')

        return ('0' + sp[0]).slice(-2) + ':' + ('0' + sp[1]).slice(-2) + ':' + ('0' + sp[2]).slice(-2)
      }
    },
    watch: {
      val(val){
        if(this.op){
         
          this.$dispatch('time-change', this.val)

        }else{
          //外部赋值
            if(val){
              let sp = val.split(':')
              this.sh = parseInt(sp[0])
              this.sm = parseInt(sp[1])
              this.ss = parseInt(sp[2])
              this.$els.h.scrollTop = this.sh * 24
              this.$els.m.scrollTop = this.sm * 24
              this.$els.s.scrollTop = this.ss * 24
            }else{
                this.clear()
            }

        }

        this.op = false

      }
    },
    methods: {
      click(num, type){
        this.op = true
        this['s' + type] = num
        this.scroll(num, type)
        this.change()

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
        if (this.sh == -1) {
          this.sh = 0
        }
        if (this.sm == -1) {
          this.sm = 0
        }
        if (this.ss == -1) {
          this.ss = 0
        }

        let val = ('0' + this.sh).slice(-2) + ':' + ('0' + this.sm).slice(-2) + ':' + ('0' + this.ss).slice(-2)

        this.val = val
        
      },
      clear(){
        this.sh = -1
        this.sm = -1
        this.ss = -1
        this.op = false
        this.$els.h.scrollTop = 0
        this.$els.m.scrollTop = 0
        this.$els.s.scrollTop = 0
        this.val = ''
      }
    }
  })

  components.timePicker = timePicker
})(Vue, function () {
  window.components = window.components ? window.components : {}
  return window.components
}())



