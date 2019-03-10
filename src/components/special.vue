<template>
  <div @click="filter()" class="wrapper">
    <img :src="imgPath(special.name)" :class="{ selected: isSelected }" />
  </div>
</template>

<script>
export default {
  props: [
    'special'
  ],
  data: function () {
    return {
    }
  },
  computed: {
    isSelected: function () {
      return this.$store.state.searchConditions.special === this.special.name
    }
  },
  methods: {
    imgPath: function (imgName) {
      return require('../assets/icons/specials/' + imgName + '.png')
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
        special: this.special.name,
        bomb: ''
      })
    },
    removeFilter: function () {
      this.$store.dispatch('filterDisplayData', {
        special: '',
        bomb: ''
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
