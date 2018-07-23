<template>
  <div id="app">
    <vue-header/>
    <div class="container">
      <div class="row">
        <div class="col-2">
          <side-menu/>
        </div>
        <div class="col-10">
          <router-view/>
        </div>      
      </div>
    </div>
    <vue-footer/>
  </div>
</template>

<script>
import VueHeader from '@/components/VueHeader'
import VueFooter from '@/components/VueFooter'
import SideMenu from '@/components/SideMenu'

export default {
  name: 'App',
  components: {
    vueHeader: VueHeader,
    vueFooter: VueFooter,
    sideMenu: SideMenu
  }
}
</script>

<style>
#app {

}
</style>
