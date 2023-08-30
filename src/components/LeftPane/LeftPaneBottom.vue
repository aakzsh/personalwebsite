<template>
    <div class="grandparent">
        <div class="parent">
            
            <img src="../../assets/icons/playlist.svg" alt="library" title="library" srcset="">
            <a href="https://open.spotify.com/playlist/22fzmYDT88DIbBFW82izqQ?si=fd25aff5583e481a" target="_blank"><LeftPaneCards imgurl="https://i.scdn.co/image/ab67706c0000da8470d229cb865e8d81cdce0889" alt="songs i like"
                title="songs i like" radius="0.3" /></a>
            <a href="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1faf5.png" target="_blank"><LeftPaneCards imgurl="https://misc.scdn.co/your-episodes/SE-64.png" alt="other stuff i like"
                title="other stuff i like" radius="0.3" /></a>
            <a :href="github" target="_blank">
                <LeftPaneCards imgurl="https://i.ibb.co/nbCZDQp/github.jpg" alt="socials (GitHub)" title="socials (GitHub)"
                    radius="0.3" />
            </a>
            <a :href="email" target="_blank">
                <LeftPaneCards imgurl="https://i.ibb.co/476dVmK/gmail.png" alt="socials (Email)" title="socials (Email)"
                    radius="2" />
            </a>
            <a :href="linkedin" target="_blank">
                <LeftPaneCards imgurl="https://i.ibb.co/j31SzYL/linkedin.png" alt="socials (LinkedIn)"
                    title="socials (LinkedIn)" radius="0.3" />
            </a>
            <a>
                <LeftPaneCards imgurl="https://i.ibb.co/hHJYSwd/discord.jpg" alt="Discord username: aakzsh"
                    title="Discord username: aakzsh" radius="2" />
            </a>
            <a :href="behance" target="_blank">
                <LeftPaneCards imgurl="https://i.ibb.co/dJLWqZY/behance.jpg" alt="socials (Behance)"
                    title="socials (Behance)" radius="0.3" />
            </a>
        </div>
    </div>
</template>

<script>
import LeftPaneCards from './LeftPaneCards.vue';
export default {
    name: "LeftPaneBottom",
    components: {
        LeftPaneCards
    },
    data() {
        return {
            github: "https://github.com/aakzsh",
            email: "mailto:aakzshh@gmail.com",
            behance: "https://behance.net/aakzsh",
            linkedin: "https://linkedin.com/in/aakzsh"
        }
    }
}
</script>

<style scoped>
.grandparent {
    height: 100%;
    width: 100%;
    margin-left: 0.5rem;
    margin-top: 0.5rem
}

.parent {

    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    border-radius: 0.5rem;
    height: 100%;
    align-items: center;
    gap: 0.9rem;
    width: 90%;
    max-height: calc(100% - 1rem);
    overflow: hidden;
    background-color: #121212;
}

img {
    height: 1.5rem;
}</style>