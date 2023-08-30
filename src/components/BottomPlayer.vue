<template>
    <div class="bottom-player-div">
        <div class="card-wrapper" title="Now Playing">

            <img src="https://media.discordapp.net/attachments/873911460055642152/1144206354345640076/Picsart_23-08-24_15-15-29-859.jpg"
                alt="" :style="style" srcset="" class="card-img">
            <div class="info-and-author">
                <strong>{{ this.$store.state.usersinfo[this.$store.state.currentIndex].title }}</strong>
                <p>{{ this.$store.state.usersinfo[this.$store.state.currentIndex].author }}</p>
            </div>
            <Heart />
        </div>
        <div class="mid-parent">
            <div class="btns-parent">
                <img src="../assets/icons/shuffle-selected.svg" :title="'shuffle: ' + this.$store.state.isOnShuffle"
                    v-if="this.$store.state.isOnShuffle" @click="this.$store.commit('toggleShuffle')" class="secondary"
                    alt="">
                <img src="../assets/icons/shuffle.svg" v-else class="secondary"
                    :title="'shuffle: ' + this.$store.state.isOnShuffle" @click="this.$store.commit('toggleShuffle')"
                    alt="">

                <img src="../assets/icons/prev.svg" title="Previous" class="small" alt="" @click="prevSong">
                <img src="../assets/icons/play.svg" title="Play" v-if="!this.$store.state.isPlaying" @click="greet" class="large" alt="">
                <img src="../assets/icons/pause.svg" title="Pause" v-else @click="greet" class="large" alt="">
                <img src="../assets/icons/next.svg" title="Next" class="small" alt="" @click="nextSong">
                <img src="../assets/icons/repeat-selected.svg" v-if="this.$store.state.isOnRepeat"
                    :title="'repeat: ' + this.$store.state.isOnRepeat" class="secondary" alt=""
                    @click="this.$store.commit('toggleRepeat')">
                <img src="../assets/icons/repeat.svg" v-else :title="'repeat: ' + this.$store.state.isOnRepeat"
                    class="secondary" alt="" @click="this.$store.commit('toggleRepeat')">
            </div>
            <div class="sound-bar-parent">
                <p>{{ Math.floor(startTime / 60) + ":" + `${startTime % 60 == 0 ? '00' : startTime % 60}` }}</p>
                <div class="progress-bar">

                </div>
                <p>{{ Math.floor(this.$store.state.usersinfo[this.$store.state.currentIndex].readtime / 60) + ":" +
                    `${this.$store.state.usersinfo[this.$store.state.currentIndex].readtime % 60 == 0 ? '00' :
                        this.$store.state.usersinfo[this.$store.state.currentIndex].readtime % 60}` }}
                </p>
            </div>
        </div>
        <div class="right-parent" title="Open/Close Playing View">
            <img src="../assets/icons/playview.svg" v-on:click="this.$store.commit('toggleOpen')" alt="">
        </div>
    </div>
</template>
  
<script>


import { ref } from 'vue';
import Heart from './Heart.vue';
export default {
    name: 'BottomPlayer',
    components: {
        Heart
    },
    setup() {
        const startTime = ref(0);
        const endTime = ref(Number(2));
        function increaseTime() {
            setInterval(function () { startTime.value++ }, 1000)
        }
        function resetTime() {
            const intervalIds = [];
            for (const interval of window.intervals) {
                intervalIds.push(interval.id);
            }
            for (const intervalId of intervalIds) {
                clearInterval(intervalId);
            }
            startTime.value = 0;
        }
        return { startTime, endTime, increaseTime, resetTime };
    },
    data() {
        return {
            selectedVoice: 0,
            synth: window.speechSynthesis,
            voiceList: [],
            greetingSpeech: new window.SpeechSynthesisUtterance()
        }
    },
    mounted() {
        this.voiceList = this.synth.getVoices()
        this.synth.onvoiceschanged = () => {
            this.voiceList = this.synth.getVoices()
            setTimeout(() => {
                this.isLoading = false
            }, 800)
        }
        this.listenForSpeechEvents()
    },
    methods: {

        nextSong() {
            this.stop();
            this.$store.commit('incIndex');
        },


        prevSong() {
            this.stop();
            this.$store.commit('decIndex');
        },

        listenForSpeechEvents() {
            this.greetingSpeech.onstart = () => {
                this.$store.commit('togglePlaying', true);
            }

            this.greetingSpeech.onend = () => {
            }
        },


        greet() {
            if (this.synth.speaking) {
                this.$store.commit('togglePlaying', false);

                this.synth.pause();
            }
            if (this.synth.paused) {
                this.synth.resume();
                this.$store.commit('togglePlaying', true);
            }
            this.greetingSpeech.text = "Disclaimer: This is a machine generated audio!. " + this.$store.state.usersinfo[this.$store.state.currentIndex].content;

            this.greetingSpeech.voice = this.voiceList[Math.floor(Math.random() * 5)]

            this.synth.speak(this.greetingSpeech,)
            this.greetingSpeech.onend = () => {
                if (this.$store.state.isOnRepeat) {
                    this.$store.commit('togglePlaying', false);
                }
                else {
                    this.$store.commit('togglePlaying', false);
                    this.stop()
                    this.synth.cancel()
                    if (this.$store.state.isOnShuffle) {
                        let randomNumber = Math.random();
                        let rInt = Math.floor(randomNumber * 9);
                        this.$store.commit('setIndex', rInt);
                    }
                    else {
                        this.$store.commit('incIndex');
                    }
                }
            };

        },
        stop() {
            this.synth.pause();
            this.$store.commit('togglePlaying', false);
        }
    }
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
}

.card-img {
    height: 3.5rem;
    width: 3.5rem;
}

.secondary {
    height: 1.3rem;
}


.info-and-author {
    width: 14rem;
}

.card-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.8rem;
    line-height: 0.6rem;
    width: 20rem;
}

.right-parent {
    width: 20rem;
    display: flex;
    justify-content: flex-end;
}

.small {
    height: 1rem;
}

.large {
    height: 2rem;
}

.btns-parent {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
}

.sound-bar-parent {
    margin-top: -0.5rem;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.593);
}

.progress-bar {

    width: 30rem;
    height: 0.1rem;
    background-image: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0.529) 0%);

}

.mid-parent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
  