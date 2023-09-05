<template>
    <div class="bottom-player-div">
        <div class="card-wrapper">

            <img src="../assets/covers/0.jpg" v-if="this.$store.state.currentIndex == 0" alt="" :style="style" srcset=""
                class="card-img">
            <img src="../assets/covers/1.jpg" v-else-if="this.$store.state.currentIndex == 1" alt="" :style="style"
                srcset="" class="card-img">
            <img src="../assets/covers/2.jpg" v-else-if="this.$store.state.currentIndex == 2" alt="" :style="style"
                srcset="" class="card-img">
            <img src="../assets/covers/3.jpg" v-else-if="this.$store.state.currentIndex == 3" alt="" :style="style"
                srcset="" class="card-img">
            <img src="../assets/covers/4.jpg" v-else-if="this.$store.state.currentIndex == 4" alt="" :style="style"
                srcset="" class="card-img">
            <img src="../assets/covers/5.jpg" v-else-if="this.$store.state.currentIndex == 5" alt="" :style="style"
                srcset="" class="card-img">
            <img src="../assets/covers/6.jpg" v-else-if="this.$store.state.currentIndex == 6" alt="" :style="style"
                srcset="" class="card-img">
            <img src="../assets/covers/7.png" v-else-if="this.$store.state.currentIndex == 7" alt="" :style="style"
                srcset="" class="card-img">
            <img src="../assets/covers/8.jpg" v-else-if="this.$store.state.currentIndex == 8" alt="" :style="style"
                srcset="" class="card-img">
            <img src="../assets/covers/9.jpg" v-else alt="" :style="style" srcset="" class="card-img">
            <div class="info-and-author">
                <strong>{{ this.$store.state.usersinfo[this.$store.state.currentIndex].title }}</strong>
                <p>{{ simplify() }}</p>
            </div>
        </div>

        <div class="song-card-right">
            <Heart />
            <img src="../assets/icons/solid-play.svg" class="icon-right" alt="" @click="showAlert">

        </div>
    </div>
</template>
  
<script>
import Heart from './Heart.vue';
export default {
    name: 'MobileBottomPlayer',
    methods: {
        simplify() {
            let text = this.$store.state.usersinfo[this.$store.state.currentIndex].author;
            if (text.length > 25) {
                text = text.substr(0, 24) + "...";
            }
            return text
        },
        showAlert() {
            alert("This feature is only available on desktop version")
        }
    },
    components: {
        Heart
    },
}
</script>
  
<style scoped>
.bottom-player-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    margin-top: -0.50rem;
    margin-bottom: -0.50rem;
}

.song-card-right {
    display: flex;
    gap: 1rem;
}

.info-and-author {
    /* background-color: orange; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: -0.3rem;
}

.card-img {
    height: 3rem;
    width: 3rem;
}

.icon-right {
    height: 1.5rem;
}

.card-wrapper {
    display: flex;
    align-items: flex-end;
    gap: 1rem;
    font-size: 1rem;
    line-height: 0.5rem;
}
</style>
  