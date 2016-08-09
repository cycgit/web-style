<template lang="html">
  <div class="v-tabs-nav-wrap" v-el:tabs>
    <div class="v-tabs-nav clear" :style="{width: navWidth + 'px'}">
      <div class="v-tabs-nav-item" v-for="item in source" @click="switch($index)">{{item.title}}</div>
    </div>
  </div>
  <div class="v-tabs-wrap">
    <div class="v-tabs-content" :style="{width: source.length * 100 + '%', left: - active + '00%'}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    source: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      active: 0,
      navWidth: 'auto'
    }
  },
  methods: {
    switch (index) {
      if (this.active != index) {
        this.active = index
      }
    }
  },
  ready: function () {
    // 计算宽度
    var arr = this.$els['tabs'].querySelectorAll('.v-tabs-nav-item')
    var width = 0
    arr.forEach(function (item) {
      // 不能用offsetWidth
      width += Math.ceil(window.getComputedStyle(item, null).width.slice(0, -2)) + 64
    })
    this.navWidth = width - 24
  }
}
</script>

<style lang="scss">
.v-tabs-nav-wrap{
  width: 100%;
  overflow-x: hidden;
  height: 37px;
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 16px;
  .v-tabs-nav{
    position: relative;
    height: 100%;
    transition: left .6s ease;
    .v-tabs-nav-item{
      float: left;
      padding: 8px 20px;
      margin-right: 24px;
      cursor: pointer;
      border-bottom-width: 1px;
      border-bottom-style: solid;
      border-bottom-color: transparent;
      &:last-child{
        margin-right: 0;
      }
    }
    .v-tabs-nav-active{
      border-bottom-color: #2db7f5;
    }
  }
}
.v-tabs-wrap{
  width: 100%;
  overflow-x: hidden;
  .v-tabs-content{
    position: relative;
    display: flex;
    transition: left .6s cubic-bezier(0.65, 0.05, 0.36, 1);;
    &>*{
      display: block;
      flex: 1;
    }
  }
}
</style>
