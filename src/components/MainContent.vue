<template>
    <div class="main-content">
        <LeftPane />
        <RightPane />
        <!-- <p v-on:click="increment">{{ count }}</p> -->
        <PlayingView v-if="count"/>
        <!-- <div v-if="isPlayingViewOpen">
            
        </div> -->

    </div>
</template>
  
<script>
import { ref } from 'vue';

import LeftPane from './LeftPane.vue';
import RightPane from './RightPane.vue';
import PlayingView from './PlayingView.vue';
export default {
    name: 'MainContent',
    setup(){
        const count = ref(true);
        function increment() {
      count.value = !count.value;
    }
        return {count, increment}
    },
    components: {
    LeftPane,
    RightPane,
    PlayingView
},
    data: function(){
       return { isPlayingViewOpen: true,}
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
  