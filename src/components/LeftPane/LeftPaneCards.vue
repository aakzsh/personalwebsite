<template>
    <div class="card-wrapper">

        <img :src="imgurl" alt="" :style="style" srcset="" class="card-img">
    </div>
</template>
  
<script>
export default {
    name: 'LeftPaneCards',
    props: {
        imgurl: String,
        radius: String,
    },
    computed: {
        style() {
            return 'border-radius:' + this.radius + "rem";
        }
    },
}
</script>
  
<style scoped>
.card-img {
    height: 3rem;
    width: 3rem;
}
</style>
  