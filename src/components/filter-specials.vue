<template>
  <div>
    <h2>スペシャル</h2>
    <div class="d-flex flex-wrap">
      <special v-for="special in specials" :key="special.name" :special="special"></special>
    </div>
  </div>
</template>

<script>
import Const from '@/const'
import Special from '@/components/special'

export default {
  components: {
    Special: Special
  },
  data: function () {
    return {
      specials: []
    }
  },
  methods: {
    imgPath: function (imgName) {
      return require('../assets/icons/specials/' + imgName)
    }
  },
  created: function () {
    this.specials = Const.SPECIALS
  }
}
</script>
