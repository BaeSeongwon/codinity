<template>
  <div class="main-container">
	<div class="jumbotron jumbotron-fluid">
	  <div class="container">
		<h1 class="display-4">{게시판 이름}</h1>
		<p class="lead">{게시판 서브이름}</p>
	  </div>
	</div>
  </div>
</template>
<script>
  export default {
    name: 'VueMain'
  }
</script>
<style scoped>
  .main-container{
    width: 100%;
    border: 1px solid red;
  }
</style>
