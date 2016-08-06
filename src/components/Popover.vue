<template lang="html">
  <div class="v-popover-tag" @click.stop="pop($event)">
    <slot></slot>
  </div>
  <div class="v-popover-wrap" :style="{left: x + 'px', top: y + 'px', visibility: show ? 'visible' : 'hidden'}" v-el:pop>
    <div class="v-popover-box">
      <div class="v-popover-title">{{title}}</div>
      <div class="v-popover-content">{{content}}</div>
      <div :class="['v-popover-arrow', placement == 'top' ? 'v-popover-arrow-top' : 'v-popover-arrow-bottom']" :style="{left: arrowLeft + 'px'}"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '标题'
    },
    content: {
      type: String,
      default: '内容'
    },
    placement: {
      type: String,
      default: 'top'
    }
  },
  data () {
    return {
      show: false,
      arrowLeft: 0,
      x: 0,
      y: 0
    }
  },
  methods: {
    pop (e) {
      if (this.show) {
        this.show = false
        return
      }
      var target = e.target
      this.arrowLeft = target.offsetWidth / 2
      this.x = target.offsetLeft
      if (this.placement == 'top') {
        this.y = target.offsetTop - this.$els['pop'].offsetHeight - 3
      } else {
        this.y = target.offsetTop + target.offsetHeight + 3
      }
      this.show = true
    }
  }
}
</script>

<style lang="scss">
//popover
.v-popover-tag{
  display: inline-block;
}
.v-popover-wrap{
  position: absolute;
}
.v-popover-box{
  box-sizing: border-box;
  width: 177px;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  box-shadow: 0 1px 6px hsla(0,0%,39%,.2);
  position: relative;
}
.v-popover-title{
  padding: 0 16px;
  line-height: 32px;
  height: 32px;
  border-bottom: 1px solid #e9e9e9;
  color: #666;
}
.v-popover-content{
  padding: 8px 16px;
  color: #666;
  word-break: break-all;
}
.v-popover-arrow{
  position: absolute;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  // left: 50%;
  margin-left: -5px;
  &:after{
    content: " ";
    margin-left: -4px;
    border: 4px solid transparent;
    position: absolute;
    width: 0;
    height: 0;
  }
}
.v-popover-arrow-top{
  border-bottom-width: 0;
  border-top-color: #d9d9d9;
  bottom: -5px;
  &:after{
    border-top-color: #fff;
    bottom: -3px;
  }
}
.v-popover-arrow-bottom{
  border-top-width: 0;
  border-bottom-color: #d9d9d9;
  top: -5px;
  &:after{
    border-bottom-color: #fff;
    top: -3px;
  }
}
</style>
