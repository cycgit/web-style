<template>
  <tr>
    <td v-for="item in items" v-bind:class="{'dp-last': month!= item.month, 'dp-today': cur == item.data, 'dp-select': sel == item.data}">
      <span @click="click(item)">{{ item.day }}</span>
    </td>
  </tr>
</template>

<script>
  export default {
    props: ['items', 'cur', 'sel', 'month'],
    methods: {
      click (item) {
        this.$dispatch('click', item.data)
      }
    }
  }
</script>

