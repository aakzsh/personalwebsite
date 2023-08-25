<template>
  <MainContent />
  <BottomPlayer />
</template>

<script>
import MainContent from './components/MainContent.vue';
import BottomPlayer from './components/BottomPlayer.vue';

export default {
  name: 'App',
  components: {
    MainContent,
    BottomPlayer
  }
}
</script>

<style>
</style>
