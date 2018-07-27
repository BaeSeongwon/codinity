<template>
  <div class='header-container'>
    <section class="container">
      <div class="row">
        <article class="col-3">
          <h4>Codinity</h4>
        </article>
        <article class="col-6">
          <vue-main-menu/>
        </article>
        <article class="col-3">
          <div>
            개발 미정
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
<script>
  import VueMainMenu from '@/components/VueMainMenu'

  export default {
    name: 'VueHeader',
    components: {
      vueMainMenu: VueMainMenu
    }
  }
</script>
<style scoped>
  h4 {
    cursor: pointer;
  }

  .header-container {
    width: 100%;
    margin: 5px 0px;
  }

  article:nth-child(2) {
    text-align: center;
  }
</style>
