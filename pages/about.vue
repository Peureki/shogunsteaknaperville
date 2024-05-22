<template>
    <section class="grid-container" id="header">
        <h1 id="header-title">About Us</h1>
        <img id="header-sakura-flower" :src="SakuraFlower1" alt="Sakura flower" title="Sakura flower">
        <Polaroid
            id="header-polaroid"
            :src="Wall"
            alt="Restaurant wall decorated with polaroid pictures of happy customers" 
            title="Restaurant wall decorated with polaroid pictures of happy customers"
            :is-above-the-fold="true"
        />
    </section>

    <section class="grid-container" id="about">
        <Polaroid
            id="about-polaroid"
            :src="Chef"
            alt="Hibachi chef cooking with high flames" 
            title="Hibachi chef cooking with high flames"
            :is-above-the-fold="true"
        />

        <Description
            id="about-desc"
            title="Shogun Japanese Steakhouse"
            :description="[
                'Welcome to Shogun Japanese Steakhouse, where tradition meets innovation since 1983. Nestled in the heart of Naperville along Route 59, our hibachi haven has been a beloved culinary destination for over four decades. At Shogun, we pride ourselves on offering a unique twist on Japanese Hibachi cuisine. Our skilled chefs expertly blend traditional Japanese cooking techniques with modern flair, creating an unforgettable dining experience that delights both the palate and the senses.',
                'One of the secrets to our signature flavors lies in our homemade sauces, crafted right here in our kitchen. Each sauce is meticulously prepared using the finest ingredients, ensuring a perfect balance of taste and texture that enhances every dish.'
            ]"
        />
    </section>

    <section class="grid-container" id="about-2">
        <Polaroid
            id="about-2-polaroid"
            :src="Bar"
            alt="Bar area of the restaurant with a japanese samarui and sakura flowers" 
            title="Bar area of the restaurant with a japanese samarui and sakura flowers"
        />

        <Description
            id="about-2-desc"
            title="Family Tradition"
            :description="[
                'More than just a restaurant, Shogun Japanese Steakhouse is a testament to family tradition. From our humble beginnings in 1983, we have remained a tight-knit family business, passing down our passion for food and hospitality from one generation to the next. When you dine with us, you\'re not just a customer – you\'re part of our extended family. ',
                'Whether you\'re celebrating a special occasion or simply craving an exquisite meal, we invite you to experience the warmth, charm, and culinary mastery that define Shogun Japanese Steakhouse. Come join us at our table and discover the magic of our take on Japanese cuisine, crafted with love and tradition since day one.'
            ]"
        />
    </section>
</template>

<script setup>
import SakuraFlower1 from "~/assets/svgs/sakura-flower-1.svg"

import Wall from "~/assets/imgs/wall-2.webp"
import Bar from "~/assets/imgs/restaurant-2.webp"
import Chef from "~/assets/imgs/chef-1.webp"

import Logo1 from '~/assets/imgs/logo-1.webp'

const seoTitle = 'About - Shogun Japanese Steakhouse Naperville',
    seoDescription = 'Savor the culinary excellence of Shogun Japanese Steakhouse in Naperville, IL, blending tradition with hibachi and signature flavors for a memorable dining experience.';

useHead({
    meta: [
        {
            name: seoTitle,
            content: seoDescription,
        }
    ],
})

useSeoMeta({
    title: seoTitle,
    description: seoDescription,
    ogTitle: seoTitle,
    ogDescription: seoDescription,
    ogImage: Logo1,
    ogUrl: 'https://shogunsteaknaperville.com/menu',
    twitterTitle: seoTitle,
    twitterDescription: seoDescription,
    twitterImage: Logo1,
    twitterCard: seoDescription
})

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
    height: 20vw;
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