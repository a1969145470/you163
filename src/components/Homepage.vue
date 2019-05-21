<template>
  <nav id="below-navigation">
    <router-link to="/Home">
      首页
    </router-link>
    <router-link to="/catelist">
      分类
    </router-link>
    <router-link to="/Find">
      识物
    </router-link>
    <router-link to="/cart">
      购物车
    </router-link>
    <router-link to="/personal">
      主页
    </router-link>
    <router-link to="/login">
      登录页
    </router-link>
  </nav>
</template>

<script>
  export default {
    name: "Homepage"
  }

</script>

<style scoped>

  #below-navigation {
    display: block;
    width: 100%;
    height: 1.30667rem;
    background: aqua;
    position: relative;
  }
</style>
