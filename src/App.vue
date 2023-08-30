

<template>
  <MobileHomePage v-if="isMobile" />
  <MainContent v-if="isWeb" />
  <BottomPlayer v-if="isWeb" />
</template>

<script>
import MainContent from './components/MainContent.vue';
import BottomPlayer from './components/BottomPlayer.vue';
export default {
  name: 'App',
  components: {
    MainContent,
    BottomPlayer,
  },
  data: function () {
    return {
      isMobile: window.innerWidth < 600,
      isWeb: window.innerWidth >= 600,
    }
  },
}
</script>

<style></style>
