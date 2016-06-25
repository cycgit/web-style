(function (Vue, components) {

  /**
   *    弹出框组件: modal
   *
   *
   *
   */
  var template = `<div class="modal-mask" @click="show=false" v-show="show" transition="modal">
        <div class="modal-box">
            <div class="modal-header">
                <h3>{{title}}</h3>
                <i class="iconfont icon-cross" @click="mm"></i>
            </div>
            <div class="modal-body">
            
                <div class="form">
                    <div class="row">
                        <div class="col-2 label col-offset-2">账号:</div>
                        <div class="col-4">
                            <input type="text" class="input">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-2 label col-offset-2">密码:</div>
                        <div class="col-4">
                            <input type="text" class="input">
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn">取 消</button>
                <button class="btn btn-primary">确 定</button>
            </div>
        </div>
    </div>`

  var modal = Vue.extend({
    template,
    props:{
      title:{
        default: '标题'
      }
    },
    data(){
        return {
          show: true
        }
    }
  })

  components.modal = modal


})(Vue, function () {
  window.components = window.components ? window.components : {}
  return window.components
}())



