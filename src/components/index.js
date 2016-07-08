import hello from './Hello.vue'


const WebStyle = {
  hello
}
if(typeof window != 'undefined') window.WebStyle = WebStyle

module.exports = WebStyle
