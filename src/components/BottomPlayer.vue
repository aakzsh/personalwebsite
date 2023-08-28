<template>
    <div class="bottom-player-div">
        <div class="card-wrapper">
        
        <img src="https://media.discordapp.net/attachments/873911460055642152/1144206354345640076/Picsart_23-08-24_15-15-29-859.jpg"  alt="" :style="style" srcset="" class="card-img">
        <div class="info-and-author">
                <strong>{{this.$store.state.info.title}}</strong>
                <p>{{this.$store.state.info.author}}</p>
            </div>
            <Heart/>
    </div>
        <div class="mid-parent">
            <div class="btns-parent">
                <img src="../assets/icons/shuffle.svg" class="small" alt="">
                <img src="../assets/icons/prev.svg" class="small" alt="">
                <img src="../assets/icons/play.svg" class="large" alt="">
                <img src="../assets/icons/next.svg" class="small" alt="">
                <img src="../assets/icons/repeat.svg" class="small" alt="">
            </div>
            <div class="sound-bar-parent">
                <p>0:00</p>
                <div class="progress-bar">

                </div>
                <p>3:00</p>
            </div>
        </div>
        <div class="right-parent">
            <img src="../assets/icons/playview.svg"   v-on:click="this.$store.commit('toggleOpen')" alt="">
        </div>
    </div>
</template>
  
<script>
import Heart from './Heart.vue';
export default {
    name: 'BottomPlayer',
    components: {
        Heart
    },
}
</script>
  
<style scoped>
.bottom-player-div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 6rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
}
.card-img{
        height: 3.5rem;
        width: 3.5rem;
    }

.info-and-author{
        width: 14rem;
    }
    
.card-wrapper{
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.8rem;
    line-height: 0.6rem;
    width: 20rem;
}
.right-parent{
    width: 20rem;
    display: flex;
    justify-content: flex-end;
}
.small{
    height: 1rem;
}
.large{
    height: 2rem;
}
.btns-parent{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
}

.sound-bar-parent{
    margin-top: -0.5rem;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.593);
}
.progress-bar{
    
    width: 30rem;
    height: 0.1rem;
    background-color: rgba(255, 255, 255, 0.529);
}
.mid-parent{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
  