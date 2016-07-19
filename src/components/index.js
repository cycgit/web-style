import Box from './Box.vue'
import Message from './Message.vue'
import Confirm from './Confirm.vue'
const WebStyle = {
  Box,
  Message,
  Confirm
}

window.WebStyle = WebStyle

if (process.env.NODE_ENV === 'production') {
  require('../assets/sass/index.scss')
}

module.exports = WebStyle
