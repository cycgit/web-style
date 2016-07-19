<template>
  <div class="modal-mask" v-show="show" transition="modal">
    <div class="modal-confirm">
      <h2 class="confirm-header">
        <i class="iconfont icon-questioncircle"></i> {{ title }}
      </h2>
      <div class="confirm-content">
        {{ content }}
      </div>
      <div class="confirm-btns">
        <button class="btn" @click="op('cancel')">取 消</button>
        <button class="btn btn-primary" @click="op('ok')">确 定</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        show: false,
        onCancel: false,
        onOk: false,
        title: '',
        content: ''
      }
    },
    methods: {
      alert (setting) {
        this.title = setting.title || '确认操作'
        this.content = setting.content || '确认内容'
        this.onOk = setting.onOk || false
        this.onCancel = setting.onCancel || false
        this.show = true
        document.body.style.overflow = 'hidden'
      },
      op (type) {
        this.show = false
        if (type === 'cancel') {
          if (this.onCancel) this.onCancel()
        } else {
          if (this.onOk) this.onOk()
        }

        this.onCancel = false
        this.onOk = false

        document.body.style.overflow = ''
      }
    }
  }
</script>

<style lang="scss">
  .confirm-content{
    padding-left: 30px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .modal-confirm{
    width: 400px;
    box-sizing: border-box;
    padding: 30px 40px;
    background-color: #fff;
    border-radius: 6px;
    transition: transform .3s ease;
    i{
      color: #fa0;
      font-size: 24px;
      position: relative;
      top: 2px;
    }

    .confirm-btns{
      text-align: right;
    }
  }
</style>
