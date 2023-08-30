<template>
    <div class="playingview-parent" v-if="this.$store.state.isPlayingViewOpen">
        <div class="type-title">
            <strong>{{this.$store.state.usersinfo[this.$store.state.currentIndex].album}}</strong>
            <img src="../assets/icons/close.svg" class="close" alt="" v-on:click="this.$store.commit('toggleOpen')">
        </div>
        <img src="../assets/images/this-is-aakash.jpg" class="card-image" alt="">
        <div class="project-meta">
            <div>
                <h2>{{this.$store.state.usersinfo[this.$store.state.currentIndex].title}}</h2>
                <p>{{this.$store.state.usersinfo[this.$store.state.currentIndex].author}}</p>
            </div>
<div class="icons">
    <img src="../assets/icons/globe.svg" alt="">
    <Heart />
    <!-- <img src="../assets/icons/heart.svg"  id="hearty" alt=""> -->

</div>

        </div>
        <div class="project-desc">
<p @click="this.$store.commit('increment')">{{ this.$store.state.count }}</p>
</div>
    </div>
</template>
  
<script>
// import { ref } from 'vue';
import Heart from './Heart.vue';
export default {
    name: 'PlayingView',
    // setup() {
    //     const visible = ref(true);
    //     function toggle() {
    //         visible.value = !visible.value;
    //     }
        
    //     return { visible, toggle }
    // },
    components: {
        Heart
    },
}
</script>
  
<style scoped>

/* #hearty{
    background-image: url('../assets/icons/heart-green.svg');
    background-size: contain;
    background-repeat: no-repeat;    
} */
.playingview-parent {
    height: calc(100% - 0.5rem);
    background-color: #121212;
    width: 25rem;
    min-width: 25rem;
    max-width: 25rem;
    margin-right: 0.5rem;
    border-radius: 1rem;
    margin-top: 0.5rem;
    overflow-y: hidden;
    overflow-x: hidden;
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-gutter:stable;
}

.playingview-parent:hover {
    
    overflow-y: auto;
}

.close {
    height: 1.4rem;
}

.type-title {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    align-items: center;
}

.card-image {
    width: 23rem;
    padding-left: 1rem;
    padding-right: 1rem;
}

.project-meta{
    display: flex;
    justify-content: space-between;
    padding:0 1rem 0 1rem  ;
    align-items: center;
    line-height: 0.5rem;
}
.icons{
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

.project-desc{
    background-color: #242424;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    display: flex;
    /* width: 100%; */
    /* height: 10rem; */
    height: max-content;
    margin-left: 1rem;
    margin-right: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.752);
    
}
</style>
  