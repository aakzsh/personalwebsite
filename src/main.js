import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import NowPlayingMixin from './mixins/NowPlayingMixin'

const store = createStore({
    state () {
      return {
        count: 0,
        info: {title: "title", author: "lauthar", album: "chmech"},
        isPlayingViewOpen: true,
        clr: "linear-gradient(#717d90 20%, 80%, #121212)",
        st: {
          backgroundImage: "linear-gradient(#717d90 20%, 80%, #121212)"
        }
      }
    },
    mutations: {
      increment (state) {
        state.count++
      },
      setInfo(state, user) {
        state.isPlayingViewOpen = true;
        state.info =  user;
        store.commit('setGradientScheme', user.color)
      },
      toggleOpen(state){
        state.isPlayingViewOpen = !state.isPlayingViewOpen
      },
      setGradientScheme(state, color){
        state.st ={
          backgroundImage: "linear-gradient(" + color +" 20%, 80%, #121212)"
        }
      }
    }
  })


const app = createApp(App)

app.mixin(NowPlayingMixin)
app.use(store)
app.mount('#app')