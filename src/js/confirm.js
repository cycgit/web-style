(function (Vue, window) {
  /*
  *
  *
  *
  *
  * */

    var template = `<div class="modal-mask" v-show="show"  transition="modal">
          <div class="modal-confirm">
            <h2 class="confirm-header">
                <i class="iconfont icon-questioncircle"></i> {{ title }}
            </h2>
            <div class="confirm-content">
                {{ content }}
            </div>
            <div class="confirm-btns">
                <button class="btn" @click="op(1)">取 消</button>
                <button class="btn btn-primary" @click="op(2)">确 定</button>
            </div>
        </div>
    </div>`


  var element = document.createElement('div');
  element.id = 'V-confirm'
  element.innerHTML = template
  document.body.appendChild(element)


  var $confirm = new Vue({
    el: '#V-confirm',
    data: {
      show: false,
      onCancel: false,
      onOk: false,
      title: '',
      content: ''
    },
    methods: {
      op(type){
        this.show = false
        if(type == '1'){
          if(this.onCancel) this.onCancel()
        }else{
          if(this.onOk) this.onOk()
        }

        this.onCancel = false
        this.onOk = false

        document.body.style.overflow = ''
      },
      alert(setting){
        this.title = setting.title ||  '标题'
        this.content = setting.content || '内容'
        this.onOk = setting.onOk || false
        this.onCancel = setting.onCancel || false
        this.show = true
        document.body.style.overflow = 'hidden'


      }
    }
  })

  window.$confirm = $confirm

})(Vue, window)