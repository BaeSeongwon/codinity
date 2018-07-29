<template>
  <div class="main-menu-container">
    <ul>
      <li>Life</li>
      <li>Study</li>
      <li>Picture</li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'VueMainMenu'
  }
</script>
<style scoped>
  .main-menu-container {
    display: inline-block;
    margin: 7px 0px;
  }

  ul {
    margin: 0px;
    padding: 0px;
  }

  li {
    list-style: none;
    float: left;
    padding: 0px 4px;
    margin: 0px 10px;
    cursor: pointer;
    color: gray;
  }

  li:hover {
    color: black;
  }
</style>
