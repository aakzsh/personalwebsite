<template>
    <div class="playingview-parent" v-if="this.$store.state.isPlayingViewOpen">
        <div class="type-title">
            <strong title="Album">{{ this.$store.state.usersinfo[this.$store.state.currentIndex].album }}</strong>
            <img src="../assets/icons/close.svg" class="close" alt="" title="Close Playing View"
                v-on:click="this.$store.commit('toggleOpen')">
        </div>
        <img src="../assets/images/this-is-aakash.jpg" class="card-image" alt="">
        <div class="project-meta">
            <div>
                <h2 title="Title">{{ this.$store.state.usersinfo[this.$store.state.currentIndex].title }}</h2>
                <p title="Author">{{ this.$store.state.usersinfo[this.$store.state.currentIndex].author }}</p>
            </div>
            <div class="icons" title="View Link">
                <a v-if="this.$store.state.usersinfo[this.$store.state.currentIndex].haslink"
                    :href="this.$store.state.usersinfo[this.$store.state.currentIndex].link" target="_blank"><img
                        src="../assets/icons/globe.svg" alt="">
                </a>
                <Heart title="like" />
            </div>
        </div>
        <div class="project-desc" title="Description">
            <p @click="this.$store.commit('increment')">{{
                this.$store.state.usersinfo[this.$store.state.currentIndex].content }}</p>
        </div>
    </div>
</template>
  
<script>
import Heart from './Heart.vue';
export default {
    name: 'PlayingView',
    components: {
        Heart
    },
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
    scrollbar-gutter: stable;
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

.project-meta {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem 0 1rem;
    align-items: center;
    line-height: 0.5rem;
}

.icons {
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

.project-desc {
    background-color: #242424;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    display: flex;
    height: max-content;
    margin-left: 1rem;
    margin-right: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.752);

}</style>
  