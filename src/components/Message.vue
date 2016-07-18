<template>
  <div class="message" :class="{'message-move': show}">
    <div class="message-content">
      <i class="iconfont" :class="{'icon-checkcircle': type == 1, 'icon-crosscircle': type == 2}"></i>
      <span>{{ content }}</span>
    </div>
  </div>

</template>

<script>
  export default {

  }
</script>

<style>

</style>
