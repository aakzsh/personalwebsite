<template>
    <div class="rightpane-bottom-parent">
        <!-- <p>lmaoooooooooo</p> -->
        <div class="content-options">
            <div class="content-left">
                <img src="../assets/icons/play-green.svg" class="left-play" alt="">
                <Heart id="x" />
                <img src="../assets/icons/download.svg" @click="downloadFile" class="left" alt="">
            </div>
            <div class="modal" v-if="!showModal" @click:outside="toggle">
                <input type="text" class="search-input" placeholder="type here" id="inp" v-on:keyup.enter="search">
                <button @click="search"><img src="../assets/icons/search.svg" alt=""></button>
            </div>
            <div class="content-right">
                <select name="sorter" @change="sorting">
                    <option value="Custom order">Custom Order</option>
                    <option value="Title">Title</option>
                    <option value="Author">Author</option>
                    <option value="Album">Album</option>
                    <option value="Date">Date Added</option>
                    <option value="Readtime">Reading Time</option>
                </select>
            </div>
        </div>
        <table>
            <thead>
                <tr>
                    <th style=" padding-left: 1rem;">#</th>
                    <th>Title</th>
                    <th>Album</th>
                    <th>Date Added</th>
                    <th>Reading Time</th>
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
                <tr v-for="(user, index) in this.$store.state.usersinfo" v-bind:key="user.name" class="songs-listitem" @click="this.$store.commit('setInfo', index)">
                    <SongTile :content="user" :ind="index" />
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script>
import SongTile from './SongTile.vue';
import Heart from './Heart.vue'
import { ref } from 'vue';
export default {
    name: 'RightPaneBottom',
    components: {
        SongTile,
        Heart
    },
    setup() {
        const showModal = ref(false);
        function toggle() {
            showModal.value = !showModal.value;
        }
       
        function sorting(event) {
            console.log(event.target.value);
            // var sorter = [index, title, author, album, date, readtime]
            var m = this.$store.state.usersinfo.value;
            switch (event.target.value) {
                case "Date": m.sort(function (a, b) {
                    return a.date.localeCompare(b.date)
                });
                    break;
                case "Title": m.sort(function (a, b) {
                    return a.title.localeCompare(b.title)
                });
                    break;
                case "Custom order": m.sort(function (a, b) {
                    return a.index > b.index ? 1 : a.index < b.index ? -1 : 0
                });
                    break;
                case "Author": m.sort(function (a, b) {
                    return a.author.localeCompare(b.author)
                });
                    break;
                case "Album": m.sort(function (a, b) {
                    return a.album.localeCompare(b.album)
                });
                    break;
                case "Readtime": m.sort(function (a, b) {
                    return a.readtime > b.readtime ? 1 : a.readtime == b.readtime ? 0 : -1;
                });
                    break;

                default:
                    break;
            }

            this.$store.commit('setUsersInfo', m);

            // usersinfo.value = m;
            // console.log(usersinfo)
        }
        return { showModal, toggle, sorting }
    },
    methods: {
        search() {
            find(document.getElementById('inp').value);
            // this.toggle()
        },
        downloadFile() {
            const url = "https://www.africau.edu/images/default/sample.pdf";
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', "testfile.pdf");
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);
        }

    },
}
</script>
  
<style scoped>
#x {
    scale: 1.8;
    /* background-color: orangered; */
}

.selector-dummy {
    display: flex;
    align-items: center;
}

.modal:hover {
    width: 20rem;
}

table{
    cursor: context-menu;
}
.rightpane-bottom-parent {
    margin-top: 2rem;
    background: linear-gradient(#12121250, #121212, #121212);
    /* background-color: #121212; */
    height: max-content;
    backdrop-filter: blur(30px);
    border-radius: 0 0 1rem 1rem;
    /* padding-right: 0.5rem; */
}

.rightpane-bottom-parent:hover {
    padding-right: 0rem
}

input:focus {
    outline: none;
}


.modal {
    right: 10.5rem;
    top: 1.8rem;
    /* background-color: #121212; */
    position: absolute;
    z-index: 1;
    height: 4rem;
    width: 2rem;
    border-radius: 0.5rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    transition: width 1s;
    overflow: hidden;


}

.search-input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    color: white;
    font-size: 1rem;
    padding-left: 0.2rem;
}

button {
    background-color: transparent;
    border: none;
}

.content-options {
    display: flex;
    justify-content: space-between;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    align-items: center;
}



.content-left {
    display: flex;
    gap: 2rem;
    align-items: center;
}

.content-right {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
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

table {
    flex: 1 1 auto;
    width: calc(100% - 4rem);
    text-align: left;
    margin-left: 2rem;

    margin-right: 2rem;
    border-collapse: collapse;
}


select {
    background-color: transparent;
    border: none;
    width: min-content;
    outline: none;
    font-size: 1rem;
    font-weight: 500;
    /* letter-spacing: 1px; */
    color: rgba(255, 255, 255, 0.8);
    border-radius: 0.2rem;
    text-align: right;
    /* transition: background-color 1s; */
    
}

select:hover {
    background-color: transparent;
}

option {
    font-size: 1rem;
    background-color: #121212;
    text-align: left;
}

select::-ms-expand {
    background-color: #121212;
    color: white;
}

.line {
    width: 100%;
    height: 1px;
    max-height: 1px;
    background-color: rgba(255, 255, 255, 0.105);
    padding-top: 5rem;
    padding-bottom: 5rem;
}

.songs-listitem {
    background-color: rgba(0, 0, 0, 0);
    

}

.songs-listitem:hover {
    background-color: rgba(255, 255, 255, 0.1);
}
</style>
  