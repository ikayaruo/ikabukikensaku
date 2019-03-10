<template>
  <div @click="filter()" class="wrapper">
    <img :src="imgPath(bomb.name)" :class="{ selected: isSelected, disabled: isDisabled }" />
  </div>
</template>

<script>
export default {
  props: [
    'bomb'
  ],
  data: function () {
    return {
    }
  },
  computed: {
    isSelected: function () {
      return this.$store.state.searchConditions.bomb === this.bomb.name
    },
    isDisabled: function () {
      return this.$store.state.searchConditions.special !== 'ボムピッチャー'
    }
  },
  methods: {
    imgPath: function (imgName) {
      return require('../assets/icons/bombs/' + imgName + '.png')
    },
    filter: function () {
      if (this.isDisabled) return
      if (this.isSelected === true) {
        this.removeFilter()
      } else {
        this.addFilter()
      }
    },
    addFilter: function () {
      this.$store.dispatch('filterDisplayData', {
        bomb: this.bomb.name
      })
    },
    removeFilter: function () {
      this.$store.dispatch('filterDisplayData', {
        bomb: ''
      })
    }
  }
}
</script>

<style scoped>
  img {
    width: 70px;
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
  .disabled {
    background-color: gray;
    border: 6px solid gray;
  }
</style>
