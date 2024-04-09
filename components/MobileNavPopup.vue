<template>
    <div class="mobile-nav-popup-container">
        <div class="grid-container" id="site-map">
            <ul id="map">
                <li><NuxtLink to="/" @click="$emit('closeNav')">Home</NuxtLink></li>
                <li><NuxtLink to="/menu" @click="$emit('closeNav')">Menu</NuxtLink></li>
                <li><NuxtLink to="/about" @click="$emit('closeNav')">About</NuxtLink></li>
                <li><NuxtLink to="/contact" @click="$emit('closeNav')">Contact</NuxtLink></li>
            </ul>

            <img id="site-map-sakura" :src="SakuraBranch" alt="Sakura branch" title="Sakura branch">

        </div>

        <div class="grid-container" id="info">
            <InfoHours id="hours"/>
            <InfoLocation id="location"/>
            <InfoPhone id="phone"/>

            <div class="info-container" id="socials">
                <h5>Socials</h5>
                <NuxtLink to="https://www.facebook.com/ShogunSteakNaperville/" target="_blank">
                <svg viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.66671 10.2498H8.75004L9.58337 6.9165H6.66671V5.24984C6.66671 4.3915 6.66671 3.58317 8.33337 3.58317H9.58337V0.783171C9.31171 0.747337 8.28587 0.666504 7.20254 0.666504C4.94004 0.666504 3.33337 2.04734 3.33337 4.58317V6.9165H0.833374V10.2498H3.33337V17.3332H6.66671V10.2498Z" fill="#B9B8B8"/>
                </svg>
            </NuxtLink>
            </div>

            <img id="info-sakura" :src="SakuraFlower" alt="Sakura flower" title="Sakura flower">
        </div>

        
    </div>

</template>

<script setup>
import SakuraBranch from '~/assets/svgs/sakura-2.svg'
import SakuraFlower from '~/assets/svgs/sakura-flower-2.svg'

</script>

<style scoped>
.mobile-nav-popup-container{
    position: fixed;
    top: 0;
    background-color: var(--clr-bkg);
    width: 100dvw;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    z-index: 10001;
}
#site-map{
    padding-top: calc(var(--padding-outside-nav) - 100px);
    grid-template-areas: 
        'map map map map map sakura'
    ;
}
#map{
    grid-area: map;
}
#site-map-sakura{
    grid-area: sakura;
    width: var(--w-sakura-branch);
    position: absolute;
    transform: rotate(83deg);
    top: 20%;
    right: calc((var(--padding-page) + 10px) * -1);
}


li a{
    font-size: var(--font-size-h3);
}
#info{
    grid-template-areas: 
        'hours hours hours hours hours hours'
        'location location location phone phone phone'
        'social social social sakura . .'
    ;
}
#hours{
    grid-area: hours;
}
#location{
    grid-area: location;
}
#phone{
    grid-area: phone;
}
#socials{
    grid-area: social;
}
#socials svg{
    width: var(--svg-size-facebook);
}
#info-sakura{
    grid-area: sakura;
    width: var(--w-sakura-flower);
}
</style>