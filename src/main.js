import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import NowPlayingMixin from "./mixins/NowPlayingMixin";

const store = createStore({
  state() {
    return {
      count: 0,
      isPlayingViewOpen: true,
      clr: "linear-gradient(#717d90 20%, 80%, #121212)",
      st: {
        backgroundImage: "linear-gradient(#717d90 20%, 80%, #121212)",
      },
      isOnRepeat: false,
      isOnShuffle: false,
      isPlaying: false,
      currentIndex: 0,
      playlistLiked: false,
      usersinfo: [
        {
          index: 1,
          title: "About me",
          author: "aakash",
          date: new Date(2023, 8 - 1, 30),
          album: "Text",
          haslink: false,
          link: "",
          color: "#717d90",
          mobileColor: "#717d90",
          readtime: 150,
          imgurl: "xyz",
          content: ["I'm aakash, 21 years old and based in Noida, IN. I like a lot of things, and hate a lot of things as well. This portfolio website of mine is a glimpse of the kind of works I do, and how I like doing things. I like the UX of spotify pretty much, and that's how the theme for my portfolio was brought up.",
          "I'm proud of my identity, and am working almost frequently to get better at things and make a meaningful outcome from life. About the programming part, I like making projects and and stuff where I can put my logic and creativity.",
        "I like doing video editing, not in a very professional and full fledged manner but yes. It brings me inner peace which is cool, unless you dont run into memory issues while exporting",
        "So yep, go through the portfolio, the layout is very intuitive, almost every button has some functionality, you may find some easter eggs hidden too, and lmk how you like it!"
        ],
        liked: false,
        },
        {
          index: 2,
          title: "cloudees",
          author: "aakash, shruti",
          date: new Date(2023, 8 - 1, 8),
          readtime: 70,
          imgurl: "xyz",
          album: "Project",
          haslink: true,
          link: "https://play.google.com/store/apps/details?id=co.zanie.cloudees",
          mobileColor: "#8F36A5",
          color: "#8F36A5",
          content: ["At its core, cloudees is a deep learning keras model. It is deployed on various platforms and that's what makes it special to be put here.",
          "We all see and adore different clouds in the sky. But do you know that every cloud structure falls into a specific category? Yea thats true, and cloudees lets you see just that. It is trained on our custom dataset of more than 9000 images and can categorize cloud images into one of the nine categories. It works using CNN (Convolutional Neural Networks) and is available on Web, as an Android app and as an API.",
          "The app is available on Play Store for you to try it out, visit it by clicking on the globe icon."
        ],
        liked: false,
        },
        {
          index: 3,
          title: "rEaR vIeW",
          author: "aakash, originally by zayn",
          date: new Date(2021, 10 - 1, 8),
          readtime: 50,
          imgurl: "xyz",
          album: "Video Edit",
          haslink: true,
          link: "https://youtu.be/BuPfGjpAt7g",
          mobileColor: "#A55E36",
          color: "#A55E36",
          content: [
            "Rear View is a song originally created by zayn. I've created a short edit using that song in background.",
            "The edit signifies the fast transitions between changing lyrics, which is a skewed version of Kinetic Typography edits.",
            "Check it out by visiting the YouTube link by clicking on the globe icon!"
          ],
          liked: false,
        },
        {
          index: 4,
          title: "Skillset",
          author: "aakash",
          date: new Date(2023, 8 - 1, 30),
          readtime: 119,
          imgurl: "xyz",
          album: "Text",
          haslink: true,
          link: "https://github.com/aakzsh",
          mobileColor: "#368AA5",
          color: "#368AA5",
          content: [
            "I've a fair knowledge of computer science technologies.",
            "I can do programming in various languages including C++, C, Python, Javascript and Dart.",
            "I've created applications and programs using frameworks and libraries such as Flutter, Flask, React, Vue, Next.",
            "I've knowledge of databases and cloud technologies like Firebase, MongoDB, MySQL.",
            "I also do video editing.",
            "All these skills that I've mentioned, I use them because I like them, not because they're required in industry or anything like that. I'm NOT an industry pleaser.",
            "You can checkout my GitHub from the left panel or from the globe icon here.",
          ],
          liked: false,
        },
        {
          index: 5,
          title: "Education",
          author: "aakash",
          date: new Date(2023, 8 - 1, 30),
          readtime: 15,
          imgurl: "xyz",
          album: "Text",
          haslink: false,
          link: "",
          mobileColor: "#D700A8",
          color: "#D700A860",
          content: [
            "I'm currently doing my bachelors in electronics engineering from New Delhi, expecting to graduate in 2024.",
            "I've done by schooling from Noida.",
          ],
          liked: false,
        },
        {
          index: 6,
          title: "HighFive",
          author: "aakash, shruti",
          date: new Date(2022, 8 - 1, 19),
          readtime: 100,
          imgurl: "xyz",
          album: "Project",
          haslink: true,
          link: "https://github.com/aakzsh/highfive",
          mobileColor: "#2E6330",
          color: "#2E6330",
          content: [
            "HighFive is a concept application built to solve a very prevalent real-life problem. We know that, in many places accross the world, the internet connections aren't upto the mark. This fact hampers the functioning of digital education. And digital education as we all know is very much crucial in current times.",
            "So, to solve this issue, my team came up with the idea of HighFive. HighFive is a mobile application that is meant to be used in classrooms. It'll have two access levels - teachers and students. The teachers can create classrooms on their phones which would essentially be a port on their localhost, and the other students can connect to the classroom.",
            "Then the teaacher can feasibly send files or textual materials to all the students without the need of internet, using offline transfer. The app utilizes the powers of UDP protocol which makes it fast and efficient!",
            "Check out the source code by clicking on the globe icon.",
          ],
          liked: false,
        },
        {
          index: 7,
          title: "Retrotape",
          author: "aakash, shruti",
          date: new Date(2023, 8 - 1, 20),
          readtime: 80,
          imgurl: "xyz",
          album: "Project",
          haslink: true,
          link: "https://retrotape.web.app/",
          mobileColor: "#D97841",
          color: "#D9784180",
          content: [
            "We all love music and the feeling that it is capable of bringing",
            "What about when you wanna dedicate songs to someone else, you can create a playlist for them right?",
            "Retrotape beautifies the process. It lets you create visually beautiful and soft mixtapes, that are essentially playlists, for the people you love. You can add as many songs as you like on our web application, and then share the link with whoever you want to. The app works best on web",
            "You can check it out by clicking the globe icon.",
          ],
          liked: false,
        },
        {
          index: 8,
          title: "end.",
          author: "aakash, originally by Jeremy",
          date: new Date(2022, 3 - 1, 16),
          readtime: 50,
          imgurl: "xyz",
          album: "Video Edit",
          haslink: true,
          link: "https://www.youtube.com/shorts/mCBuVovEYPU",
          mobileColor: "#378B68",
          color: "#41D99970",
          content: [
            "A short video edit with a kinda sad but soothing background song called end, by Jeremy Zucker.",
            "The edit is a picturizaton of how one's head is when they're yearning for accepting the reality of separation and getting through it.",
            "The edit elements depicts randomness and is portrayed in form of a song playback.",
            "check it out on YouTube.",
          ],
          liked: false,
        },
        {
          index: 9,
          title: "Dandelions",
          author: "aakash, originally by Ruth B.",
          date: new Date(2022, 3 - 1, 31),
          readtime: 30,
          imgurl: "xyz",
          album: "Video Edit",
          haslink: true,
          link: "https://www.youtube.com/shorts/b7yut6ERRWU",
          mobileColor: "#D5A834",
          color: "#D5A83480",
          content: [
            "I created a short edit on the infamous song Dandelions, by Ruth B.",
            "The edit captures the essence of spoofing the nature by metaphorically relating it to the things and moments of our real life.",
            "Check it out on YouTube by clicking on the globe icon.",
          ],
          liked: false,
        },
        {
          index: 10,
          title: "Icesicle",
          author: "aakash, shruti, hanna, hamda",
          date: new Date(2022, 3 - 1, 11),
          readtime: 30,
          imgurl: "xyz",
          album: "Project",
          haslink: true,
          link: "https://icesicle-puzzle.web.app/",
          mobileColor: "#267283",
          color: "#34B8D560",
          content: [
            "Icesicle is a tricky puzzle game built using flutter. The puzzle game is a slider puzzle where you are required to arrange the pieces in a certain order, by sliding them.",
            "The game is available on Web and as an Android app. The animations are built using Rive, and the web application is hosted using firebase!",
            "You can try out the game by clicking on the globe icon.",
          ],
          liked: false,
        },
      ],
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setInfo(state, index) {
      state.isPlayingViewOpen = true;
      state.currentIndex = index;
      store.commit(
        "setGradientScheme",
        state.usersinfo[state.currentIndex].color
      );
    },
    toggleOpen(state) {
      state.isPlayingViewOpen = !state.isPlayingViewOpen;
    },
    setGradientScheme(state, color) {
      state.st = {
        backgroundImage: "linear-gradient(" + color + " 20%, 80%, #121212)",
      };
    },
    toggleLiked(state){
      state.usersinfo[state.currentIndex].liked = !state.usersinfo[state.currentIndex].liked
    },
    togglePlaylistLiked(state){
      state.playlistLiked = !state.playlistLiked
    },
    setUsersInfo(state, val) {
      state.usersinfo = val;
    },
    toggleShuffle(state) {
      state.isOnShuffle = !state.isOnShuffle;
    },
    toggleRepeat(state) {
      state.isOnRepeat = !state.isOnRepeat;
    },
    togglePlaying(state, val) {
      state.isPlaying = val;
    },
    incIndex(state) {
      if (state.currentIndex == state.usersinfo.length - 1) {
        state.currentIndex = 0;
      } else {
        state.currentIndex++;
      }
    },
    decIndex(state) {
      if (state.currentIndex == 0) {
        state.currentIndex = state.usersinfo.length - 1;
      } else {
        state.currentIndex--;
      }
    },
    setIndex(state, ind) {
      if (ind >= 0 && ind < 10) {
        state.currentIndex = ind;
      } else {
        state.currentIndex = 0;
      }
    },
  },
});

const app = createApp(App);

app.mixin(NowPlayingMixin);
app.use(store);
app.mount("#app");
