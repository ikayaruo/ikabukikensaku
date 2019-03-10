<template>
  <div @click="filter()" class="wrapper">
    <img :src="imgPath(subweapon.name)" :class="{ selected: isSelected }" />
  </div>
</template>

<script>
export default {
  props: [
    'subweapon'
  ],
  data: function () {
    return {
    }
  },
  computed: {
    isSelected: function () {
      return this.$store.state.searchConditions.subweapon === this.subweapon.name
    }
  },
  methods: {
    imgPath: function (imgName) {
      return require('../assets/icons/subweapons/' + imgName + '.png')
    },
    filter: function () {
      if (this.isSelected === true) {
        this.removeFilter()
      } else {
        this.addFilter()
      }
    },
    addFilter: function () {
      this.$store.dispatch('filterDisplayData', {
        subweapon: this.subweapon.name
      })
    },
    removeFilter: function () {
      this.$store.dispatch('filterDisplayData', {
        subweapon: ''
      })
    }
  }
}
</script>

<style scoped>
  img {
    padding: 10px;
    background-color: black;
    border: 6px solid black;
  }
  .wrapper {
    margin: 5px;
  }
  .selected {
    border: 6px solid red;
  }
</style>
