;(function (Vue, window) {
  var template = `
  <div class="input tag-wrap">
    <div class="tag" :style="{backgroundColor: bgc[item.bgc_no]}" v-for="item in dis_source">
      <span class="content">{{item.text}}</span><span class="del" @click="del($index)">&times;</span>
    </div>
    <input class="tag-input" type="text" placeholder="标签，按 enter 创建" v-model="text" @keyup.enter="add(text)" @keyup.delete="del(source.length - 1)">
  </div>`

  var tag = Vue.extend({
    template,
    props: {
      source: {
        type: Array,
        default: []
      }
    },
    data() {
      var dis_source = []
      this.source.forEach(function (item) {
        var obj = {
          text: item,
          bgc_no: Math.ceil(Math.random() * 10) - 1
        }
        dis_source.push(obj)
      })
      return {
        text: '',
        bgc: ['#e961b4', '#ed664b', '#7b6ac7', '#56abd1', '#f7af4c', '#fe5467', '#52c7bd', '#a479b7', '#cb81ce', '#5eabc5'],
        dis_source: dis_source
      }
    },
    methods: {
      add(text){
        if(text != ''){
          var count = this.source.length
          this.source.$set(count, text)
          this.dis_source.$set(count, {
            text: text,
            bgc_no: Math.ceil(Math.random() * 10) - 1
          })
          this.text = ''
        }
      },
      del(index){
        this.source.splice(index, 1)
        this.dis_source.splice(index, 1)
      }
    }
  })

  window.tag = tag
})(Vue, window)
