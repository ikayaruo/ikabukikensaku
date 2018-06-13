<template>
  <div class="container">
    <header-vue></header-vue>
    <div class="filter d-flex justify-content-between">
      <filter-subweapon></filter-subweapon>
      <filter-special></filter-special>
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
import BukiList from '@/components/buki-list'
import Links from '@/components/links'
import FooterVue from '@/components/footer-vue'

export default {
  components: {
    HeaderVue: HeaderVue,
    FilterSubweapon: FilterSubweapon,
    FilterSpecial: FilterSpecial,
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
