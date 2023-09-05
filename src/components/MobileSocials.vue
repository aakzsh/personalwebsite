<template>
<a :href="url">
    <div class="cont">
        <img :src="index" alt="">
        <p>{{title}}</p>
    </div>
</a>
</template>

<script>
    export default {
    name: 'MobileSocials',
    props: {
        title: String,
        url: String,
        index: String,
    }
    }
</script>

<style scoped>
.cont{
    min-width: calc(100vw/2.5);
    /* height: calc(100vw/2.5 + 20px); */
    /* background-color: blue; */
}

img{
    height: calc(100vw/2.5);
    width: calc(100vw/2.5);
    border-radius: 0.5rem;
}
p{
    margin-top: 0rem;
}
a{
    text-decoration: none;
    color: white;
    font-size: 0.9rem;
}
</style>