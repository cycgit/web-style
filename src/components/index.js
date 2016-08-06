import Box from './Box.vue'
import Message from './Message.vue'
import Confirm from './Confirm.vue'
import TimePicker from './TimePicker.vue'
import DatePicker from './DatePicker.vue'
import Menu from './Menu.vue'
import Tags from './Tags.vue'
import Affix from './Affix.vue'
import Pagination from './Pagination.vue'
import Popover from './Popover.vue'
import Tabs from './Tabs.vue'

const WebStyle = {
  Box,
  Message,
  Confirm,
  TimePicker,
  DatePicker,
  Menu,
  Tags,
  Affix,
  Pagination,
  Popover,
  Tabs
}

window.WebStyle = WebStyle

if (process.env.NODE_ENV === 'production') {
  require('../assets/sass/index.scss')
}

module.exports = WebStyle
