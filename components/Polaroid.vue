<template>
    <div class="polaroid-container" :style="{height: `${polaroidHeight}vw`}">
        <img :src="src" :alt="alt" :title="title">
    </div>
</template>

<script setup>

const props = defineProps({
    src: String,
    alt: String,
    title: String, 
    height: String,
})
// By default, polaroid w & h are 100% and follow the display:grid content size
// But for polaroids that need a fixed w & h to fill space because there's no content, then display that custom w & h number
const polaroidHeight = computed(() => {
        return props.height == undefined ? '100%' : props.height;
    })

</script>

<style scoped>
.polaroid-container{
    position: relative;
    background-color: var(--clr-polaroid-bkg);
    width: 100%;
    height: 100%;
}
.polaroid-container img{
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
    width: 95%;
    height: 90%;
    object-fit: cover;
}

</style>