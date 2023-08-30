import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import NowPlayingMixin from "./mixins/NowPlayingMixin";

const store = createStore({
  state() {
    return {
      count: 0,
      info: {
        title: "title",
        author: "lauthar",
        album: "chmech",
        content: "hey im gonna check it out okay? dw please",
      },
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
          date: "30 farvary",
          readtime: 150,
          imgurl: "xyz",
          album: "text",
          haslink: false,
          link: "",
          color: "#818573",
          content: "aaila mastermind",
        },
        {
          index: 2,
          title: "cloudees",
          author: "aakash, shruti",
          date: "30 farvary",
          readtime: 330,
          imgurl: "xyz",
          album: "project",
          haslink: true,
          link: "https://github.com/aakzsh/cloudees",
          color: "#818573",
          content: "aaila chocopie",
        },
        {
          index: 3,
          title: "rEaR vIeW",
          author: "aakash, originally by zayn",
          date: "30 farvary",
          readtime: 30,
          imgurl: "xyz",
          album: "video edit",
          haslink: true,
          link: "https://github.com/aakzsh/cloudees",
          color: "#828573",
          content: "aaila macaron",
        },
        {
          index: 4,
          title: "Skillset",
          author: "aakash",
          date: "30 farvary",
          readtime: 1050,
          imgurl: "xyz",
          album: "text",
          haslink: true,
          link: "https://github.com/aakzsh/cloudees",
          color: "#819573",
          content: "aaila oops",
        },
        {
          index: 5,
          title: "Education",
          author: "aakash",
          date: "30 farvary",
          readtime: 1050,
          imgurl: "xyz",
          album: "text",
          haslink: true,
          link: "https://github.com/aakzsh/cloudees",
          color: "#668573",
        },
        {
          index: 6,
          title: "HighFive",
          author: "aakash, project",
          date: "30 farvary",
          readtime: 1050,
          imgurl: "xyz",
          album: "project",
          haslink: true,
          link: "https://github.com/aakzsh/cloudees",
          color: "#928582",
        },
        {
          index: 7,
          title: "Retrotape",
          author: "aakash, shruti",
          date: "30 farvary",
          readtime: 1050,
          imgurl: "xyz",
          album: "project",
          haslink: true,
          link: "https://github.com/aakzsh/cloudees",
          color: "#8AD573",
        },
        {
          index: 8,
          title: "end.",
          author: "aakash, originally by Jeremy",
          date: "30 farvary",
          readtime: 1050,
          imgurl: "xyz",
          album: "video edit",
          haslink: true,
          link: "https://github.com/aakzsh/cloudees",
          color: "#298573",
        },
        {
          index: 9,
          title: "Dandelions",
          author: "aakash, originally by Ruth B.",
          date: "30 farvary",
          readtime: 1050,
          imgurl: "xyz",
          album: "video edit",
          haslink: true,
          link: "https://github.com/aakzsh/cloudees",
          color: "#718573",
        },
        {
          index: 10,
          title: "Icesicle",
          author: "aakash, shruti, hanna, hamda",
          date: "30 farvary",
          readtime: 1050,
          imgurl: "xyz",
          album: "project",
          haslink: true,
          link: "https://github.com/aakzsh/cloudees",
          color: "#81F573",
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
      // state.info =  user;
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
      if (state.currentIndex == state.usersinfo.length - 1 ) {
        state.currentIndex = 0;
      } else {
        state.currentIndex++;
      }
    },
    decIndex(state) {
      if (state.currentIndex == 0){
        state.currentIndex =state.usersinfo.length -1 ;
      } else {
        state.currentIndex--;
      }
    },
    setIndex(state, ind){
      if(ind>=0 && ind<10){
        state.currentIndex = ind;
      }
      else{
        state.currentIndex = 0;
      }
    }
  },
});

const app = createApp(App);

app.mixin(NowPlayingMixin);
app.use(store);
app.mount("#app");
