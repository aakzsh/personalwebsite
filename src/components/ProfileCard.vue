<template>
    <!-- <h2>check</h2> -->
    <div class="profilecard-parent">
        <div>
            <img src="../assets/images/this-is-aakash.jpg" class="profile-img" alt="" srcset="">
        </div>
        <div>
            <p class="pre-title">Public Playlist</p>
            <strong><p class="title">This Is AAKASH</p></strong>
            <p class="post-title">This is aakash. The essential tracks, all in one playlist</p>
            <div class="post-title-info">
                <p>spotify logo and stuff</p>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'ProfileCard',
}
</script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700');
.profilecard-parent{
    margin-left: 2rem;
    margin-top: 1rem;
    display: flex;
    gap: 2.5rem;
    align-items: end;
}
.profile-img{
    height: 15rem;
    width: 15rem;
}

.pre-title{
    font-size: 0.8rem;
    /* opacity: 0.8; */
}
.post-title{
    font-size: 0.9rem;
    opacity: 0.9;
}

.title{
    font-family: 'Montserrat', sans-serif;
    font-size: 5rem;
    margin-top: -0.3rem;
    margin-bottom: -0.1rem;
}
</style>
