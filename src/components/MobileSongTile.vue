<template>
    <div class="songtile-grand">
        <div class="songtile-parent">
            <div>
                <img src="../assets/covers/0.jpg" v-if="ind == 0" alt="" :style="style" srcset="" class="songtile-img">
                <img src="../assets/covers/1.jpg" v-else-if="ind == 1" alt="" :style="style" srcset="" class="songtile-img">
                <img src="../assets/covers/2.jpg" v-else-if="ind == 2" alt="" :style="style" srcset="" class="songtile-img">
                <img src="../assets/covers/3.jpg" v-else-if="ind == 3" alt="" :style="style" srcset="" class="songtile-img">
                <img src="../assets/covers/4.jpg" v-else-if="ind == 4" alt="" :style="style" srcset="" class="songtile-img">
                <img src="../assets/covers/5.jpg" v-else-if="ind == 5" alt="" :style="style" srcset="" class="songtile-img">
                <img src="../assets/covers/6.jpg" v-else-if="ind == 6" alt="" :style="style" srcset="" class="songtile-img">
                <img src="../assets/covers/7.png" v-else-if="ind == 7" alt="" :style="style" srcset="" class="songtile-img">
                <img src="../assets/covers/8.jpg" v-else-if="ind == 8" alt="" :style="style" srcset="" class="songtile-img">
                <img src="../assets/covers/9.jpg" v-else alt="" :style="style" srcset="" class="songtile-img">

            </div>
            <div>
                <p class="song-title-text">{{ content.title }}</p>
                <p class="song-author-text">{{ content.author }}</p>
            </div>
        </div>
        <HeartMobile title="Like" :index="ind" />
    </div>
</template>
  
<script>
import HeartMobile from './HeartMobile.vue';


export default {
    name: 'MobileSongTile',
    props: {
        content: Object,
        ind: Number
    },
    components: { HeartMobile }
}
</script>
  
<style scoped>
.songtitle {
    width: 30%;

}

.songtile-parent {
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: 0.5rem;
    gap: 1rem;
}

.songtile-img {
    height: 3rem;
}

.songtile-grand {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
}


.album {
    width: 20%;
}

.song-author-text {
    opacity: 0.5;
}
</style>
  