<template>
    <div v-if="this.$store.state.usersinfo[this.$store.state.currentIndex].liked" @click="this.$store.commit('toggleLiked')" class="heart-cont">
        <img src="../assets/icons/heart-green.svg" id="hearty" class="h" alt="">
    </div>
    <div v-else @click="this.$store.commit('toggleLiked')" class="heart-cont">
        <img src="../assets/icons/heart.svg" id="hearty" class="h" alt="">
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: "HeartButton",
    setup() {
        const liked = ref(false);
        function toggle() {
            liked.value = !liked.value;
        }
        return { liked, toggle };
    }
}
</script>

<style scoped>
.heart-cont {
    display: flex;
    align-items: center;
}
</style>