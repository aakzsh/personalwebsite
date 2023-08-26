<template>
<div class="mobile-home-body">
    <div class="mobile-body-child">
   <img src="../assets/images/this-is-aakash.jpg" alt="" class="profile-img" srcset="">
<div class="meta-info">
    <p>This is ZAYN. The essential tracks. All in one playlist</p>
    <p>576446 likes . 1h 48min</p>
    <div class="icons-flex">
        <div class="icons-flex-left">
            <img src="../assets/icons/heart.svg" alt="">
            <img src="../assets/icons/download.svg" alt="">
        </div>
        <div>
            <img src="../assets/icons/play-green.svg" class="icon-flex-right" alt="">
        </div>
    </div>
</div>

<div class="bottom-player" id="bottom-player">
    <MobileBottomPlayer />
</div>
    </div>

</div>
</template>
  
<script>
import MobileBottomPlayer from './MobileBottomPlayer.vue'
export default {
    name: 'MobileHomePage',
    components: {
        MobileBottomPlayer
    },
//     created(){
//         this.scrollToBottom();
//     },
//     setup(){
//        function scrollToBottom() {
//   window.scrollTo(0, document.body.scrollHeight);
// }
//         return {scrollToBottom}
//     },
}
</script>
  
<style scoped>
    .mobile-home-body{
        margin: 0;
        padding: 0;
        /* height: max-content;
        min-height: 100%; */
        display: flex;
        flex-direction: column;
        width: 100%;
        /* background-color: pink; */
        background: linear-gradient(#717d90,#121212, #121212);
                /* background: linear-gradient(#717d90 55%, #121212 45%); */
        backdrop-filter: blur(500px)
    }
.bottom-player{
    position: fixed;
    width: calc(100% - 1rem);
    /* margin: 1rem; */
    background-color: rgb(50, 50, 255);
    bottom: 1rem;
    border-radius: 0.5rem;
}
    .meta-info{
        padding: 1rem;
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.8);
    }
    .icons-flex{
        display: flex;
        justify-content: space-between;
    }
    .icons-flex-left{
        display: flex;
        gap: 1rem;
    }
    .icon-flex-right{
       height: 3rem;
    }
    .mobile-body-child{
        flex: 1;
        height: 100%;
        min-height: 100vh;
        /* max-height: 100%; */
        overflow: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .profile-img{
        /* width: 10rem; */
        margin-top: 4rem;
        width: calc(90vw - 8rem);
        height: calc(90vw - 8rem);
        box-shadow: rgba(0, 0, 0, 0.45) 0px 10px 20px;

        /* max-width: 90vw; */
    }
</style>
  