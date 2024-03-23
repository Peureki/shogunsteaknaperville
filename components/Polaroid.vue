<template>
    <div class="polaroid-container">
        <img :src="src" :alt="alt" :title="title">
    </div>
</template>

<script setup>

const props = defineProps({
    src: String,
    alt: String,
    title: String, 
})

</script>

<style scoped>
.polaroid-container{
    position: relative;
    background-color: var(--clr-text);
    width: 100%;
    height: 100%;
}
.polaroid-container img{
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
    width: 92%;
    height: 85%;
    object-fit: cover;
}

</style>