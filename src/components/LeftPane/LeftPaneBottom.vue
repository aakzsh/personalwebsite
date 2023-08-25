<template>
    <div class="grandparent">
        <div class="parent">
        <img src="../../assets/icons/playlist.svg" alt="" srcset="">
        <LeftPaneCards imgurl="https://i.scdn.co/image/ab67706c0000da8470d229cb865e8d81cdce0889" radius="0.3"/>
        <LeftPaneCards imgurl="https://misc.scdn.co/your-episodes/SE-64.png" radius="0.3"/>
        <LeftPaneCards imgurl="https://i.scdn.co/image/ab6761610000e5eb056f821a5186892979410deb" radius="0.3"/>
        <LeftPaneCards imgurl="https://i.scdn.co/image/ab6761610000e5eb056f821a5186892979410deb" radius="2"/>
        <LeftPaneCards imgurl="https://i.scdn.co/image/ab6761610000e5eb056f821a5186892979410deb" radius="0.3"/>
        <LeftPaneCards imgurl="https://i.scdn.co/image/ab6761610000e5eb056f821a5186892979410deb" radius="2"/>
        
        
    </div>
    </div>
</template>

<script>
import LeftPaneCards from './LeftPaneCards.vue';
    export default {
        name: "LeftPaneBottom",
        components: {
            LeftPaneCards
        },
    }
</script>

<style scoped>
.grandparent{
    height: 100%;
    width: 100%;
    margin-left: 0.5rem;
    margin-top: 0.5rem
}
    .parent{
        
        display: flex;
        flex-direction: column;
        padding-top: 1rem;
        /* padding-bottom: 1rem; */
        border-radius: 0.5rem;
        height: 100%;
        align-items: center;
        gap: 1rem;
        width: 90%;
        max-height: calc(100% - 1rem);
        overflow: hidden;
        background-color: #121212;
        /* overflow: scroll */
    }
    img{
        height: 1.5rem;
    }
</style>