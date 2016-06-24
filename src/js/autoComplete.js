(function (Vue, components) {

  /**
   *    选择日期组件
   *    @params val (10位或者13位) 默认取当前日期
   *
   *    @events lineDate-change(val)
   */


  let template = `<div class="v-auto" tabindex="-1"
                 @keydown="keyDown"
                 @keydown.enter="enter"
                 @keyup="keyUp"
                 v-el:box>
                <div class="v-input">
                    <input type="text" class="input" placeholder="输入手机号码" v-model="val" autocomplete="off"
                           @focus="show=true">
                </div>
                <div class="v-drop" v-show="show">
                    <ul>
                        <li v-for="item in source"
                            :class="{active: $index == select}"
                            @click="click(item)"
                            @mouseenter="select = $index"
                            @mouseleave="select = -1"
                        >{{item.title}}
                        </li>
                    </ul>
                </div>
            </div>`

  let autoComplete = Vue.extend({
    template,
    props:{
      val: {
        coerce (val) {
          return val
        }
      },
      max:{
        coerce(val){
          return val? parseInt(val): 4
        }
      }
    },
    data(){
      return {
        show: false,
        source:[],
        flag: null
      }
    },
    ready(){

      this.$els.box.addEventListener('click', function (e) {
        e.stopPropagation()
      })
      var x = this
      document.body.addEventListener('click', function (e) {
        x.show = false
      })
    },
    methods: {
      keyDown(e){
        let keyCode = e.keyCode
        if (keyCode == 38 || keyCode == 40) {
          //down
          var index = this.select
          var max = this.max
          if (keyCode == 40) {
            this.select = (index == max-1) ?  -1 : index + 1
          }

          //up
          if (keyCode == 38) {
            this.select = index == -1? max-1 : index - 1
          }

          e.stopPropagation()
          e.preventDefault()
          return false
        } else {


        }
      },
      keyUp(e){
        let keyCode = e.keyCode
        if (keyCode == 38 || keyCode == 40) return

        if(keyCode == 8 && this.val == ''){
          //delete
          this.select = -1;
          this.show = false
          this.source = []
          return
        }
        this.search()

      },
      enter(){
        if(this.select != -1){

          var t = this
          this.source.forEach(function (it, i) {
            if(i == t.select) t.val = it.title
          })

          t.show = false
          t.select = -1
        }
      },
      click(item){
        this.select = -1
        this.show = false
        this.val = item.title
      },
      search(){

      }
    }
  })





})(Vue, function () {
  window.components = window.components ? window.components : {}
  return window.components
}())
