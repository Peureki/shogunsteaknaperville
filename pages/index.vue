<template>
    <!--
        *
        * 
        * HEADER CONTAINER
        *
        *
    -->
    <section class="grid-container">
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
    </section>

    <!--
        *
        * 
        * ABOUT SECTION
        *
        *
    -->

    <section class="grid-container" id="grid-about">
        <Description
            id="desc-about"
            :description="[
                'Welcome to Shogun Japanese Steakhouse, a beloved culinary gem nestled in the heart of Naperville, IL. Since opening our doors in 1983, we have proudly served the community with our take on Japanese style hibachi and our signature flavor that has captured many taste buds.',
                'For over four decades, Shogun Japanese Steakhouse has been a cornerstone of Naperville\'s dining scene, earning a reputation for excellence and dedication to our craft. As pioneers in bringing the art of teppanyaki to the area, we have delighted countless patrons with our delectable dishes.'
            ]"
            cta-message="Learn more about our family"
            cta-to="/about"

        />

        <Polaroid
            id="polaroid-about"
            :src="Wall1"
            alt="Display of polaroid pictures on the restaurant walls of past happy customers"
            title="Polaroid pictures on the restaurant walls of past happy customers"
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
            id="polaroid-menu-chef-1"
            :src="Chef3"
            alt="Chef making fire on a grill while throwing oil"
            title="Hibachi chef"
        />

        <Polaroid
            id="polaroid-menu-chef-2"
            :src="Chef4"
            alt="Chef cooking food on the grill"
            title="Hibachi"
        />

        <img id="polaroid-menu-koi" :src="Koi1" alt="Koi" title="Koi">

        <Description
            id="desc-menu"
            title="Teppanyaki & Sushi"
            :description="[
                'At Shogun, we take great pride in the quality of our hibachi offerings. From our signature sauces, perfectly grilled meats and seafood, fried rice, to an array of fresh vegetables, each ingredient is carefully selected and expertly prepared to ensure a truly memorable dining experience.',
            ]"
            cta-message="View our menu"
            cta-to="/menu"
        />
    </section>
    <!--
        *
        * 
        * TESTIMONIALS SECTION
        *
        *
    -->
    <section class="grid-container" id="grid-test">
        <!-- 
            * ADJUSTED POLAROID HEIGHTS: 
            # 5, 6, 7, 9
        -->
        <Polaroid
            id="polaroid-test-chef-1"
            :src="Chef5"
            alt="Chef casting fire on the grill"
            title="Chef casting fire on the grill"
        />

        <img id="test-sakura-flower-1" src="~/assets/svgs/sakura-flower-1.svg" alt="Sakura flower" title="Sakura flower">

        <Polaroid
            id="polaroid-test-chef-2"
            :src="Onion2"
            alt="Onion volcano"
            title="Onion volcano"
        />
        <Polaroid
            id="polaroid-test-chef-3"
            :src="Restaurant1"
            alt="View of the restaurant inside"
            title="View of the restaurant inside"
            height="30"
        />
        <Polaroid
            id="polaroid-test-chef-4"
            :src="Wall2"
            alt="Wall of polaroid pictures of happy customers"
            title="Wall of polaroid pictures of happy customers"
        />

        <Description
            id="test-desc"
            title="From our family to yours"
            :description="[
                'Whether you\'re celebrating a special occasion, enjoying a night out with friends and family, or simply craving the bold flavors of Japanese hibachi, Shogun Japanese Steakhouse welcomes you with open arms. Join us as we continue our tradition of excellence and culinary innovation, serving our patrons with passion and pride.'
            ]"
            cta-message="Call to reserve"
            cta-to="phone"
        />

        <img id="test-koi" :src="Koi2" alt="Koi" title="Koi">

        <Testimonial
            id="test-message-1"
            :message="[
                'BEST. Hibachi. EVER.',
                'Delicious, Family owned small business that’s been a staple of Naperville since 1981!!',
                'Beyond having amazing food in large portions at affordable prices; it’s laid back, comforting atmosphere tells endless stories over four decades of memories and celebrations lined as wallpaper made of photos.. Various snapshots of happiness and joy brought together by food, family, friendships, and fun!! 🍱🍜🍣💕',
                'Katie M'
            ]"
        />

        <Polaroid
            id="polaroid-test-chef-5"
            :src="Food1"
            alt="Food sizzling on the grill"
            title="Food sizzling on the grill"
            height="15"
        />

        <Testimonial
            id="test-message-2"
            :message="[
                'I love this place!  There is no other hibachi place where the food is better.  The fried rice is the absolute best that I have tasted to date.  The chefs are fun and interact with the guests throughout the cooking show.',
                'I recommend this place to anypolaroid1 that likes hibachi.  It\'s about $40 a plate if you order the filet with tip.  The portion of food is generous.',
                'Robert C'
            ]"
        />

        <img id="test-sakura-flower-2" src="~/assets/svgs/sakura-flower-2.svg" alt="Sakura flower" title="Sakura flower">

        <Polaroid
            id="polaroid-test-chef-6"
            :src="Chef1"
            alt="Chef casting fire on the grill"
            title="Chef casting fire on the grill"
            height="15"
        />

        <Testimonial
            id="test-message-3"
            :message="[
                'We\'ve been a customer for almost 25 years. The food and the experience is as good now as it was in 1997. Thousands of Polaroid-like photos of satisfied customers line the walls as a testament to their longevity.',

                'We had Mai Tais as starter drinks and they were of good size and strength. Wr followed up with the mandatory 20oz Sapporo beers for the meal.',

                'Service was quick, but not too quick as you want to enjoy the experience. The hibachi chef was skillful and very friendly. Food (we were a group of 6) covered shrimp, scallops, steak and spicy chicken and all were great. Portion size was excellent ensuring a lot of leftovers. Sauces included ginger, horseradish and the absolutely essential yum yum sauce.',

                'Well worth a visit.',

                'Michael S'
            ]"
        />

        <Polaroid
            id="polaroid-test-chef-7"
            :src="Chef2"
            alt="Chef casting fire on the grill"
            title="Chef casting fire on the grill"
            height="15"
        />

        
    </section>   
    
    <!--
        *
        * 
        * CONTACT US SECTION
        *
        *
    -->
    <section class="grid-container" id="contact-container">
        <Description 
            id="contact-desc"
            title="Connect with us"
            :description="['We\'d love to hear from you! Whether you have a question or feedback, please fill out the form below. Our team at Shogun Japanese Steakhouse is dedicated to providing exceptional service and ensuring your dining experience is memorable. Thank you for checking out our restaurant!']"
        />
        <ContactForm id="contact-form"/>
        <img id="contact-sakura" src="~/assets/svgs/sakura-2.svg" alt="Sakura tree branch" title="Sakura tree branch"> 
    </section>
</template>

<script setup>
import Chef1 from '~/assets/imgs/chef-1.webp'
import Chef2 from '~/assets/imgs/chef-2.webp'

import Wall1 from '~/assets/imgs/wall-1.webp'
import Wall2 from '~/assets/imgs/wall-2.webp'

import Onion1 from '~/assets/imgs/onion-1.webp'
import Onion2 from '~/assets/imgs/onion-2.webp'

import Restaurant1 from '~/assets/imgs/restaurant-1.webp'
import Restaurant2 from '~/assets/imgs/restaurant-2.webp'

import Front1 from '~/assets/imgs/front-1.webp'

import Food1 from '~/assets/imgs/food-1.webp'

import Chef3 from '~/assets/imgs/chef-3.webp'
import Chef4 from '~/assets/imgs/chef-4.webp'
import Koi1 from '~/assets/svgs/koi-1.svg'

import Chef5 from '~/assets/imgs/chef-5.webp'
import Koi2 from '~/assets/svgs/koi-2.svg'

import Logo1 from '~/assets/imgs/logo-1.webp'
import Logo from '~/components/Logo.vue'

const seoTitle = 'Shogun Japanese Steakhouse Naperville',
    seoDescription = 'Discover Shogun Japanese Steakhouse in Naperville, IL, where culinary excellence meets Japanese hibachi tradition. With over four decades of delighting diners, Shogun invites you to savor signature flavors, expertly grilled meats, and a memorable dining experience steeped in passion and pride.';

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
    ogUrl: 'https://shogunsteaknaperville.com/',
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
header.grid-container{
    position: relative;
    height: 100dvh; 
    padding-top: var(--padding-outside-nav);
    grid-template-rows: 2fr 1.5fr;
    grid-template-areas: 
        'polaroid1 polaroid1 polaroid1 polaroid1 polaroid2 polaroid2 polaroid2 polaroid2 . . . .'
        'logo logo logo logo logo logo logo logo sakura sakura sakura sakura'
    ;
}
#logo{
    padding-bottom: 50px;
}
#polaroid-1{
    grid-area: polaroid1;
}
#polaroid-2{
    grid-area: polaroid2;
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
 * MOBILE HEADER SECTION
 *
 */
@media screen and (max-width: 768px){
    header.grid-container{
        grid-template-areas: 
            'logo logo logo logo logo logo'
            'polaroid1 polaroid1 polaroid1 sakura sakura sakura'
            'polaroid2 polaroid2 polaroid2 sakura sakura sakura'
        ;
        height: unset;
        grid-template-rows: unset;
    }
    #logo{
        padding-bottom: 0px;
    }
    #sakura{
        top: 20%;
    }
    #polaroid-1, #polaroid-2{
        height: 40vw;
    }
}

/*
 *
 * ABOUT SECTION
 *
 */
#grid-about{
    grid-template-areas: 
        'desc desc desc desc desc desc . . polaroid polaroid polaroid polaroid'
        'cta cta cta cta cta cta . . polaroid polaroid polaroid polaroid'
    ;
}
#desc-about{
    grid-area: desc;
}
#cta-about{
    grid-area: cta;
}
#polaroid-about{
    grid-area: polaroid;
}
/*
 *
 * MOBILE ABOUT SECTION
 *
 */
@media screen and (max-width: 768px){
    #grid-about{
        grid-template-areas: 
            'desc desc desc desc desc desc'
            'cta cta cta cta cta cta'
            'polaroid polaroid polaroid polaroid polaroid polaroid'
        
        ;
    }
    #polaroid-about{
        height: 60vw;
    }
}
/*
 *
 * MENU SECTION
 *
 */
#grid-menu{
    position: relative;
    grid-template-areas: 
        'sakura sakura sakura sakura . . pOnion pOnion pChef1 pChef1 pChef1 pChef1'
        'sakura sakura sakura sakura . . pOnion pOnion pChef1 pChef1 pChef1 pChef1'
        'sakura sakura sakura sakura . . koi koi pChef1 pChef1 pChef1 pChef1'
        'pChef2 pChef2 pChef2 pChef2 . . menu menu menu menu menu menu'
    ;
}
#sakura-menu{
    position: absolute;
    grid-area: sakura; 
    width: clamp(10rem, 40vw, 80rem);
    left: calc(var(--padding-page) * -1);
    z-index: -1;
}
#polaroid-menu-onion{
    grid-area: pOnion;
}
#polaroid-menu-chef-1{
    grid-area: pChef1;
    width: 100%;
    height: var(--w-polaroid);
}
#polaroid-menu-chef-2{
    grid-area: pChef2;
}
#polaroid-menu-koi{
    grid-area: koi;
    width: var(--w-koi);
}
#desc-menu{
    grid-area: menu;
}
/*
 *
 * MOBILE ABOUT SECTION
 *
 */
@media screen and (max-width: 768px){
    #grid-menu{
        grid-template-areas: 
            'sakura sakura sakura sakura pOnion pOnion'
            '. . . . . koi'
            'menu menu menu menu menu menu'
            'pChef1 pChef1 pChef1 pChef2 pChef2 pChef2'
        ;
    }
    #polaroid-menu-onion{
        height: 30vw;
    }
}

/*
 *
 * TESTIMONIALS SECTION
 *
 */
#grid-test{
    grid-template-areas: 
        'chef1 chef1 sakuraFlower1 . . . . . . . . .'
        '. . chef2 chef2 chef3 chef3 chef3 chef3 chef4 chef4 chef4 chef4'
        '. . . . chef3 chef3 chef3 chef3 chef4 chef4 chef4 chef4'
        'desc desc desc desc desc . koi koi message1 message1 message1 message1'
        'desc desc desc desc desc . chef5 chef5 message1 message1 message1 message1'
        '. . . . . . message2 message2 message2 message2 sakuraFlower2 sakuraFlower2'
        '. . . . . . message2 message2 message2 message2 chef6 chef6'
        '. . . . . . . . message3 message3 message3 message3'
        '. . . . . . chef7 chef7 message3 message3 message3 message3'
    ;
    overflow: unset;
}
#polaroid-test-chef-1{
    grid-area: chef1;
    height: 15vw;
}
#polaroid-test-chef-2{
    grid-area: chef2;
}
#polaroid-test-chef-3{
    grid-area: chef3;
}
#polaroid-test-chef-4{
    grid-area: chef4;
}
#polaroid-test-chef-5{
    grid-area: chef5;
}
#polaroid-test-chef-6{
    grid-area: chef6;
}
#polaroid-test-chef-7{
    grid-area: chef7;
}
#test-sakura-flower-1{
    grid-area: sakuraFlower1;
    width: var(--w-sakura-flower);
}
#test-sakura-flower-2{
    grid-area: sakuraFlower2;
    width: var(--w-sakura-flower);
}
#test-desc{
    grid-area: desc;
    position: sticky;
    top: var(--padding-outside-nav);
}
#test-koi{
    grid-area: koi;
    width: var(--w-koi);
}
#test-message-1{
    grid-area: message1;
}
#test-message-2{
    grid-area: message2;
}
#test-message-3{
    grid-area: message3;
}
/*
 *
 * MOBILE TESTIMONIAL SECTION
 *
 */
@media screen and (max-width: 768px){
    #grid-test{
        grid-template-areas: 
            'chef1 chef1 . . . .'
            'chef1 chef1 sakuraFlower1 . . .'
            'desc desc desc desc desc desc'
            'koi koi message1 message1 message1 message1'
            'koi koi message1 message1 message1 message1'
            'message2 message2 message2 message2 sakuraFlower2 sakuraFlower2'
            'chef2 chef2 message3 message3 message3 message3'
        ;
        overflow: hidden;
    }
    #test-desc{
        position: unset;
        top: unset;
    }
    #polaroid-test-chef-1, #polaroid-test-chef-2{
        height: 30vw;
    }
    #polaroid-test-chef-3, #polaroid-test-chef-4, #polaroid-test-chef-5, #polaroid-test-chef-6, #polaroid-test-chef-7{
        grid-area: unset;
        display: none;
    }
}
/*
 *
 * CONTACT CONTAINER 
 *
 */
#contact-container{
    grid-template-areas:
        'desc desc desc desc desc desc . . . . . .'
        'form form form form form form sakura sakura sakura sakura sakura sakura'
    ;
}
#contact-desc{
    grid-area: desc;
}
#contact-form{
    grid-area: form;
}
#contact-sakura{
    grid-area: sakura;
    width: var(--w-sakura-branch);
    position: absolute;
    right: calc(var(--padding-page) * -1);
    bottom: calc(var(--padding-section-grid) * -1);
    transform: rotate(90deg);
    z-index: -1;
}
/*
 *
 * MOBILE CONTACT CONTAINER 
 *
 */
@media screen and (max-width: 768px){
    #contact-container{
        grid-template-areas: 
            'desc desc desc desc desc desc'
            'form form form form form form'
            '. . . . . sakura'
        ;
    }
}
</style>