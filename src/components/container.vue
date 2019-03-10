<template>
  <div class="container">
    <header-vue></header-vue>
    <div class="filter row">
      <div class="col-sm-6">
        <filter-subweapon></filter-subweapon>
      </div>
      <div class="col-sm-6">
        <filter-special></filter-special>
        <filter-bomb></filter-bomb>
      </div>
    </div>

    <buki-list></buki-list>
    <links></links>
    <footer-vue></footer-vue>
  </div>
</template>

<script>
import HeaderVue from '@/components/header-vue'
import FilterSubweapon from '@/components/filter-subweapons'
import FilterSpecial from '@/components/filter-specials'
import FilterBomb from '@/components/filter-bombs'
import BukiList from '@/components/buki-list'
import Links from '@/components/links'
import FooterVue from '@/components/footer-vue'

export default {
  components: {
    HeaderVue: HeaderVue,
    FilterSubweapon: FilterSubweapon,
    FilterSpecial: FilterSpecial,
    FilterBomb: FilterBomb,
    BukiList: BukiList,
    Links: Links,
    FooterVue: FooterVue
  }
}
</script>

<style>
  h1, h2 {
    text-align: left;
    font-family: ikamodoki
  }
  .filter {
    margin-bottom: 30px;
  }
</style>
