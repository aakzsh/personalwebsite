<template>
    <!-- <h2>check</h2> -->
    <div class="profilecard-parent">
        <div>
            <img src="../assets/images/this-is-aakash.jpg" class="profile-img" alt="" srcset="">
        </div>
        <div>
            <p class="pre-title">Public Portfolio</p>
            <strong><p class="title">This Is AAKASH</p></strong>
            <p class="post-title">This is AAKASH. The essential works, all in one place!</p>
            <div class="post-title-info">
                <p>theme inspired by</p>
                <img src="../assets/icons/spotify_icon.png" class="spotify-icon" alt="">
                <p>(obviously)</p>
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
.spotify-icon{
    height: 1.5rem;
}
.post-title-info{
    display: flex;
    justify-content: flex-start;
    gap: 0.5rem;
    align-items: center;
    font-size: 0.9rem;
    margin-top: -0.9rem;
    font-weight: bold;
}
.profilecard-parent{
    margin-left: 2rem;
    margin-top: 2rem;
    display: flex;
    gap: 2.5rem;
    align-items: flex-end;
}
.profile-img{
    height: 15rem;
    width: 15rem;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 10px 20px;
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
