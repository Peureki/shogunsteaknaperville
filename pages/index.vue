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
        <Description
            id="desc-about"
            :description="[
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
            ]"
            cta-message="Learn more about our family"
            cta-to="/about"

        />

        <Polaroid
            id="polaroid-about"
            :src="Polaroidesc"
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
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
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
            height="15"
        />

        <img id="test-sakura-flower-1" src="~/assets/svgs/sakura-flower-1.svg" alt="Sakura flower" title="Sakura flower">

        <Polaroid
            id="polaroid-test-chef-2"
            :src="Chef5"
            alt="Chef casting fire on the grill"
            title="Chef casting fire on the grill"
            height="15"
        />
        <Polaroid
            id="polaroid-test-chef-3"
            :src="Chef5"
            alt="Chef casting fire on the grill"
            title="Chef casting fire on the grill"
            height="30"
        />
        <Polaroid
            id="polaroid-test-chef-4"
            :src="Chef5"
            alt="Chef casting fire on the grill"
            title="Chef casting fire on the grill"
        />

        <Description
            id="test-desc"
            title="From our family to yours"
            :description="['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.']"
            cta-message="Call to reserve"
            cta-to="/contact"
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
            :src="Chef5"
            alt="Chef casting fire on the grill"
            title="Chef casting fire on the grill"
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
            :src="Chef5"
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
            :src="Chef5"
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
            :description="['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.']"
        />
        <ContactForm id="contact-form"/>
        <img id="contact-sakura" src="~/assets/svgs/sakura-2.svg" alt="Sakura tree branch" title="Sakura tree branch"> 
    </section>
</template>

<script setup>
import Chef1 from '~/assets/imgs/chef-1.jpg'
import Chef2 from '~/assets/imgs/chef-2.png'
import Polaroidesc from '~/assets/imgs/wall.jpg'

import Onion1 from '~/assets/imgs/onion-1.png'
import Chef3 from '~/assets/imgs/chef-3.jpg'
import Chef4 from '~/assets/imgs/chef-4.jpg'
import Koi1 from '~/assets/svgs/koi-1.svg'

import Chef5 from '~/assets/imgs/chef-5.png'
import Koi2 from '~/assets/svgs/koi-2.svg'

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
    height: var(--polaroid-w);
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
}
#polaroid-test-chef-1{
    grid-area: chef1;
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
    width: var(--svg-size-sakura-flower);
}
#test-sakura-flower-2{
    grid-area: sakuraFlower2;
    width: var(--svg-size-sakura-flower);
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
    }
    #test-desc{
        position: unset;
        top: unset;
    }
    #polaroid-test-chef-1, #polaroid-test-chef-2{
        height: 50vw;
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
    width: var(--svg-size-sakura-branch);
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