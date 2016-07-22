<template>
  <div>
    <div v-bind:class="{'affix': affixed}"
         v-bind:style="styles">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      offset: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        affixed: false,
        styles: {},
        flag: null
      }
    },
    methods: {
      scrolling () {
        const scrollTop = this.getScroll(window, true)
        const elementOffset = this.getOffset(this.$el)

        if (!this.affixed && scrollTop > elementOffset.top) {
          this.affixed = true
          this.styles = {
            top: this.offset + 'px',
            left: elementOffset.left + 'px',
            width: this.$el.offsetWidth + 'px'
          }
        }
        if (this.affixed && scrollTop < elementOffset.top) {
          this.affixed = false
          this.styles = {}
        }
      },
      getScroll (w, top) {
        let ret = w['page' + (top ? 'Y' : 'X') + 'Offset']
        const method = 'scroll' + (top ? 'Top' : 'Left')
        if (typeof ret !== 'number') {
          const d = w.document
          // ie6,7,8 standard mode
          ret = d.documentElement[method]
          if (typeof ret !== 'number') {
            // quirks mode
            ret = d.body[method]
          }
        }
        return ret
      },
      getOffset (element) {
        const rect = element.getBoundingClientRect()
        const body = document.body
        const clientTop = element.clientTop || body.clientTop || 0
        const clientLeft = element.clientLeft || body.clientLeft || 0
        const scrollTop = this.getScroll(window, true)
        const scrollLeft = this.getScroll(window)
        return {
          top: rect.top + scrollTop - clientTop,
          left: rect.left + scrollLeft - clientLeft
        }
      },
      delay () {
        // 优化滚动
        if (this.flag) {
          clearTimeout(this.flag)
          this.flag = null
        } else {
          this.flag = setTimeout(this.scrolling, 14)
        }
      }

    },
    ready () {
      window.addEventListener('scroll', this.delay)
      window.addEventListener('resize', this.delay)
    },
    destroyed () {
      window.removeEventListener('scroll', this.delay)
      window.removeEventListener('resize', this.delay)
    }

  }
</script>

<style lang="scss">
.affix {
  position: fixed;
}
</style>
