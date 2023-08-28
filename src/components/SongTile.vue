<template>
    <td class="serialnum">{{ ind +1}}</td>
    <td class="songtitle">
        <div class="songtile-parent">
        <div>
            <img src="../assets/images/this-is-aakash.jpg" class="songtile-img" alt="">

        </div>
        <div>
            <p class="song-title-text">{{ content.title }}</p>
        <p  class="song-author-text">{{content.author}}</p>
        </div>
    </div></td>
    <td class="album">{{content.album}}</td>
    <td class="dateadded">20 hours ago</td>
    <td class="duration">{{Math.floor(content.readtime/60) + ":" + content.readtime%60}}</td>
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
.songtitle{
    width: 30%;

}

.songtile-parent{
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    align-items: center;
    line-height: 0.5rem;
    gap: 1rem;
}
.songtile-img{
    height: 3rem;
}
.serialnum{
    width: 5%;
    padding-left: 1rem;
}

.dateadded{
    width: 20%;
}
.duration{
    width: 20%;
}
.album{
    width: 20%;
}
/* .song-title-text{
    font-size: 1rem;
} */
.song-author-text{
  opacity: 0.5;
}
</style>
  