<template>
  <div id="app">
    <div id="header">
      <nav class="navbar navbar-expand navbar-light bg-light">
      <a class="button">
      <router-link to="/" >トップ</router-link></a>
      <a class="button">
      <router-link to="/school">学生時代</router-link></a>
      <a class="button">
      <router-link to="/dream" >将来の夢</router-link></a>
      <a class="button">
      <router-link to="/strength" >自分の強み</router-link></a>
      <a class="button">
      <router-link to="/weakness" >自分の弱み</router-link></a>
      </nav>
    </div>
    <transition mode="out-in">
    <router-view></router-view>
    </transition>
  </div>
  
</template>



<script> 

export default {
  name: "App"
}

</script>

<style lang="scss">
  @import "../node_modules/bulma/bulma.sass"; 
</style>

<style scoped>
.school {
  width: 80%;
  max-width: 500px;
  margin: 30px auto;
}

</style>

<style>
navbar navbar-expand navbar-light bg-light {
  background: Transparent;
}

body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#header {
  height: 80px;
  
  box-shadow: 0px 3px 3px rgba(0,0,0,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

#header a:hover {background-color:gray;}

#header a {
  text-decoration: none;
  color: #2c3e50;
  margin: 0 10px;
  padding: 3px 10px;
  background: #5ccebf;
  font-weight: bold;
}

.v-enter {
  transform: translate(-100px, 0);
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: all 1s 0s ease;
}
.v-leave {
  transform: translate(0, 0);
  opacity: 1;
}
.v-leave-to {
  transform: translate(-100px, 0);
  opacity: 0;
}
.v-leave-active {
  transition: all .5s 0s ease;
}


</style>
<style lang="scss">
@import "../node_modules/bulma/bulma.sass";
</style>
