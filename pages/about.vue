<template>
    <section class="grid-container" id="header">
        <h1 id="header-title">About Us</h1>
        <img id="header-sakura-flower" :src="SakuraFlower1" alt="Sakura flower" title="Sakura flower">
        <Polaroid
            id="header-polaroid"
            :src="Chef1"
            alt="Hibachi chef cooking with high flames" 
            title="Hibachi chef cooking with high flames"
        />
    </section>

    <section class="grid-container" id="about">
        <Polaroid
            id="about-polaroid"
            :src="Chef1"
            alt="Hibachi chef cooking with high flames" 
            title="Hibachi chef cooking with high flames"
        />

        <Description
            id="about-desc"
            title="Something about us"
            :description="[
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
            ]"
        />
    </section>

    <section class="grid-container" id="about-2">
        <Polaroid
            id="about-2-polaroid"
            :src="Chef1"
            alt="Hibachi chef cooking with high flames" 
            title="Hibachi chef cooking with high flames"
        />

        <Description
            id="about-2-desc"
            title="Something about us"
            :description="[
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
            ]"
        />
    </section>
</template>

<script setup>
import SakuraFlower1 from "~/assets/svgs/sakura-flower-1.svg"

import Chef1 from "~/assets/imgs/chef-5.png"

</script>

<style scoped>
/*
 *
 * HEADER SECTION
 *
 */
#header{
    padding-top: var(--padding-outside-nav);
    grid-template-areas: 
        'title title title title title title title title polaroid polaroid polaroid polaroid'
        'sakura . . . . . . . polaroid polaroid polaroid polaroid'
    ;
}
#header-title{
    grid-area: title;
}
#header-polaroid{
    grid-area: polaroid;
    height: 30vw;
}
#header-sakura-flower{
    grid-area: sakura;
    width: var(--w-sakura-flower);
}
/*
 *
 * MOBILE HEADER SECTION
 *
 */
@media screen and (max-width: 768px){
    #header{
        grid-template-areas: 
            'title title title title title title'
            'polaroid polaroid polaroid polaroid . sakura'
        ;
    }
    #header-polaroid{
        height: var(--w-polaroid);
    }
}
/*
 *
 * ABOUT SECTION
 *
 */
#about{
    grid-template-areas: 
        'polaroid polaroid polaroid polaroid . . desc desc desc desc desc desc'
    ;
}
#about-polaroid{
    grid-area: polaroid; 
    height: var(--w-polaroid);
}
#about-desc{
    grid-area: desc;
}
/*
 *
 * MOBILE ABOUT SECTION
 *
 */
@media screen and (max-width: 768px){
    #about{
        grid-template-areas: 
            'desc desc desc desc desc desc'
            'polaroid polaroid polaroid polaroid polaroid polaroid'
        ;
    }
}
#about-2{
    grid-template-areas: 
        'polaroid polaroid polaroid polaroid . . desc desc desc desc desc desc'
    ;
}
#about-2-polaroid{
    grid-area: polaroid; 
    height: var(--w-polaroid);
}
#about-2-desc{
    grid-area: desc;
}
/*
 *
 * MOBILE ABOUT SECTION
 *
 */
@media screen and (max-width: 768px){
    #about-2{
        grid-template-areas: 
            'desc desc desc desc desc desc'
            'polaroid polaroid polaroid polaroid polaroid polaroid'
        ;
    }
}

</style>