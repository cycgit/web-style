<template>

  <div class="list" v-for="item in source">
    <div class="menu-line" @click="toggle(item)" :class="{'active-line': item.open}">
      <i class="iconfont{{item.icon? ' icon-' + item.icon: '' }}"></i> <span class="menu-name">{{ item.name }}</span><b class="iconfont">&#xe600;</b>
    </div>

    <ul :style="{ height: item.open? 34*item.routes.length + 'px': '0px'}">
      <li v-for="route in item.routes" :class="{active: route.url == curPath}"><a :href="route.url">{{ route.name }}</a></li>
    </ul>

  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">

</style>
