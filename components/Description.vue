<template>
    <div class="desc-container">
        <h2>{{ title }}</h2>

        <p>{{ description }}</p>

        <button class="cta">
            <NuxtLink :to="ctaTo">{{ ctaMessage }}</NuxtLink>
        </button>
    </div>
</template>

<script setup>

const props = defineProps({
    title: String,
    description: String, 
    ctaMessage: String,
    ctaTo: String, 
})

</script>