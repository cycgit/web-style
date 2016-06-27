(function (Vue, components) {

  /**
   *    分页组件: datePicker
   *    @params cur: 当前页数  all:总页数 size: default 10
   *
   *    @events page-change(val)
   */

  var template = `
    <ul class="pagination">
        <li v-show="cur!=1" @click="page(cur-1)">«</li>
        <li v-for="item in tags" :class="{active: cur == item}" @click="page(item)">{{item}}</li>
        <li class="jump" v-show="all>10"></li>
        <li v-show="all>10" @click="page(all)"><a>{{all}}</a></li>
        <li v-show="cur!=all" @click="page(cur+1)">»</li>
        <div class="quick" v-if="quick" @keydown.enter="page(num)"> 跳至 <input class="input" v-model="num"> 页</div>
    </ul>`

  var pagination = Vue.extend({
    template,
    props: {
      cur: null,
      all: null,
      quick:{
        default: true
      }
    },
    data(){
      return {
        num: ''
      }
    },
    computed: {
      tags(){
        var left = 1
        var right = this.all
        var ar = []
        if (this.all > 10) {
          if (this.cur > 5 && this.cur < this.all - 4) {
            left = this.cur - 5
            right = this.cur + 4
          } else {
            if (this.cur <= 5) {
              left = 1
              right = 10
            } else {
              right = this.all
              left = this.all - 9
            }
          }
        }
        while (left <= right) {
          ar.push(left)
          left++
        }
        return ar
      }
    },
    methods:{
      page(index){
        if(isNaN(parseInt(index))){
          return
        }
        if(index == this.cur) return
          this.num = ""
          this.$dispatch('page-change', index)
      }
    }
  })

  components.pagination = pagination


})(Vue, function () {
  window.components = window.components ? window.components : {}
  return window.components
}())



