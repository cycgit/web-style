(function (Vue, components) {

  /**
   *    选择日期组件
   *    @params val (10位或者13位) 默认取当前日期
   *
   *    @events lineDate-change(val)
   */


  function getCalendar(y, m) {
    //输出一个日历数据源  月份不必减1
    y = parseInt(y)
    m = parseInt(m)
    var time = new Date(y, m - 1, 1)
    var lastDate,
      nextDate
    var lastMonth = m - 1
    var nextMonth = m + 1
    if (m == 1) {
      lastDate = "" + (y - 1) + '-' + +12 + '-'
      nextDate = "" + y + '-' + 2 + '-'
      lastMonth = 12
    } else if (m == 12) {
      lastDate = "" + y + '-' + 11 + '-'
      nextDate = "" + (y + 1) + '-' + 1 + '-'
      nextMonth = 1
    } else {
      lastDate = "" + y + '-' + (m - 1) + '-'
      nextDate = "" + y + '-' + (m + 1) + '-'
    }
    var maxNumber = 42
    var r1 = [],
      r2 = [],
      r3 = []
    var lastFix = time.getDay() - 1
    lastFix = lastFix < 0 ? lastFix + 7 : lastFix
    var lastMaxDate = new Date(y, m - 1, 0).getDate() //上个月份最大天数
    var maxDate = new Date(y, m, 0).getDate()  //当前月份的
    var i, t
    for (i = 0; i < lastFix; i++) {
      t = lastMaxDate - lastFix + i + 1
      r1[i] = {month: lastMonth, day: t, data: lastDate + t}
    }
    for (i = 0; i < maxDate; i++) {
      t = i + 1
      r2[i] = {month: m, day: t, data: "" + y + '-' + +m + '-' + t}
    }
    var nextFix = maxNumber - maxDate - lastFix
    for (i = 0; i < nextFix; i++) {
      t = i + 1
      r3[i] = {month: nextMonth, day: t, data: nextDate + t}
    }
    var result = r1.concat(r2, r3)
    var ar = []
    for (i = 0; i < 6; i++) {
      ar.push(result.splice(0, 7))
    }
    return ar
  }

  let Line = Vue.extend({
    props: ['items', 'cur', 'sel', 'month'],
    data(){
      return {}
    },
    template: `<tr>
                     <td v-for="item in items" v-bind:class="{'dp-last': month!= item.month, 'dp-today': cur == item.data, 'dp-select': sel == item.data}">
                                <span @click="click(item)">{{ item.day }}</span>
                            </td>
                        </tr>`,
    methods: {
      click(item){
        this.$dispatch('click', item.data)
      }
    }
  })


  let template = ` 
                    <div v-el:dp>
                      <div class="dp-out">
                      <input type="text" class="input" placeholder="请选择时间" @focus="show=true" :value="out">
                        <i class="iconfont icon-calendar"></i>
                      </div>
                    
                    <div class="dp" v-show="show">
                    <div class="dp-header1">
                       <div class="dp-input-wrap" v-if="showtime">
                            <input class="input" placeholder="请选择日期" :value="outd">
                        </div>
                        
                          <div class="dp-input-wrap" v-if="showtime">
                            <div class="input-wrap">
                                <v-time :val="time" v-on:time-change="change" v-ref:time></v-time>
                            </div>
                          </div>
                          
                        <div class="dp-text" v-if="!showtime">{{out}}</div>  
                        <i class="iconfont icon-crosscircle" @click="show=false"></i>
                    </div>
                    
                    
                    
                    <div class="dp-header2"><a class="dp-h-1" @click="cy(-1)">«</a><a class="dp-h-2" @click="cm(-1)">‹</a>
                        <span class="dp-ym">{{y}}年 {{m}}月</span>
                        <a class="dp-h-3" @click="cm(1)">›</a><a class="dp-h-4" @click="cy(1)">»</a></div>
                    <div class="dp-body">
                        <table class="dp-table">
                            <thead>
                            <tr>
                                <th><span>一</span></th>
                                <th><span>二</span></th>
                                <th><span>三</span></th>
                                <th><span>四</span></th>
                                <th><span>五</span></th>
                                <th><span>六</span></th>
                                <th><span>日</span></th>
                            </tr>
                            </thead>
                            <tbody>
                                  <tr is="v-line" v-for="cell in lineDate" :items="cell" :month="m" :cur="cur" :sel="sel"></tr>   
                            </tbody>
                        </table>

                    </div>
                    <div class="dp-footer"><a>今天</a>  <span class="btn btn-primary btn-sm" @click="show=false">确 定</span></div>
                </div>
                
                
                </div>
`


  let datePicker = Vue.extend({
    template: template,
    props: {
      val: {
        coerce (val) {
          return val
        }
      },
      short: {
        coerce (val) {
          //支持10位
          return val ? true : false
        }
      },
      showtime: {
        coerce (val) {
          //支持显示时间
          return val ? true : false
        }
      }
    },
    data(){
      var show = new Date()
      var time = ''
      if (this.val) {
        let stamp = this.short ? this.val * 1000 : this.val
        show = new Date(parseInt(stamp))
        var sel = show.getFullYear() + '-' + (show.getMonth() + 1) + '-' + show.getDate()
        time = show.getHours() + ':' + show.getMinutes() + ':' + show.getSeconds()
      }

      let n = new Date()
      let cur = "" + n.getFullYear() + '-' + (n.getMonth() + 1) + '-' + n.getDate() //当前日期

      let y = show.getFullYear()
      let m = show.getMonth() + 1


      var lineDate = getCalendar(y, m)  //显示的日历


      return {
        cur,
        sel,
        y,
        m,
        lineDate,
        time,   //用于时间组件
        show: false
      }
    },
    computed: {
      out(){
        if (!this.val) return ''


        var d = this.short ? new Date(this.val * 1000) : new Date(parseInt(this.val))

        var dy = (d.getFullYear()) + '-' + ('0' + (d.getMonth()+1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2)
        var dm = ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2) + ':' + ('0' + d.getSeconds()).slice(-2)
        if (this.showtime) {
          return dy + ' ' + dm
        } else {
          return dy
        }


      },
      outd(){
        if (!this.val) return ''


        var d = this.short ? new Date(this.val * 1000) : new Date(parseInt(this.val))

        var dy = (d.getFullYear()) + '-' + ('0' + (d.getMonth()+1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2)
        return dy
      }
    },
    ready(){
      var dp = this.$els.dp
      var time = this.$els.time
      dp.addEventListener('click', function (e) {
        if (time) time.show = false
        e.stopPropagation()
      })
      document.body.addEventListener('click', function () {
        this.show = false
      }.bind(this))
    },
    methods: {
      cm: function (flag) {
        //前进后退月
        if (flag == -1) {
          if (this.m == 1) {
            this.init(parseInt(this.y) - 1, 12)
          } else {
            this.init(this.y, parseInt(this.m) - 1)
          }
        } else {
          if (this.m == 12) {
            this.init(parseInt(this.y) + 1, 1)
          } else {
            this.init(this.y, parseInt(this.m) + 1)
          }
        }
      },
      cy: function (flag) {
        //前进后退年

        let y = flag == -1 ? parseInt(this.y) - 1 : parseInt(this.y) + 1

        this.init(y, this.m)

      },
      init(y, m){
        this.lineDate = getCalendar(y, m)
        this.y = y
        this.m = m;
      },
      change(time){
        var sp = time.split(':')
        if (this.sel) {
          var sp2 = this.sel.split('-')

          for (var i = 0; i < sp.length; i++) {
            sp[i] = parseInt(sp[i])
            sp2[i] = parseInt(sp2[i])
          }
          this.val = new Date(sp2[0], sp2[1] - 1, sp2[2], sp[0], sp[1], sp[2]).getTime()   //更新时间错


          if (this.short) {
            this.val = this.val / 1000
          }
        } else {

        }

      }
    },
    events: {
      click(data){
        //点击事件

        this.sel = data
        this.show = false
        var ar = data.split('-')
        var m = ar[1]
        var y = ar[0]


        if (this.showtime) {
          var n = this.short ? new Date(this.val * 1000) : new Date(parseInt(this.val))
          this.val = new Date(ar[0], ar[1] - 1, ar[2], n.getHours(), n.getMinutes(), n.getSeconds()).getTime()
        } else {
          this.val = new Date(ar[0], ar[1] - 1, ar[2]).getTime()
        }


        if (this.short) {
          this.val = this.val / 1000
        }

        if (m != this.m) {
          this.init(y, m)
        }
      }
    },
    components: {
      'v-line': Line,
      'v-time': components.timePicker
    }
  })


  components.datePicker = datePicker


})(Vue, function () {
  window.components = window.components ? window.components : {}
  return window.components
}())



