<template>
    <div class="testimonial-container">
        <p v-for="(paragraph, index) in message" :key="index">{{ paragraph }}</p>

    </div>
</template>

<script setup>

const props = defineProps({
    message: Array,
})

</script>

<style scoped>
.testimonial-container{
    background-color: var(--clr-polaroid-bkg);
    padding: var(--padding-testimonials);
    height: fit-content;
}
p {
    color: var(--clr-testimonial-text);
    font-size: var(--font-size-testimonials);
    padding-bottom: var(--padding-testimonial-line-break);
}
.testimonial-container p:last-child{
    padding-bottom: 0;
}

</style>