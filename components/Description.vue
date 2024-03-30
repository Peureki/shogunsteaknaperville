<template>
    <div class="desc-container">
        <h2 v-if="title">{{ title }}</h2>

        <p v-for="(paragraph, index) in description" :key="index">{{ paragraph }}</p>

        <button v-if="ctaMessage && ctaTo" class="cta">
            <NuxtLink :to="ctaTo">{{ ctaMessage }}</NuxtLink>
        </button>
    </div>
</template>

<script setup>

const props = defineProps({
    title: String,
    description: Array, 
    ctaMessage: String,
    ctaTo: String, 
})

</script>