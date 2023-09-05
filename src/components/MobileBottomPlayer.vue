<template>
    <div class="bottom-player-div">
        <div class="card-wrapper">

            <img src="https://media.discordapp.net/attachments/873911460055642152/1144206354345640076/Picsart_23-08-24_15-15-29-859.jpg"
                alt="" :style="style" srcset="" class="card-img">
            <div class="info-and-author">
                <strong>{{this.$store.state.usersinfo[this.$store.state.currentIndex].title}}</strong>
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
        simplify(){
            let text = this.$store.state.usersinfo[this.$store.state.currentIndex].author;
            if(text.length>25){
                text = text.substr(0, 24) + "...";
            }
            return text
        },
        showAlert(){
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

.info-and-author{
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
  