<template>
    <div class="mobile-nav-popup-container">
        <div class="grid-container" id="site-map">
            <ul id="map">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/menu">Menu</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/contact">Contact</NuxtLink></li>
            </ul>

            <img id="site-map-sakura" :src="SakuraBranch" alt="Sakura branch" title="Sakura branch">

        </div>

        <div class="grid-container" id="info">
            <div class="hours-container" id="hours-container">
                <h5>Hours</h5>
                <ul class="hours">
                    <li><p>Monday</p><p>Closed</p></li>
                    <li><p>Tuesday</p><p>Closed</p></li>
                    <li><p>Wednesday</p><p>1-3PM, 4-30:9PM</p></li>
                    <li><p>Thursday</p><p>1-3PM, 4:30-9PM</p></li>
                    <li><p>Friday</p><p>1-3PM, 4:30-9PM</p></li>
                    <li><p>Saturday</p><p>1-9PM</p></li>
                    <li><p>Sunday</p><p>4-8:30PM</p></li>
                </ul>
            </div>

            <div class="info-container" id="location">
                <h5>Location</h5>
                <address>596 Illinois Route 59, Naperville, IL 60540</address>
            </div>

            <div class="info-container" id="phone">
                <h5>Phone</h5>
                <p>630-416-0871</p>
            </div>

            <div class="info-container" id="socials">
                <h5>Socials</h5>
                <svg viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.66671 10.2498H8.75004L9.58337 6.9165H6.66671V5.24984C6.66671 4.3915 6.66671 3.58317 8.33337 3.58317H9.58337V0.783171C9.31171 0.747337 8.28587 0.666504 7.20254 0.666504C4.94004 0.666504 3.33337 2.04734 3.33337 4.58317V6.9165H0.833374V10.2498H3.33337V17.3332H6.66671V10.2498Z" fill="#B9B8B8"/>
                </svg>
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
    background-color: var(--clr-bkg);
    width: 100dvw;
    height: 100%;
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
        'info info info phone phone phone'
        'social social social sakura . .'
    ;
}
#hours-container{
    grid-area: hours;
}
#info{
    grid-area: info;
}
#phone{
    grid-area: phone;
}
#socials{
    grid-area: social;
}
ul{
    padding: 0;
    margin: 0;
}
.hours li{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 10px;
    grid-template-areas: 
        'day day time time time time'
    ;
}
.hours li > p:first-child{
    grid-area: day;
}
.hours li > p:last-child{
    grid-area: time;
}
#socials svg{
    width: var(--svg-size-facebook);
}
#info-sakura{
    grid-area: sakura;
    width: var(--w-sakura-flower);
}
</style>