<template>
    <div class="mobile-home-body" v-if="!isPlayingViewOpen" >
        <div class="desktop-promo">
            <div class="desktop-promo-content" v-if="promoOpen">
                <p>The experience is best on desktop! Make sure to try it out on desktop as well.</p>
                <img src="../assets/icons/close.svg" class="closeicon" alt="" @click="togglePromo">
            </div>
        </div>
        <div class="mobile-body-child">
            <img src="../assets/images/this-is-aakash.jpg" alt="" class="profile-img" srcset="">
            <div class="meta-info">
                <p>This is AAKASH. The essential works, all in one place!</p>
                <div class="post-title-info">
                    <p>theme inspired by</p>
                    <img src="../assets/icons/spotify_icon.png" title="Spotify" class="spotify-icon" alt="">
                    <p>(obviously)</p>
                </div>
                <div class="icons-flex">
                    <div class="icons-flex-left">
                        <HeartPlaylist class="heartplaylist" />
                        <img src="../assets/icons/download.svg" @click="downloadFile" class="left" alt=""
                            title="Download as PDF">
                    </div>
                    <div>
                        <img src="../assets/icons/play-green.svg" v-if="!this.$store.state.isPlaying"
                            class="icon-flex-right" title="Paused" alt="" @click="showAlert">
                        <img src="../assets/icons/pause-green.svg" v-else class="icon-flex-right" @click="showAlert" alt="" title="Playing">
                        <!-- <img src="../assets/icons/play-green.svg" class="icon-flex-right" alt=""> -->
                    </div>
                </div>
            </div>

            <div class="listitem-parent">
                <div v-for="(user, index) in this.$store.state.usersinfo" v-bind:key="user.name" class="songs-listitem"
                    :title="user.title" @click="this.$store.commit('setInfo', index)">
                    <MobileSongTile :content="user" :ind="index" />
                </div>
            </div>
            <div class="explore">
                <p>You might wanna explore</p>
            </div>
            <div class="socials">
                <MobileSocials title="Songs I Like"
                    url="https://open.spotify.com/playlist/22fzmYDT88DIbBFW82izqQ?si=fd25aff5583e481a"
                    index="https://i.scdn.co/image/ab67706c0000da8470d229cb865e8d81cdce0889" />

                <MobileSocials title="Other Stuff I Like"
                    url="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1faf5.png"
                    index="https://i.ibb.co/dr1482s/Group-6-1.png" />
                <MobileSocials title="GitHub"
                    url="https://open.spotify.com/playlist/22fzmYDT88DIbBFW82izqQ?si=fd25aff5583e481a"
                    index="https://i.ibb.co/nbCZDQp/github.jpg" />
                <MobileSocials title="Gmail"
                    url="https://open.spotify.com/playlist/22fzmYDT88DIbBFW82izqQ?si=fd25aff5583e481a"
                    index="https://i.ibb.co/476dVmK/gmail.png" />
                <MobileSocials title="LinkedIn"
                    url="https://open.spotify.com/playlist/22fzmYDT88DIbBFW82izqQ?si=fd25aff5583e481a"
                    index="https://i.ibb.co/j31SzYL/linkedin.png" />
                <MobileSocials title="Discord"
                    url="https://open.spotify.com/playlist/22fzmYDT88DIbBFW82izqQ?si=fd25aff5583e481a"
                    index="https://i.ibb.co/hHJYSwd/discord.jpg" />
                <MobileSocials title="Behance"
                    url="https://open.spotify.com/playlist/22fzmYDT88DIbBFW82izqQ?si=fd25aff5583e481a"
                    index="https://i.ibb.co/dJLWqZY/behance.jpg" />

            </div>

            <div class="bottom-player" id="bottom-player" :style="computedStyle" @click="togglePlayingView">
                <MobileBottomPlayer/>

            </div>
        </div>

    </div>
    <div class="playing-view-div" v-else>
<!-- <p>ab mai dikhunga</p> -->
<div class="playerarea">
    <div class="playarea-header">
        <img src="../assets/icons/pushdown.svg" @click="togglePlayingView" alt="">
        <div class="playarea-header-text">
            <p class="showing-from-playlist">SHOWING FROM PLAYLIST</p>
            <strong>This Is AAKASH</strong>
        </div>
        <img src="../assets/icons/close.svg" style="visibility: hidden;" alt="">
    </div>
    <div class="playarea-footer">
        <div class="playarea-footer-meta">
            <div>
                <p>{{ this.$store.state.usersinfo[this.$store.state.currentIndex].title }}</p>
                <p>{{ this.$store.state.usersinfo[this.$store.state.currentIndex].author }}</p>
            </div>
            <Heart/>
        </div>
    </div>
</div>
</div>
</template>
  
<script>
import { ref } from 'vue';
import HeartPlaylist from './HeartPlaylist.vue';
import MobileBottomPlayer from './MobileBottomPlayer.vue'
import MobileSocials from './MobileSocials.vue';
import MobileSongTile from './MobileSongTile.vue';
import Heart from './Heart.vue';
export default {
    name: 'MobileHomePage',
    components: {
    MobileBottomPlayer,
    MobileSongTile,
    HeartPlaylist,
    MobileSocials,
    Heart
},
    setup(){
        const promoOpen = ref(true);
        function togglePromo(){
            promoOpen.value = false;
        }
        const isPlayingViewOpen = ref(true);
        function togglePlayingView(){
            isPlayingViewOpen.value = !isPlayingViewOpen.value;
        }
        return {promoOpen, togglePromo, isPlayingViewOpen, togglePlayingView}
    },

  
    methods: {
        downloadFile() {
            const url = "/this-is-aakash.pdf";
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', "This-Is-Aakash.pdf");
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);
        },
        showAlert(){
            alert("This feature is only available on desktop version")
        }
    },
    computed: {
        computedStyle() {
            return {
                backgroundColor: this.$store.state.usersinfo[this.$store.state.currentIndex].mobileColor
            };
        },
    },
}
</script>
  
<style scoped>
.playarea-footer-meta{
    display: flex;
    justify-content: space-between;
    padding: 1rem;
}
.showing-from-playlist{
    font-size: 0.8rem;
    opacity: 0.9;
}
.playarea-header-text{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 3px;
}
.playarea-header{
    display: flex;
    justify-content: space-between;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.5rem;
}
.explore {
    font-size: 1.1rem;
    font-weight: 500;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    /* background-color: orange; */
    width: calc(100% - 2rem);
}

.playerarea{
    height: 100vh;
    width: 100vw;
    /* background-color: rgb(37, 31, 20); */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.post-title-info {
    display: flex;
    justify-content: flex-start;
    gap: 0.5rem;
    align-items: center;
    font-size: 0.9rem;
    margin-top: -0.9rem;
    font-weight: bold;
}

.desktop-promo{
    width: 100%;
    height: 3rem;
    /* background-color: orangered; */
    position: fixed;
    z-index: 3;
    top: 1rem;
    display: flex;
    justify-content: center;
    
}
.desktop-promo-content{
    width: calc(90% - 2rem);
    height: 100%;
    background-color: rgb(0, 0, 0);
   border-radius: 0.5rem;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   padding: 1rem;
    font-size: 0.8rem;
}

.closeicon{
    height: 1.5rem;
}
.socials{
    margin-bottom: 9rem;
    display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  grid-column-gap: calc(100vw - 2*(100vw/2.5) - 2rem);
  grid-row-gap: 0rem;
}
.heartplaylist {
    transform: scale(1.3);
}

.listitem-parent {
    /* margin-bottom: 7rem; */
    padding-left: 2rem;
    padding-right: 2rem;
}

.spotify-icon {
    height: 1.5rem;
}

.mobile-home-body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    background: linear-gradient(#717d90, #121212, #121212);
    backdrop-filter: blur(500px)
}

.bottom-player {
    position: fixed;
    width: calc(100% - 1rem);
    background-color: var();
    bottom: 5rem;
    border-radius: 0.5rem;
}

.meta-info {
    padding: 1rem;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8);
}

.icons-flex {
    display: flex;
    justify-content: space-between;
}

.icons-flex-left {
    display: flex;
    gap: 1rem;
}

.icon-flex-right {
    height: 3rem;
}

.mobile-body-child {
    flex: 1;
    height: 100%;
    max-height: 100vh;
    max-width: 100%;
    /* min-height: 100vh; */
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.profile-img {
    margin-top: 4rem;
    width: calc(90vw - 8rem);
    height: calc(90vw - 8rem);
    box-shadow: rgba(0, 0, 0, 0.45) 0px 10px 20px;
}</style>
  