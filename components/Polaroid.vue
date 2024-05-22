<template>
    <div class="polaroid-container" :style="{height: `${polaroidHeight}vw`, transform: randomRotate}">
        <img 
            v-if="isAboveTheFold"
            :src="src" :alt="alt" :title="title" loading="eager" rel="preload" as="image"
        />
        <img 
            v-else
            :src="src" :alt="alt" :title="title" loading="lazy"
        />
    </div>
</template>

<script setup>

const props = defineProps({
    src: String,
    alt: String,
    title: String, 
    height: String,
    lazy: String,
    // If img is above fold => preload, else lazy load
    // Insert this only in <Polaroid/>s that are above the fold
    isAboveTheFold: Boolean, 
})

const randomRotate = ref(null),
    randomNum = Math.random() * 4 - 2;

onMounted(() => {
    randomRotate.value = `rotate(${randomNum}deg)`;
})

// Randomly rotate a polaroid from range of -2 to 2 deg 


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
    transition: var(--transition-transform);
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