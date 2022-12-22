<template>
  <div id="app">
    <router-view></router-view>
    <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components:{
    Footer
  }


}
</script>

<style>
#app{
  background-color: var(--wrap);
  
}
.divider {
    width: 100%;
    height: 1px;
    background-color: rgb(243, 243, 243);
}
</style>
