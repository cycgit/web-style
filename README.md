# 下载

## npm
Web-Style 推荐使用 [npm][1] 下载或者访问 [Web-Style][2]

```
$ npm install web-style  --save
```

# 内容说明


## 编译文件
Web-Style 是通过 [webpack][3] 进行打包编译。编译文件都在dist目录下, 目录结构:

```
dist/
├── css/
│   └─ web-style.css
├── js/
│   └─ web-style.js
└── fonts/
    ├─ iconfont.eot
    ├─ iconfont.svg
    ├─ iconfont.ttf
    └─ iconfont.woff
```
上面展示的就是Web-Style编译文件, 编译文件可以直接使用到任何web项目中. 提供了编译好的css文件, 包括基础样式和组件的样式。提供了编译好的vue组件 同时还提供了一套 `iconfont` 的图标字体

## 源文件
Web-Style 源文件目录结构:
```
src/
├── assets/
│   ├─ sass/
│   └─ fonts/
└── components/
```
`assets` 下存放公共的样式和字体文件, 采用 `sass` 预编译 以及采用 `autoprefixer` 添加兼容性的前缀

# 使用方法
## ES6
```
import Vue from 'vue'
import { Message } from 'Web-style'

new Vue({
    el: 'body',
    components:{
       'v-message': Message
    }
})
```
## 浏览器使用

> **Web-Style** 依赖 **vue** , 必须在 **web-style**前引入.




```
<script src="path/to/vue.js"></script>
<script src="path/to/web-style.js"></script>
<script>
    var app = new Vue({
        el: "body",
        components: {
            alert: VueStrap.alert
        }
    })
</script>
```

# 编译CSS 和 JavaScript 文件
Web-Style 使用 webpack 作为编译系统, 并且对外提供了一些方便的方法用于编译整个框架。
## 安装依赖
推荐使用 [cnpm][4] 安装依赖
```
$ cnpm install
```
## 打包公共的样式
```
$ npm run static
```
该指令执行后会把 `assets/` 下的文件打包到 `static/` 这样做的目的是在开发的时候无需重复打包公共部分, 提升编译效率。一旦修改`assets/` 一定要第执行该指令
## 开发模式
```
$ npm run dev
```
本地开启一个服务器, 自动打开浏览器访问index.html文件, 进行开发vue组件

## 打包文件
```
$ npm run build
```
会打包所有组件和公共的样式生成到dist目录下。


  [1]: https://www.npmjs.com/
  [2]: https://github.com/cycgit/web-style/
  [3]: http://webpack.github.io/
  [4]: https://npm.taobao.org/
