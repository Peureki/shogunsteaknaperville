<template>
    <div class="info-container">
        <h4>Phone</h4>
        <a :href="`tel:+1${phone}`"><p class="cta-hover">{{ formattedPhone }}</p></a>
    </div>
</template>

<script setup>
let phone = ref('6304160871'),
    formattedPhone = formatPhoneNumber(phone.value);

</script>

<style scoped>
a {
    font-weight: normal;
}

</style>