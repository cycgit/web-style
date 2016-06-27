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
                <i class="iconfont icon-cross" @click="show=false"></i>
            </div>
            <div class="modal-body">
            
                <slot></slot>
                
                
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
          show: false
        }
    }
  })

  components.modal = modal


})(Vue, function () {
  window.components = window.components ? window.components : {}
  return window.components
}())



