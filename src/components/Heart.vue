<template>
    <div v-if="liked" @click="toggle" class="heart-cont">
        <img src="../assets/icons/heart-green.svg" id="hearty" class="h" alt="">
    </div>
    <div v-else @click="toggle" class="heart-cont">
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