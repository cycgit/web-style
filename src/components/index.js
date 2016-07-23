import Box from './Box.vue'
import Message from './Message.vue'
import Confirm from './Confirm.vue'
import TimePicker from './TimePicker.vue'
import DatePicker from './DatePicker.vue'
import Menu from './Menu.vue'
import Tags from './Tags.vue'

const WebStyle = {
  Box,
  Message,
  Confirm,
  TimePicker,
  DatePicker,
  Menu,
  Tags
}

window.WebStyle = WebStyle

if (process.env.NODE_ENV === 'production') {
  require('../assets/sass/index.scss')
}

module.exports = WebStyle
