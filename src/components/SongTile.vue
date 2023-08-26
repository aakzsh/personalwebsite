<template>
    <td class="serialnum">1</td>
    <td class="songtitle">
        <div class="songtile-parent">
        <div>
            <img src="../assets/images/this-is-aakash.jpg" class="songtile-img" alt="">

        </div>
        <div>
            <p class="song-title-text">hehe</p>
        <p  class="song-author-text">lmao</p>
        </div>
    </div></td>
    <td class="album">Love Like This</td>
    <td class="dateadded">20 hours ago</td>
    <td class="duration">2:32</td>
</template>
  
<script>
export default {
    name: 'SongTile',
    props: {
        content: Object,
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
    /* font-size: 0.9rem; */
    opacity: 0.5;
}
</style>
  