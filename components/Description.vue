<template>
    <div class="desc-container">
        <h2 v-if="title">{{ title }}</h2>

        <p v-for="(paragraph, index) in description" :key="index">{{ paragraph }}</p>

        <!-- <button v-if="ctaMessage && ctaTo" class="cta">
            <NuxtLink v-if="ctaTo !== 'phone'" :to="ctaTo">{{ ctaMessage }}</NuxtLink>
            <a v-else :href="`tel:+1${phone}`">{{ ctaMessage }}</a>
        </button> -->

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

let phone = ref('6304160871'),
    formattedPhone = formatPhoneNumber(phone.value);

const checkCtaTo = computed(() => {
    return props.ctaTo !== 'phone' ? props.ctaTo : `tel:1${phone}`; 
})

</script>