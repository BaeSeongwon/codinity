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
        	<button type="button" class="btn btn-outline-secondary btn-sm">로그인</button>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
<script>
	import VueMainMenu from '@/components/VueHeader/VueMainMenu/VueMainMenu'
	
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

	article:nth-child(3) {
		text-align: right;
		margin-top: 5px;
	}
</style>
