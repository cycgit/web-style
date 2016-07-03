## web-style
基于vue的一套简单精美的web组件。
<a href="http://cycgit.coding.me/ws-document/">
参考文档
</a>

## 开始

1. 创建一个html
1. 把dist目录拷贝到项目的目录下
1. 页面引入web-style.css vue.js web-style.js
1. 开始使用


## vue组件的使用

所有组件捆绑到components下


```
new Vue({
    el: '#app',
    components: {
        'v-datePicker': components.datePicker
    }
})
```