<template>
  <div>
    <h2>ブキリスト</h2>
    <table class="table table-bordered table-striped">
      <thead class="thead-dark">
        <th></th>
        <th>ブキ名</th>
        <th>サブ</th>
        <th>スペシャル</th>
        <th>必要ポイント</th>
      </thead>
      <tbody>
        <tr v-for="data in displayData" :key="data.name">
          <td>
            <img :src="imgPath(data.name)" />
          </td>
          <td>
            <a :href="data.wiki" target="_blank">
              {{data.name}}
            </a>
          </td>
          <td>{{data.subweapon}}</td>
          <td>{{data.special}}</td>
          <td>{{data.spPoint}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    displayData: function (imgName) {
      return this.$store.state.displayData
    }
  },
  methods: {
    imgPath: function (imgName) {
      return require('../assets/icons/buki/' + imgName + '.png')
    }
  }
}
</script>

<style scoped>
  img {
    width: 100px;
  }
</style>
