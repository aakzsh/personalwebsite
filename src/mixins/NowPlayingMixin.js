import { ref } from "vue";
export default {
  name: "NowPlayingMixin",
  
    methods: {
      myMethod(){
        
      // function changeText(){
        this.text = "lmdaoo";
        console.log("chmecking")
      // }
      // return {changeText}
      },
      togglePlayerOpen(){
        this.NowPlayingOpen = !this.NowPlayingOpen
      }
    },
    data() {
      const text = ref("aaila ka daaila")
      const NowPlayingOpen = ref(true);
      return {
        text, NowPlayingOpen
      }
    },
    
    
  };