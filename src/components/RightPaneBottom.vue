<template>
    <div class="rightpane-bottom-parent">
        <!-- <p>lmaoooooooooo</p> -->
        <div class="content-options">
            <div class="content-left">
                <img src="../assets/icons/play-green.svg" class="left-play" alt="">
                <img src="../assets/icons/heart.svg" class="left" alt="">
                <img src="../assets/icons/download.svg" class="left" alt="">
            </div>
            <div class="content-right">
                <img src="../assets/icons/search.svg" class="right" alt="">
            </div>
        </div>
        <table>
            <thead>
                <tr>
                    <th style=" padding-left: 1rem;">#</th>
                    <th>Title</th>
                    <th>Album</th>
                    <th>Date Added</th>
                    <th>Duration</th>
                </tr>
            </thead>
            
            <tbody>
                <br>
                <tr class="line">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <br>
                <tr v-for="user in users" v-bind:key="user.name" class="songs-listitem">
                    <!-- <td class="serialnum">{{ user.name }}</td>
                    <td class="songtitle">{{ user.age }}</td>
                    <td class="album">{{ user.name }}</td>
                    <td class="dateadded">{{ user.age }}</td>
                    <td class="duration">{{ user.occupation }}</td> -->
                    <SongTile />
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script>
import SongTile from './SongTile.vue';
export default {
    name: 'RightPaneBottom',
    components: {
        SongTile
    },
    data() {
        return {
            users: [
                {
                    name: '1',
                    age: "hehehe",
                    occupation: 'Software Engineer',
                },
                {
                    name: '2',
                    age: "hahah",
                    occupation: 'Doctor',
                },
                {
                    name: '1',
                    age: "hehehe",
                    occupation: 'Software Engineer',
                },
                {
                    name: '2',
                    age: "hahah",
                    occupation: 'Doctor',
                },
                {
                    name: '1',
                    age: "hehehe",
                    occupation: 'Software Engineer',
                },
                {
                    name: '2',
                    age: "hahah",
                    occupation: 'Doctor',
                },
                {
                    name: '1',
                    age: "hehehe",
                    occupation: 'Software Engineer',
                },
                {
                    name: '2',
                    age: "hahah",
                    occupation: 'Doctor',
                },
            ],
        };
    },
}
</script>
  
<style scoped>
.rightpane-bottom-parent {
    margin-top: 2rem;
    background: linear-gradient(#12121250,#121212, #121212);
    /* background-color: #121212; */
    height: max-content;
    backdrop-filter: blur(30px);
    border-radius: 0 0 1rem 1rem;
}

.content-options {
    display: flex;
    justify-content: space-between;
    margin: 2rem;
    align-items: center;
}

.content-left {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.content-right {
    display: flex;
    gap: 1rem;
}

.left {
    height: 2rem;
}

.right {
    height: 1.5rem;
}

.left-play {
    height: 3.5rem;
}
table{
    flex: 1 1 auto;
    width: calc(100% - 4rem);
    text-align: left;
    margin-left: 2rem;
    
    margin-right: 2rem;
    border-collapse: collapse;
}





.line{
    width: 100%;
    height: 1px;
    max-height: 1px;
    background-color: rgba(255, 255, 255, 0.105);
    padding-top: 5rem;
    padding-bottom: 5rem;
}

.songs-listitem{
    background-color: rgba(0, 0, 0, 0);
}

.songs-listitem:hover{
    background-color: rgba(255, 255, 255, 0.1);
}

</style>
  