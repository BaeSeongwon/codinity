<template>
  <div class="login_container">
    <div class="login_inner_container hc vc">

    </div>
  </div>
</template>
<script>
  export default {
    name: 'Login',
    data () {
      return {

      }
    }
  }
</script>
<style scoped>
  .login_container{
    position: absolute;
    width: 100%;
    height: 100%;
    background-image:url("/static/login_background.jpg");
    background-size: cover;
  }

  .login_inner_container {
    position: absolute;
    background-color: black;
  }

  /* 가로 중앙 정렬 */
  .hc { 
    width:200px; 
    left:0; 
    right:0; 
    margin-left:auto; 
    margin-right:auto; 
  }  
  
  /* 세로 중앙 정렬 */
  .vc { 
    height:40px; 
    top: 0; 
    bottom:0; 
    margin-top:auto; 
    margin-bottom:auto; 
  } 

</style>
