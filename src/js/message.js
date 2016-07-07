(function (Vue, window) {
  /*
   *   window.$message
   *   用法:$message.success(content)
   *        $message.error(content)
   *
   *
   *
   * */

  var template = `<div class="message" :class="{'message-move': show}">
        <div class="message-content">
            <i class="iconfont" :class="{'icon-checkcircle': type == 1, 'icon-crosscircle': type == 2}"></i>
            <span>{{ content }}</span>
        </div>
    </div>`

  var element = document.createElement('div');
  element.id = 'V-message'
  element.innerHTML = template
  document.body.appendChild(element)


  var $message = new Vue({
    el: '#V-message',
    data: {
      show: false,
      type: '1',
      content: '',
      flag: ''
    },
    methods: {
      success(content){
        this.appear(content, 1)
      },
      error(content){
        this.appear(content, 2)
      },
      appear(content, type){
        this.content = content
        this.type = type
        this.show = true
        clearTimeout(this.flag)
        this.flag = setTimeout(function(){
          this.show = false
        }.bind(this),2000)
      }
    }
  })

  window.$message = $message

})(Vue, window)
