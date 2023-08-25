<template>
    <div class="main-content">
        <LeftPane />
        <RightPane />

        <!-- <LeftPane /> -->
    </div>
</template>
  
<script>
import LeftPane from './LeftPane.vue';
import RightPane from './RightPane.vue';
export default {
    name: 'MainContent',
    components: {
        LeftPane,
        RightPane
    }
}
</script>
  
<style scoped>
.main-content{
    height: calc(100vh - 6rem);
    background-color: #000000;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 0.5rem;
}
</style>
  