<template>
    <div class="bottom-player-div">
        <div class="card-wrapper">

            <img src="https://media.discordapp.net/attachments/873911460055642152/1144206354345640076/Picsart_23-08-24_15-15-29-859.jpg"
                alt="" :style="style" srcset="" class="card-img">
            <div class="info-and-author">
                <strong>xyz info</strong>
                <p>aakash</p>
            </div>
        </div>

        <div class="song-card-right">
            <img src="../assets/icons/heart.svg" class="icon-right" alt="">
            <img src="../assets/icons/solid-play.svg" class="icon-right" alt="">

        </div>
    </div>
</template>
  
<script>
export default {
    name: 'MobileBottomPlayer',
}
</script>
  
<style scoped>
.bottom-player-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 6rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    margin-top: -0.50rem;
    margin-bottom: -0.50rem;
}

.song-card-right {
    display: flex;
    gap: 1rem;
}

.card-img {
    height: 3.5rem;
    width: 3.5rem;
}

.icon-right {
    height: 2rem;
}

.card-wrapper {
    display: flex;
    align-items: flex-end;
    gap: 1rem;
    font-size: 1rem;
    line-height: 0.5rem;
}
</style>
  