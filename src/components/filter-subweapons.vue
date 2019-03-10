<template>
  <div>
    <h2>サブ</h2>
    <div class="d-flex flex-wrap justify-content-start">
      <subweapon v-for="subweapon in subweapons" :key="subweapon.name" :subweapon="subweapon"></subweapon>
    </div>
  </div>
</template>

<script>
import Const from '@/const'
import Subweapon from '@/components/subweapon'

export default {
  components: {
    Subweapon: Subweapon
  },
  data: function () {
    return {
      subweapons: []
    }
  },
  methods: {
    imgPath: function (imgName) {
      return require('../assets/icons/subweapons/' + imgName)
    }
  },
  created: function () {
    this.subweapons = Const.SUBWEAPONS
  }
}
</script>
