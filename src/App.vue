

<template>
  <MobileHomePage v-if="isMobile"/>
<VoiceSynthesisTest v-if="isMobilee"/>
  <MainContent v-if="isWeb"/>
  <BottomPlayer v-if="isWeb"/>
</template>

<script>
import MainContent from './components/MainContent.vue';
import BottomPlayer from './components/BottomPlayer.vue';
// import MobileHomePage from './components/HomePage.vue';
import VoiceSynthesisTest from './components/VoiceSynthesisTest.vue';
export default {
  name: 'App',
  components: {
    MainContent,
    BottomPlayer,
    // MobileHomePage,
    VoiceSynthesisTest
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
