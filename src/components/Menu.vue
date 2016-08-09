<template>
  <div class="menu">
    <div class="menu-top">
      <h2>{{title}}</h2>
    </div>
  <div class="list" v-for="item in source">
    <div class="menu-line" @click="toggle(item)" :class="{'active-line': item.open}">
      <i class="iconfont{{item.icon? ' icon-' + item.icon: '' }}"></i> <span class="menu-name">{{ item.name }}</span><b class="iconfont">&#xe600;</b>
    </div>

    <ul :style="{ height: item.open? 34*item.routes.length + 'px': '0px'}">
      <li v-for="route in item.routes" :class="{active: route.url == curPath}"><a :href="route.url">{{ route.name }}</a></li>
    </ul>

  </div>
  </div>

</template>

<script>
  var location = window.location
  export default {
    props: {
      source: {
        coerce: function (ar) {
//          var path = location.href.replace(location.origin, '')
//          ar.forEach(function (it) {
//            if (it.routes.some(function (route) {
//              return route.url == path
//              })) {
//              Vue.set(it, 'open', true)
//            } else {
//              Vue.set(it, 'open', false)
//            }
//          })

          return ar
        }
      },
      title: {
        type: String,
        default: '系统名称'
      }
    },
    data () {
      // 返回当前路由
      return {curPath: location.href.replace(location.origin, '')}
    },
    methods: {
      toggle (item) {
        if (item.open) return

        item.open = false

        this.source.forEach(function (it) {
          it.open = false
        })
        item.open = true
      }
    }

  }
</script>

<style lang="scss">
  .menu {
    width: 220px;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: scroll;
    position: fixed;
    border-right: 1px solid #ddd;
    box-sizing: border-box;

    ul {
      background: #FAFAFA;
      transition: height .3s;
      overflow: hidden;
    }
    li {
      padding: 7px 0 7px 46px;
      :hover {
        color: #61b98e;
      }
    }
    a {
      color: #666;
    }

    .menu-top {
      text-align: center;
      padding: 20px 0;
      color: #61b98e;
    }
    .active a {
      color: #61b98e;
    }
  }

  .main {
    display: flex;
    margin-left: 220px;
    height: 100vh;
    flex-direction: column;
    .content {
      flex-grow: 1;
      overflow: scroll;
      padding: 0 10px;
    }
  }

  .menu-line {
    height: 20px;
    padding-top: 14px;
    padding-bottom: 6px;
    cursor: pointer;

    .menu-name {
      width: 130px;
      white-space: nowrap;
      overflow: hidden;
      display: inline-block;
      text-overflow: ellipsis;
    }

    i {
      margin-left: 10px;
      padding: 3px 12px 0;
      font-size: 12px;
      float: left;
      min-width: 12px;
    }

    b {
      margin-right: 20px;
      font-size: 12px;
      font-weight: bold;
      transform: scale(0.8);
      transition: transform .3s;
      float: right;
    }
  }

  .active-line {
    b {
      font-size: 12px;
      font-weight: bold;
      transform: scale(0.8) rotate(90deg);
    }
  }

  .header {
    height: 64px;
    box-sizing: border-box;
    padding: 20px;
    background-color: #f5f5f5;

    .left-part {
      float: left;
    }
    ul {
      float: right;
    }
    li {
      display: inline-block;
      margin: 0 5px;
      a {
        color: #61b98e;
      }
    }
  }

  @media screen and (max-width: 640px) {
    .menu {
      display: none;
    }
    .main {
      margin-left: 0;
    }
  }

</style>
