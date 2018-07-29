<template>
  <div class="login_container">
	<form>
	  <div class="form-group">
		<label for="exampleInputEmail1">E-Mail 주소</label>
		<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
		<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">비밀번호</label>
		<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
	  </div>
	  <button type="submit" class="btn btn-primary">로그인</button>
	</form>
	<div class='outer-login-container'>
		<div>카카오계정으로 로그인</div>
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
		padding: 20px;
		text-align: left;
	}

	.outer-login-container{
		margin-top: 20px;	
	}
	
	.outer-login-container div:nth-child(1){
		width: 100%;
		background-color: yellow;
		cursor: pointer;
		text-align: center;
		padding: 10px 0px;
		border-radius: .4em;
		font-weight: bold;
	}
</style>
