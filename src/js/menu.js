;(function (Vue, winodw) {


  var template = `<div class="list" v-for="item in source">
        <div class="menu-line" @click="toggle(item)" :class="{'active-line': item.open}">
          <i class="iconfont{{item.icon? ' icon-' + item.icon: '' }}"></i> <span class="menu-name">{{ item.name }}</span><b class="iconfont">&#xe600;</b>
        </div>

        <ul :style="{ height: item.open? 34*item.routes.length + 'px': '0px'}">
            <li v-for="route in item.routes" :class="{active: route.url == curPath}"><a :href="route.url">{{ route.name }}</a></li>
        </ul>

    </div>`


  var menu = Vue.extend({
    props: {
      source: {
        coerce: function (ar) {
          var path = location.href.replace(location.origin, '')
          ar.forEach(function (it) {
            if (it.routes.some(function (route) {
                return route.url == path
              })) {
              Vue.set(it, 'open', true)
            } else {
              Vue.set(it, 'open', false)
            }
          })

          return ar
        }
      }
    },
    data(){
      //返回当前路由
      return {curPath: location.href.replace(location.origin, '')}
    },
    template,
    methods: {
      toggle(item){
        if (item.open) return item.open = false

        this.source.forEach(function (it) {
          it.open = false
        })
        item.open = true
      }
    }

  })

  window.menu = menu

})(Vue, window)
