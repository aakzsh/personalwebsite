<template>
  <p v-if="isMobile">Support for Mobile Devices coming soon!<br>Till then, just know that this is gonna be an amazing portfolio</p>
  <MainContent v-if="isWeb"/>
  <BottomPlayer v-if="isWeb"/>
</template>

<script>
import MainContent from './components/MainContent.vue';
import BottomPlayer from './components/BottomPlayer.vue';
export default {
  name: 'App',
  components: {
    MainContent,
    BottomPlayer
  },
  data: function(){
    return {
      isMobile: window.innerWidth < 600,
      isWeb: window.innerWidth >= 600,
    }
  },
}
</script>

<style>
</style>
