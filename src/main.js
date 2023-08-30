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
      usersinfo: [
        {
          index: 1,
          title: "About me",
          author: "aakash",
          date: new Date(2023, 8-1, 30),
          album: "Text",
          haslink: false,
          link: "",
          color: "#717d90",

          readtime: 150,
          imgurl: "xyz",
          content: "Something here",
        },
        {
          index: 2,
          title: "cloudees",
          author: "aakash, shruti",
          date: new Date(2023, 8-1, 8),
          readtime: 330,
          imgurl: "xyz",
          album: "Project",
          haslink: true,
          link: "https://play.google.com/store/apps/details?id=co.zanie.cloudees",
          color: "#8F36A5",
          content: "Something here",
        },
        {
          index: 3,
          title: "rEaR vIeW",
          author: "aakash, originally by zayn",
          date: new Date(2021, 10-1, 8),
          readtime: 30,
          imgurl: "xyz",
          album: "Video Edit",
          haslink: true,
          link: "https://youtu.be/BuPfGjpAt7g",
          color: "#A55E36",
          content: "Something here",
        },
        {
          index: 4,
          title: "Skillset",
          author: "aakash",
          date: new Date(2023, 8-1, 30),
          readtime: 1050,
          imgurl: "xyz",
          album: "Text",
          haslink: false,
          link: "",
          color: "#368AA5",
          content: "Something here",
        },
        {
          index: 5,
          title: "Education",
          author: "aakash",
          date: new Date(2023, 8-1, 30),
          readtime: 1050,
          imgurl: "xyz",
          album: "Text",
          haslink: false,
          link: "",
          color: "#D700A860",
          content: "Something here",
        },
        {
          index: 6,
          title: "HighFive",
          author: "aakash, project",
          date: new Date(2022, 8-1, 19),
          readtime: 1050,
          imgurl: "xyz",
          album: "Project",
          haslink: true,
          link: "https://github.com/aakzsh/highfive",
          color: "#2E6330",
          content: "Something here",
        },
        {
          index: 7,
          title: "Retrotape",
          author: "aakash, shruti",
          date: new Date(2023, 8-1, 20),
          readtime: 1050,
          imgurl: "xyz",
          album: "Project",
          haslink: true,
          link: "https://retrotape.web.app/",
          color: "#D9784180",
          content: "Something here",
        },
        {
          index: 8,
          title: "end.",
          author: "aakash, originally by Jeremy",
          date: new Date(2022, 3-1, 16),
          readtime: 1050,
          imgurl: "xyz",
          album: "Video Edit",
          haslink: true,
          link: "https://www.youtube.com/shorts/mCBuVovEYPU",
          color: "#41D99970",
          content: "Something here",
        },
        {
          index: 9,
          title: "Dandelions",
          author: "aakash, originally by Ruth B.",
          date: new Date(2022, 3-1, 31),
          readtime: 1050,
          imgurl: "xyz",
          album: "Video Edit",
          haslink: true,
          link: "https://www.youtube.com/shorts/b7yut6ERRWU",
          color: "#D5A83480",
          content: "Something here",
        },
        {
          index: 10,
          title: "Icesicle",
          author: "aakash, shruti, hanna, hamda",
          date: new Date(2022, 3-1, 11),
          readtime: 1050,
          imgurl: "xyz",
          album: "Project",
          haslink: true,
          link: "https://icesicle-puzzle.web.app/",
          color: "#34B8D560",
          content: "Something here",
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
