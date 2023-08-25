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
    .parent{
        height: 100%;
        width: 5rem;
        /* background-color: black; */
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
        
    }
</style>
  