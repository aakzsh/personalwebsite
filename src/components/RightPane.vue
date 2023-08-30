<template>
    <div class="rightpane-parent" :style="this.$store.state.st">
        <ProfileCard />
        <RightPaneBottom />
    </div>
</template>
  
<script>
import ProfileCard from './ProfileCard.vue';
import RightPaneBottom from './RightPaneBottom.vue';
export default {
    name: 'RightPane',
    components: {
        ProfileCard,
        RightPaneBottom
    },
    data() {
    return {
      textColor: "blue"
    };
    
  },
  
  computed: {
  computedStyle() {
    return {
      backgroundImage:  this.$store.state.clr
    };
  },
},

}
</script>
  
<style scoped>
    .rightpane-parent{
        margin-top: 0.5rem;
        height: calc(100% - 0.5rem);
        width: calc(100% - 6rem);
        display: flex;
        flex-direction: column;
        border-radius: 0.6rem;
        scroll-behavior: smooth;
        scrollbar-width: thin;
        overflow-y: hidden;
        overflow-x: hidden;
        scrollbar-gutter: stable ;
        padding-right: 0rem;
    }
    .rightpane-parent:hover {
    overflow-y: auto;

}
</style>
  