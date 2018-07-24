<template>
  <div class="app-container">
    <div id="app" class="hc vc">
      <vue-header/>
      <div class="container">
        <router-view/>
      </div>
      <vue-footer/>
    </div>
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
    position: absolute;
    width: 80%;
    height: 90%;
    background-color: white;
    border-radius: .5em;
    box-shadow: 0px 0px 13px 5px #addbea;
  }

  .app-container {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #BDEEFF;
  }

  /* 가로 중앙 정렬 */
  .hc { 
    width: 80%; 
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto; 
  }  
  
  /* 세로 중앙 정렬 */
  .vc { 
    height: 80%; 
    top: 0; 
    bottom: 0; 
    margin-top: auto; 
    margin-bottom: auto; 
  } 
</style>
