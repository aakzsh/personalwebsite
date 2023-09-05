<template>
    <div v-if="this.$store.state.usersinfo[index].liked" @click="this.$store.commit('toggleLikedSpecific', index)" class="heart-cont">
        <img src="../assets/icons/heart-green.svg" id="hearty" class="h" alt="">
    </div>
    <div v-else @click="this.$store.commit('toggleLikedSpecific', index)" class="heart-cont">
        <img src="../assets/icons/heart.svg" id="hearty" class="h" alt="">
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: "HeartMobileButton",
    setup() {
        const liked = ref(false);
        function toggle() {
            liked.value = !liked.value;
        }
        return { liked, toggle };
    },
    props:{

            index: Number,
        }
    
}
</script>

<style scoped>
.heart-cont {
    display: flex;
    align-items: center;
}
</style>