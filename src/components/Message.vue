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
    data () {
      return {
        show: false,
        type: '1',
        content: '',
        flag: {}
      }
    },
    methods: {
      success (content) {
        this.appear(content, 1)
      },
      error (content) {
        this.appear(content, 2)
      },
      appear (content, type) {
        this.content = content
        this.type = type
        this.show = true
        clearTimeout(this.flag)
        this.flag = setTimeout(function () {
          this.show = false
        }.bind(this), 2000)
      }
    }
  }
</script>

<style lang="scss">
  /*提示框*/
  .message {
    position: fixed;
    left: 50%;
    top: -45px;
    box-sizing: border-box;
    transition: top .5s ease;
    z-index: 10001;
    .message-content {
      position: relative;
      right: 50%;
      padding: 5px 14px;
      border-radius: 6px;
      border: 1px solid #d9d9d9;
      background: #fff;
      display: block;
      box-sizing: border-box;
      box-shadow: 0 1px 8px hsla(0, 0%, 39%, .2);
    }

    .icon-checkcircle {
      color: #87d068;
      font-size: 12px;
      -webkit-text-stroke-width: 0;

    }
    .icon-crosscircle {
      color: #f50;
      font-size: 12px;
      -webkit-text-stroke-width: 0;
    }
  }

  .message-move {
    top: 24px;
  }
</style>
