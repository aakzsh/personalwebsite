

<template>
  <MobileHomePage v-if="isMobile" />
  <MainContent v-if="isWeb" />
  <BottomPlayer v-if="isWeb" />
</template>

<script>
import MainContent from './components/MainContent.vue';
import BottomPlayer from './components/BottomPlayer.vue';
import MobileHomePage from './components/HomePage.vue';
export default {
  name: 'App',
  components: {
    MainContent,
    BottomPlayer,
    MobileHomePage
  },
  data: function () {
    return {
      isMobile: window.innerWidth < 800,
      isWeb: window.innerWidth >= 800,
    }
  },
}
</script>

<style></style>
