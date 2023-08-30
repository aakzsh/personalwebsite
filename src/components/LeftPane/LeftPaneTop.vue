<template>
    <div class="grandparent">
        <div class="parent">
            <img src="../../assets/icons/home.svg" title="home" alt="home" srcset="" onclick="window.location.reload()">
            <img src="../../assets/icons/search.svg" title="search" alt="search" srcset="" @click="toggle">
        </div>
    </div>
    <div class="modal" v-if="showModal" @click:outside="toggle">
        <input type="text" class="search-input" id="inp" v-on:keyup.enter="search">
        <button @click="search"><img src="../../assets/icons/search.svg" alt=""></button>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {

    name: "LeftPaneTop",
    setup() {
        const showModal = ref(false);
        function toggle() {
            showModal.value = !showModal.value;
        }
        return { showModal, toggle }
    },
    methods: {
        search() {
            find(document.getElementById('inp').value);
            this.toggle();
        }
    }


}
</script>

<style scoped>
.grandparent {
    height: max-content;
    width: 100%;
    margin-left: 0.5rem;
    margin-top: 0.5rem
}



.search-input {
    background-color: #121212;
    border: none;
    border-bottom: 1px solid white;
    color: white;
    font-size: 1.2rem;
}

button {
    background-color: transparent;
    border: none;
}


.parent {
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 0.5rem;
    height: max-content;
    align-items: center;
    gap: 1.5rem;
    width: 90%;
    background-color: #121212
}

img {
    height: 1.5rem;
}

input:focus {
    outline: none;
}

.modal {
    left: 5rem;
    top: 3rem;
    background-color: #121212;
    position: absolute;
    z-index: 1;
    height: 4rem;
    width: 20rem;
    border-radius: 0.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>