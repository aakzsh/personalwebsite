<template>
    <div class="mobile-home-body" v-if="!isPlayingViewOpen">
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
                        <img src="../assets/icons/pause-green.svg" v-else class="icon-flex-right" @click="showAlert" alt=""
                            title="Playing">
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
                <MobileSocials title="GitHub" url="https://github.com/aakzsh" index="https://i.ibb.co/nbCZDQp/github.jpg" />
                <MobileSocials title="Gmail" url="mailto:aakzshh@gmail.com" index="https://i.ibb.co/476dVmK/gmail.png" />
                <MobileSocials title="LinkedIn" url="https://linkedin.com/in/aakzsh"
                    index="https://i.ibb.co/j31SzYL/linkedin.png" />
                <MobileSocials title="Discord" url="https://discord.gg" index="https://i.ibb.co/hHJYSwd/discord.jpg" />
                <MobileSocials title="Behance" url="https://behance.com/aakzsh"
                    index="https://i.ibb.co/dJLWqZY/behance.jpg" />

            </div>

            <div class="bottom-player" id="bottom-player" :style="computedStyle" @click="togglePlayingView">
                <MobileBottomPlayer />

            </div>
        </div>

    </div>
    <div class="playing-view-div" :style="playingViewStyle" v-else>

        <!-- <p>ab mai dikhunga</p> -->
        <div class="playerarea">
            <div class="playing-view-bg">
                <img src="../assets/covers/0.jpg" v-if="this.$store.state.currentIndex == 0" alt="" :style="style" srcset=""
                    class="card-image">
                <img src="../assets/covers/1.jpg" v-else-if="this.$store.state.currentIndex == 1" alt="" :style="style"
                    srcset="" class="card-image">
                <img src="../assets/covers/2.jpg" v-else-if="this.$store.state.currentIndex == 2" alt="" :style="style"
                    srcset="" class="card-image">
                <img src="../assets/covers/3.jpg" v-else-if="this.$store.state.currentIndex == 3" alt="" :style="style"
                    srcset="" class="card-image">
                <img src="../assets/covers/4.jpg" v-else-if="this.$store.state.currentIndex == 4" alt="" :style="style"
                    srcset="" class="card-image">
                <img src="../assets/covers/5.jpg" v-else-if="this.$store.state.currentIndex == 5" alt="" :style="style"
                    srcset="" class="card-image">
                <img src="../assets/covers/6.jpg" v-else-if="this.$store.state.currentIndex == 6" alt="" :style="style"
                    srcset="" class="card-image">
                <img src="../assets/covers/7.png" v-else-if="this.$store.state.currentIndex == 7" alt="" :style="style"
                    srcset="" class="card-image">
                <img src="../assets/covers/8.jpg" v-else-if="this.$store.state.currentIndex == 8" alt="" :style="style"
                    srcset="" class="card-image">
                <img src="../assets/covers/9.jpg" v-else alt="" :style="style" srcset="" class="card-image">
            </div>
            <div class="playarea-header">
                <img src="../assets/icons/pushdown.svg" @click="togglePlayingView" class="pushdown" alt="">
                <div class="playarea-header-text">
                    <p class="showing-from-playlist">SHOWING FROM PLAYLIST</p>
                    <strong>This Is AAKASH</strong>
                </div>
                <img src="../assets/icons/close.svg" style="visibility: hidden;" alt="">
            </div>
            <div class="big-cover-parent">
                <img src="../assets/covers/0.jpg" v-if="this.$store.state.currentIndex == 0" alt="" :style="style" srcset=""
                    class="card-imagee">
                <img src="../assets/covers/1.jpg" v-else-if="this.$store.state.currentIndex == 1" alt="" :style="style"
                    srcset="" class="card-imagee">
                <img src="../assets/covers/2.jpg" v-else-if="this.$store.state.currentIndex == 2" alt="" :style="style"
                    srcset="" class="card-imagee">
                <img src="../assets/covers/3.jpg" v-else-if="this.$store.state.currentIndex == 3" alt="" :style="style"
                    srcset="" class="card-imagee">
                <img src="../assets/covers/4.jpg" v-else-if="this.$store.state.currentIndex == 4" alt="" :style="style"
                    srcset="" class="card-imagee">
                <img src="../assets/covers/5.jpg" v-else-if="this.$store.state.currentIndex == 5" alt="" :style="style"
                    srcset="" class="card-imagee">
                <img src="../assets/covers/6.jpg" v-else-if="this.$store.state.currentIndex == 6" alt="" :style="style"
                    srcset="" class="card-imagee">
                <img src="../assets/covers/7.png" v-else-if="this.$store.state.currentIndex == 7" alt="" :style="style"
                    srcset="" class="card-imagee">
                <img src="../assets/covers/8.jpg" v-else-if="this.$store.state.currentIndex == 8" alt="" :style="style"
                    srcset="" class="card-imagee">
                <img src="../assets/covers/9.jpg" v-else alt="" :style="style" srcset="" class="card-imagee">
            </div>
            <div class="playarea-footer">
                <div class="playarea-footer-meta">
                    <div class="info-and-author">
                        <strong class="playarea-title">{{ this.$store.state.usersinfo[this.$store.state.currentIndex].title
                        }}</strong>
                        <p>{{ this.$store.state.usersinfo[this.$store.state.currentIndex].author }}</p>
                    </div>
                    <div class="playarea-icons-right">
                        <a v-if="this.$store.state.usersinfo[this.$store.state.currentIndex].haslink"
                            :href="this.$store.state.usersinfo[this.$store.state.currentIndex].link" target="_blank"><img
                                src="../assets/icons/globe.svg" alt="">
                        </a>
                        <!-- <a href=""> -->
                        <HeartMobile title="Like" :index="this.$store.state.currentIndex" />
                        <!-- </a> -->
                    </div>
                </div>

            </div>

        </div>
        <div class="playarea-footer-content" :style="computedStyle">
            <p>{{ this.$store.state.usersinfo[this.$store.state.currentIndex].content.join(" ") }}</p>
        </div>
    </div>
</template>
  
<script>
import { ref } from 'vue';
import HeartPlaylist from './HeartPlaylist.vue';
import MobileBottomPlayer from './MobileBottomPlayer.vue'
import MobileSocials from './MobileSocials.vue';
import MobileSongTile from './MobileSongTile.vue';
import HeartMobile from './HeartMobile.vue';
export default {
    name: 'MobileHomePage',
    components: {
        MobileBottomPlayer,
        MobileSongTile,
        HeartPlaylist,
        MobileSocials,
        HeartMobile
    },
    setup() {
        const promoOpen = ref(true);
        function togglePromo() {
            promoOpen.value = false;
        }
        const isPlayingViewOpen = ref(false);
        function togglePlayingView() {
            isPlayingViewOpen.value = !isPlayingViewOpen.value;
        }
        return { promoOpen, togglePromo, isPlayingViewOpen, togglePlayingView }
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
        showAlert() {
            alert("This feature is only available on desktop version")
        }
    },
    computed: {

        computedStyle() {
            return {
                backgroundColor: this.$store.state.usersinfo[this.$store.state.currentIndex].mobileColor
                // backgroundImage: "url(../assets/covers/0.jpg)"
            };
        },
        playingViewStyle() {
            return {
                // backgroundImage: 'url("../assets/covers/0.jpg")'
            };
        },
    },
}
</script>
  
<style scoped>
.playarea-footer-meta {
    display: flex;
    justify-content: space-between;
    padding: 1rem;

}

.big-cover-parent {
    display: flex;
    justify-content: center;
    align-items: center;
}

.playarea-icons-right {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.card-imagee {
    z-index: 3;
    width: 90vw;
    height: 90vw;
}

.playing-view-bg {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: 1;
    opacity: 0.1;

}

.pushdown {
    height: 1.5rem;
}

.playarea-footer {
    z-index: 3;
}

.playarea-footer-content {
    padding: 1rem;
    margin: 1rem;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 600;
    border-radius: 1rem;
    /* margin-top: 100vh; */
    z-index: 3;
    /* top: 100vh; */
}

.info-and-author {
    line-height: 0.5rem;
}

.showing-from-playlist {
    font-size: 0.8rem;
    opacity: 0.9;
}

.playarea-title {
    font-size: 1.2rem;
}

.playarea-header-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 3px;
}

.playarea-header {
    display: flex;
    justify-content: space-between;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.5rem;
    z-index: 2;
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

.playerarea {
    height: 90vh;
    width: 100vw;
    /* background-color: rgb(37, 31, 20); */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* position: fixed; */
    /* top: 0; */
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

.desktop-promo {
    width: 100%;
    height: 3rem;
    /* background-color: orangered; */
    position: fixed;
    z-index: 3;
    top: 1rem;
    display: flex;
    justify-content: center;

}

.desktop-promo-content {
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

.closeicon {
    height: 1.5rem;
}

.socials {
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
    transition: all 0.5s ease-in-out;
}</style>
  