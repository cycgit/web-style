<template lang="html">
  <div class="input tags-wrap" @paste="pasteText($event)">
    <div class="tags" transition="tags" :style="{backgroundColor: bgc[item.bgc_no]}" v-for="item in disSource">
      <span class="content">{{item.text}}</span><span class="del" @click="delTag($index, false)">&times;</span>
    </div>
    <input class="tags-input" type="text" placeholder="标签，按 enter 创建" v-model="text" @keyup.enter="addTag(text)" @keydown.delete="delTag(source.length - 1, true)">
  </div>
</template>

<script>
export default {
  props: {
    source: {
      type: Array,
      default: []
    }
  },
  data () {
    var disSource = []
    this.source.forEach(function (item) {
      var obj = {
        text: item,
        bgc_no: Math.ceil(Math.random() * 10) - 1
      }
      disSource.push(obj)
    })
    return {
      text: '',
      bgc: ['#e961b4', '#ed664b', '#7b6ac7', '#56abd1', '#f7af4c', '#fe5467', '#52c7bd', '#a479b7', '#cb81ce', '#5eabc5'],
      disSource: disSource
    }
  },
  methods: {
    pasteText (e) {
      e.preventDefault()
      var text = (e.clipboardData || window.clipboardData).getData('text')
      this.addTag(text)
    },
    addTag (text) {
      if (text.trim() != '') {
        var count = this.source.length
        this.source.$set(count, text)
        this.disSource.$set(count, {
          text: text,
          bgc_no: Math.ceil(Math.random() * 10) - 1
        })
        this.text = ''
      }
    },
    delTag (index, way) {
      if (way) {
        if (index >= 0 && this.text == '') {
          this.source.splice(index, 1)
          this.disSource.splice(index, 1)
        }
      } else {
        this.source.splice(index, 1)
        this.disSource.splice(index, 1)
      }
    }
  }
}
</script>

<style lang="scss">
.tags-wrap{
  width: 100%;
  height: 100%;
  outline: none;
  &::after{
    content: "";
    display: block;
    height: 0;
    clear: both;
    }
}

.tags, .tags-input{
  position: relative;
  float: left;
  color: #fff;
  line-height: 28px;
  margin: 0 4px 4px 0;
  padding: 0 22px 0 10px;
  border-radius: 6px;
  .content{
    line-height: 28px;
  }
  .del{
    width: 22px;
    height: 28px;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: -1px;
    right: 0;
  }
}

.tags-input{
  font-size: 14px;
  padding: 0;
  background-color: inherit;
  border: none;
  color: inherit;
  width: 10em;
}
.tags-enter, .tags-leave{
  transform: scale(0.9);
  opacity: 0;
}
.tags-transition{
  transition: all .3s ease;
}
</style>
