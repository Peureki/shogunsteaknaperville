<template>
    <div class="grid-container">
        <p id="message">Ope, looks like you're lost. This page does not exist.</p>
        <ul id="nav">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/menu">Menu</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>

        <img id="sakura" :src="Sakura" alt="Sakura" title="Sakura">
    </div>
</template>

<script setup>
import Sakura from '~/assets/svgs/sakura-3.svg'


defineProps(['error']);

</script>

<style scoped>
.grid-container{
    padding: var(--padding-page);
    height: 100dvh;
    display: grid;
    grid-template-areas: 
        '. . . . . . . . . . . sakura'
        'message message message message message message message message . . . .'
        'nav nav nav nav nav nav nav nav . . . .'
        
        
    ;
}
#sakura{
    position: absolute;
    width: var(--w-sakura-branch);
    grid-area: sakura;
    top: -50%;
    right: calc(var(--padding-page) * -1);
    z-index: -1;
}
#message{
    font-size: var(--font-size-h3);
    grid-area: message;
}
#nav{
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap-grid-column);
    grid-area: nav;
}
#nav li a{
    font-size: var(--font-size-h3);
}

</style>