(function (Vue, components) {
  let template = ` <div class="tp">
                    <div class="tp-header">
                        <input placeholder="请选择时间">
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
                        
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                </div>`

   let timePicker = Vue.extend({
     template,
     data(){
       return {
         value: '07:23:40',
         sh: 7,
         sm: 23,
         ss: 40
       }
     },
     ready(){
       this.$els.h.scrollTop = 7*24
       this.$els.m.scrollTop = 23*24
     },
     computed:{
        h(){
            return 24
        },
        m(){
            return 60
        },
        s(){
            return 60
        }
     },
     watch:{
       sh(n){
         this.scroll(n, 'h')
       },
       sm(n){
         this.scroll(n, 'm')
       }
     },
     methods:{
       click(num, type){
         this['s'+type] = num
       },
       scroll(num, type){

         var dom = this.$els[type]

         requestAnimationFrame(step)
           function step() {
               var pg = num*24 - dom.scrollTop
              if(pg>0 ){
                dom.scrollTop += 12
                requestAnimationFrame(step)
              }else if(pg< -12){
                dom.scrollTop -= 12
                requestAnimationFrame(step)
              }else{
                dom.scrollTop += pg
              }
           }
       }
     }
  })

  components.timePicker = timePicker
})(Vue, function () {
  window.components = window.components?  window.components : {}
  return window.components
}())



