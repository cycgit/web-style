import Vue from 'vue'
import WebStyle from './components/index'
/* eslint-disable no-new */

var data = [
  {
    'name': '库存',
    'icon': 'tago',
    'routes': [
      {
        'name': 'SKU查询',
        'url': '/index.html'
      },
      {
        'name': '库存预警',
        'url': '/p2'
      },
      {
        'name': '安全损耗比',
        'url': '/p3'
      }
    ],
    'open': true
  },
  {
    'name': '人员管理',
    'icon': 'solution',
    'routes': [
      {
        'name': '修改权限',
        'url': '/p4'
      },
      {
        'name': '人员列表',
        'url': '/p5'
      }
    ],
    'open': false
  },
  {
    'name': '全英雄联盟最骚的骚猪',
    'icon': 'enviromento',
    'routes': [
      {
        'name': '小轩在不在',
        'url': '/p7'
      },
      {
        'name': '我是娇妹',
        'url': '/p6'
      }
    ],
    'open': false
  }
]

new Vue({
  el: 'body',
  data: {
    menuData: data
  },
  methods: {
    toggle () {
      this.$refs.confirm.alert('显示成功')
    }
  },
  components: {
    menu: WebStyle.Menu
  }
})
