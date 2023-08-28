import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import NowPlayingMixin from './mixins/NowPlayingMixin'

const store = createStore({
    state () {
      return {
        count: 0,
        info: {title: "title", author: "lauthar"}
      }
    },
    mutations: {
      increment (state) {
        state.count++
      },
      setInfo(state, user) {
        state.info =  user
      }
    }
  })


const app = createApp(App)

app.mixin(NowPlayingMixin)
app.use(store)
app.mount('#app')