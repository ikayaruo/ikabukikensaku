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
        <th>射程</th>
      </thead>
      <tbody>
        <tr v-for="data in displayData" :key="data.name">
          <td>
            <img :src="imgPath('buki', data.name)" />
          </td>
          <td>
            <a :href="data.wiki" target="_blank">
              {{data.name}}
            </a>
          </td>
          <td>
            {{data.subweapon}}<br />
            <img :src="imgPath('subweapons', data.subweapon)" class="icon" />
          </td>
          <td>
            {{data.special}}<br />
            <img :src="imgPath('specials', data.special)" class="icon" />
            <img :src="imgPathBombPitcher(data.special)" class="bombpitcher-icon" v-if="data.special.indexOf('ボムピッチャー') > -1"/>
          </td>
          <td>{{data.spPoint}}</td>
          <td>
            {{data.range.toFixed(1)}} <span v-if="data.range === 0.0">?</span>
          </td>
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
    imgPath: function (type, imgName) {
      if (imgName.match('ボムピッチャー')) {
        imgName = 'ボムピッチャー'
      }
      return require('../assets/icons/' + type + '/' + imgName + '.png')
    },
    imgPathBombPitcher: function (imgName) {
      imgName = imgName.replace('ボムピッチャー', '')
      imgName = imgName.replace('ボム', '')
      return require('../assets/icons/bombs/' + imgName + '.png')
    }
  }
}
</script>

<style scoped>
  img {
    width: 100px;
  }
  img.icon {
    width: 60px;
  }
  img.bombpitcher-icon {
    width: 30px;
  }
</style>
