<template>
    <div class="info-container">
        <h5>Phone</h5>
        <a :href="`tel:+1${phone}`"><p>{{ formattedPhone }}</p></a>
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