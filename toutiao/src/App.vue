<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
import Rem from './../static/js/utils.js';
export default {
  name: 'App',
  components:{
   
    
  },
  mounted(){
    Rem.setRem();
    window.onresize=Rem.setRem;
    this.$router.push('/home');
  }
}
</script>

<style>
@import './../static/css/common.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
</style>
