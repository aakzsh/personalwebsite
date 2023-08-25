<template>
    <div class="grandparent">
        <div class="parent">
        <img src="../../assets/icons/home.svg" alt="" srcset="" >
        <img src="../../assets/icons/search.svg" alt="" srcset="" onclick="find('bottom')">
    </div>
    </div>
</template>

<script>
    export default {
        name: "LeftPaneTop",
    }
</script>

<style scoped>
.grandparent{
    height: max-content;
    width: 100%;
    margin-left: 0.5rem;
    margin-top: 0.5rem
}
    .parent{
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
    img{
        height: 1.5rem;
    }
</style>