<template>
    <td class="serialnum">{{ ind + 1 }}</td>
    <td class="songtitle">
        <div class="songtile-parent">
            <div>
                <img src="../assets/covers/0.jpg" v-if="ind== 0"
                alt="" :style="style" srcset="" class="songtile-img">
                <img src="../assets/covers/1.jpg" v-else-if="ind== 1"
                alt="" :style="style" srcset="" class="songtile-img">
                <img src="../assets/covers/2.jpg" v-else-if="ind== 2"
                alt="" :style="style" srcset="" class="songtile-img">
                <img src="../assets/covers/3.jpg" v-else-if="ind== 3"
                alt="" :style="style" srcset="" class="songtile-img">
                <img src="../assets/covers/4.jpg" v-else-if="ind== 4"
                alt="" :style="style" srcset="" class="songtile-img">
                <img src="../assets/covers/5.jpg" v-else-if="ind== 5"
                alt="" :style="style" srcset="" class="songtile-img">
                <img src="../assets/covers/6.jpg" v-else-if="ind== 6"
                alt="" :style="style" srcset="" class="songtile-img">
                <img src="../assets/covers/7.png" v-else-if="ind== 7"
                alt="" :style="style" srcset="" class="songtile-img">
                <img src="../assets/covers/8.jpg" v-else-if="ind== 8"
                alt="" :style="style" srcset="" class="songtile-img">
                <img src="../assets/covers/9.jpg" v-else
                alt="" :style="style" srcset="" class="songtile-img">

            </div>
            <div>
                <p class="song-title-text">{{ content.title }}</p>
                <p class="song-author-text">{{ content.author }}</p>
            </div>
        </div>
    </td>
    <td class="album">{{ content.album }}</td>
    <td class="dateadded">{{ `${content.date.getDate()} ${content.date.toLocaleString('default', { month: 'long' })}, ${content.date.getFullYear()}` }}</td>
    <td class="duration">{{ Math.floor(content.readtime / 60) + ":" + content.readtime % 60 }}</td>
</template>
  
<script>
export default {
    name: 'SongTile',
    props: {
        content: Object,
        ind: Number
    }
}
</script>
  
<style scoped>
.songtitle {
    width: 30%;

}

.songtile-parent {
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    align-items: center;
    line-height: 0.5rem;
    gap: 1rem;
}

.songtile-img {
    height: 3rem;
}

.serialnum {
    width: 5%;
    padding-left: 1rem;
}

.dateadded {
    width: 20%;
}

.duration {
    width: 20%;
}

.album {
    width: 20%;
}

.song-author-text {
    opacity: 0.5;
}</style>
  