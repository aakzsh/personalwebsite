<template>
    <div class="playingview-parent" v-if="visible">
        <div class="type-title">
            <strong>Project</strong>
            <img src="../assets/icons/close.svg" class="close" alt="" v-on:click="toggle">
        </div>
        <img src="../assets/images/this-is-aakash.jpg" class="card-image" alt="">
        <div class="project-meta">
            <div>
                <h2>fOoL fOr YoU</h2>
                <p>aakash</p>
            </div>
<div class="icons">
    <img src="../assets/icons/globe.svg" alt="">
    <img src="../assets/icons/heart.svg" alt="">

</div>

        </div>
        <div class="project-desc">
<p>hello everyone im aakash and this is a test text heheheh he wderfvred rgelmvrfqderv 3 hello everyone im  ne im aakash and this is a test text heheheh he wderfvred rgelmvrfqderv 3 hello everyone im  aakash and this is a test text heheheh he wderfvred rgelmvrfqderv 3</p>
</div>
    </div>
</template>
  
<script>
import { ref } from 'vue';

export default {
    name: 'PlayingView',
    setup() {
        const visible = ref(true);
        function toggle() {
            visible.value = !visible.value;
        }
        return { visible, toggle }
    }
}
</script>
  
<style scoped>
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
}

.playingview-parent:hover {
    overflow-y: scroll;
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
    margin-right: 1rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.752);
}
</style>
  