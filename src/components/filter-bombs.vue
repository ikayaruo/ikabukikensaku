<template>
  <div>
    <h2>ボムピッチャー</h2>
    <div class="d-flex flex-wrap">
      <bomb v-for="bomb in bombs" :key="bomb.name" :bomb="bomb"></bomb>
    </div>
  </div>
</template>

<script>
import Const from '@/const'
import Bomb from '@/components/bomb'

export default {
  components: {
    Bomb: Bomb
  },
  data: function () {
    return {
      bombs: []
    }
  },
  methods: {
    imgPath: function (imgName) {
      return require('../assets/icons/bombs/' + imgName)
    }
  },
  created: function () {
    this.bombs = Const.BOMBS
  }
}
</script>
