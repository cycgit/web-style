import box from './Box.vue'

const WebStyle = {
  box
}

window.WebStyle = WebStyle

if (process.env.NODE_ENV === 'production') {
  require('../assets/sass/index.scss')
}

module.exports = WebStyle
