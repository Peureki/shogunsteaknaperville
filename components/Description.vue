<template>
    <div class="desc-container">
        <h3 v-if="title">{{ title }}</h3>

        <p v-for="(paragraph, index) in description" :key="index">{{ paragraph }}</p>

        <NuxtLink v-if="ctaMessage && ctaTo" class="cta" :to="checkCtaTo">
            {{ ctaMessage }}
        </NuxtLink>
    </div>
</template>

<script setup>

const props = defineProps({
    title: String,
    description: Array, 
    ctaMessage: String,
    ctaTo: String, 
})

let phone = ref('6304160871');

const checkCtaTo = computed(() => {
    return props.ctaTo !== 'phone' ? props.ctaTo : `tel:+1${phone.value}`; 
})

</script>