import hello from './Hello.vue'
// import timePicker from './TimePicker.vue'
require('../sass/index.scss')
// require('../less/a.css')

const WebStyle = {
  hello,
  timePicker
}
if(typeof window != 'undefined') window.WebStyle = WebStyle

module.exports = WebStyle
