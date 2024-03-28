<template>
    <!--
        *
        * 
        * HEADER CONTAINER
        *
        *
    -->
    <header class="grid-container">
        <Polaroid 
            id="polaroid-1"
            :src="Chef1"
            alt="Hibachi chef cooking with high flames" 
            title="Hibachi chef cooking with high flames"
        />

        <Polaroid
            id="polaroid-2"
            :src="Chef2"
            alt="Hibachi chef cooking with high flames" 
            title="Hibachi chef cooking with high flames"
        />

        <Logo id="logo"/>

        <img id="sakura" src="~/assets/svgs/sakura-3.svg" alt="Sakura tree branch" title="Sakura">
    </header>

    <!--
        *
        * 
        * ABOUT SECTION
        *
        *
    -->

    <section class="grid-container" id="grid-about">
        <div class="desc-container" id="desc-about">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>

        <button class="cta" id="cta-about">
            <NuxtLink to="/about">Learn more about our family</NuxtLink>
        </button>

        <Polaroid
            id="polaroid-about"
            :src="PolaroidAbout"
        />
    </section>

    <!--
        *
        * 
        * MENU SECTION
        *
        *
    -->

    <section class="grid-container" id="grid-menu">
        <img id="sakura-menu" src="~/assets/svgs/sakura-1.svg" alt="Sakura tree brance" title="Sakura">
        
        <Polaroid
            id="polaroid-menu-onion"
            :src="Onion1"
            alt="Onion volcano on fire on a grill"
            title="Onion volcano"
        />

        <Polaroid
            id="polaroid-menu-chef-3"
            :src="Chef3"
            alt="Chef making fire on a grill while throwing oil"
            title="Hibachi chef"
        />

        <Polaroid
            id="polaroid-menu-chef-4"
            :src="Chef4"
            alt="Chef cooking food on the grill"
            title="Hibachi"
        />

        <img id="polaroid-menu-koi" :src="Koi1" alt="Koi" title="Koi">

        <h2 id="desc-title">Teppanyaki & Sushi</h2>

        <div class="desc-container" id="desc-menu">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>

        <button class="cta" id="cta-menu">
            <NuxtLink to="/menu">View our menu</NuxtLink>
        </button>
    </section>

    <section class="grid-container" id="grid-testimonials">


    </section>
</template>

<script setup>
import Chef1 from '~/assets/imgs/chef-1.jpg'
import Chef2 from '~/assets/imgs/chef-2.png'
import PolaroidAbout from '~/assets/imgs/wall.jpg'

import Onion1 from '~/assets/imgs/onion-1.png'
import Chef3 from '~/assets/imgs/chef-3.jpg'
import Chef4 from '~/assets/imgs/chef-4.jpg'
import Koi1 from '~/assets/svgs/koi-1.svg'

// const screenWidth = ref(window.innerWidth); 

// watchEffect(() => {
//     const updateScreenWidth = () => {
//         screenWidth.value = window.innerWidth; 
//     }

//     window.addEventListener('resize', updateScreenWidth); 

//     return () => {
//         window.removeEventListener('resize', updateScreenWidth);
//     }
// })

</script>

<style scoped>
/*
 *
 * HEADER SECTION
 *
 */
header.grid-container{
    position: relative;
    height: 100dvh; 
    padding-top: calc(var(--font-size-nav) + var(--font-size-p) + 75px);
    grid-template-rows: 2fr 1.5fr;
    grid-template-areas: 
        'one one one one two two two two . . . .'
        'logo logo logo logo logo logo logo logo sakura sakura sakura sakura'
    ;
}
#grid-about{
    grid-template-areas: 
        'dAbout dAbout dAbout dAbout dAbout dAbout . . pAbout pAbout pAbout pAbout'
        'cAbout cAbout cAbout cAbout cAbout cAbout . . pAbout pAbout pAbout pAbout'
    ;
}
@media screen and (min-width: 1600px){
    #grid-about{
        grid-template-areas: 
            'dAbout dAbout dAbout dAbout dAbout . pAbout pAbout pAbout pAbout pAbout pAbout'
            'cAbout cAbout cAbout cAbout cAbout . pAbout pAbout pAbout pAbout pAbout pAbout'
        ;
    }
}
#logo{
    padding-bottom: 50px;
}
#polaroid-1{
    grid-area: one;
}
#polaroid-2{
    grid-area: two;
}
#sakura{
    position: absolute;
    grid-area: sakura;
    width: clamp(10rem, 40vw, 80rem);
    top: -50%;
    right: calc(var(--padding-page) * -1);
    z-index: -1;
}
/*
 *
 * ABOUT SECTION
 *
 */
#desc-about{
    grid-area: dAbout;
}
#cta-about{
    grid-area: cAbout;
}
#polaroid-about{
    grid-area: pAbout;
}
/*
 *
 * MENU SECTION
 *
 */
#grid-menu{
    position: relative;
    grid-template-areas: 
        'sakuraMenu sakuraMenu sakuraMenu sakuraMenu . . pOnion pOnion pChef3 pChef3 pChef3 pChef3'
        'sakuraMenu sakuraMenu sakuraMenu sakuraMenu . . pOnion pOnion pChef3 pChef3 pChef3 pChef3'
        'sakuraMenu sakuraMenu sakuraMenu sakuraMenu . . pKoi1 pKoi1 pChef3 pChef3 pChef3 pChef3'
        '. . . . . . dTitle dTitle dTitle dTitle dTitle dTitle'
        'pChef4 pChef4 pChef4 pChef4 . . dMenu dMenu dMenu dMenu dMenu dMenu'
        'pChef4 pChef4 pChef4 pChef4 . . cMenu cMenu cMenu cMenu cMenu cMenu'
    ;
}
#sakura-menu{
    position: absolute;
    grid-area: sakuraMenu; 
    width: clamp(10rem, 40vw, 80rem);
    left: calc(var(--padding-page) * -1);
    z-index: -1;
}
#polaroid-menu-onion{
    grid-area: pOnion;
}
#polaroid-menu-chef-3{
    grid-area: pChef3;
    width: 100%;
    height: var(--polaroid-w);
}
#polaroid-menu-chef-4{
    grid-area: pChef4;
}
#polaroid-menu-koi{
    grid-area: pKoi1;
    width: var(--w-koi);
}
#desc-title{
    grid-area: dTitle
}
#desc-menu{
    grid-area: dMenu;
}
#cta-menu{
    grid-area: cMenu;
}

/*
 *
 * TESTIMONIALS SECTION
 *
 */
#grid-testimonials{
    grid-template-areas: 
        'pChef5 pChef5 sakuraFlower1 . . . . . . . . .'
    ;
}
</style>