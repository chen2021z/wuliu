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
</style>
