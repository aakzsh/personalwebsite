<template>
    <div class="parent">
        <LeftPaneTop />
        <LeftPaneBottom />
    </div>
</template>
  
<script>
import LeftPaneTop from '../components/LeftPane/LeftPaneTop.vue';
import LeftPaneBottom from '../components/LeftPane/LeftPaneBottom.vue'
export default {
    name: 'LeftPane',
    components: {
        LeftPaneTop,
        LeftPaneBottom
    }
}
</script>
  
<style scoped>
.parent {
    height: 100%;
    width: 5rem;
    min-width: 5rem;
    max-width: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: hidden;
    overflow-x: hidden;


}

.parent:hover {
    overflow-y: auto;
    scrollbar-width: thin;
}
</style>
  