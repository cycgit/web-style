import hello from './Hello.vue'
require('../less/index.less')

const WebStyle = {
  hello
}
if(typeof window != 'undefined') window.WebStyle = WebStyle

module.exports = WebStyle
