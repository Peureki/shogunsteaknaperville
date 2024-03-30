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
            cta-message="Learn more about your family"
            cta-to="/about"

        />

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
            id="polaroid-test-chef-5"
            :src="Chef5"
            alt="Chef casting fire on the grill"
            title="Chef casting fire on the grill"
            height="15"
        />

        <img id="test-sakura-flower-1" src="~/assets/svgs/sakura-flower-1.svg" alt="Sakura flower" title="Sakura flower">

        <Polaroid
            id="polaroid-test-chef-6"
            :src="Chef5"
            alt="Chef casting fire on the grill"
            title="Chef casting fire on the grill"
            height="15"
        />
        <Polaroid
            id="polaroid-test-chef-7"
            :src="Chef5"
            alt="Chef casting fire on the grill"
            title="Chef casting fire on the grill"
            height="30"
        />
        <Polaroid
            id="polaroid-test-chef-8"
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
            id="polaroid-test-chef-9"
            :src="Chef5"
            alt="Chef casting fire on the grill"
            title="Chef casting fire on the grill"
            height="15"
        />

        <Testimonial
            id="test-message-2"
            :message="[
                'I love this place!  There is no other hibachi place where the food is better.  The fried rice is the absolute best that I have tasted to date.  The chefs are fun and interact with the guests throughout the cooking show.',
                'I recommend this place to anyone that likes hibachi.  It\'s about $40 a plate if you order the filet with tip.  The portion of food is generous.',
                'Robert C'
            ]"
        />

        <img id="test-sakura-flower-2" src="~/assets/svgs/sakura-flower-2.svg" alt="Sakura flower" title="Sakura flower">

        <Polaroid
            id="polaroid-test-chef-10"
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
            id="polaroid-test-chef-11"
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
        />
        <ContactForm id="contact-form"/>
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
        'pChef4 pChef4 pChef4 pChef4 . . dMenu dMenu dMenu dMenu dMenu dMenu'
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
#desc-menu{
    grid-area: dMenu;
}

/*
 *
 * TESTIMONIALS SECTION
 *
 */
#grid-test{
    grid-template-areas: 
        'pChef5 pChef5 sakuraFlower1 . . . . . . . . .'
        '. . pChef6 pChef6 pChef7 pChef7 pChef7 pChef7 pChef8 pChef8 pChef8 pChef8'
        '. . . . pChef7 pChef7 pChef7 pChef7 pChef8 pChef8 pChef8 pChef8'
        'testDesc testDesc testDesc testDesc testDesc . testKoi testKoi testMessage1 testMessage1 testMessage1 testMessage1'
        'testDesc testDesc testDesc testDesc testDesc . pChef9 pChef9 testMessage1 testMessage1 testMessage1 testMessage1'
        '. . . . . . testMessage2 testMessage2 testMessage2 testMessage2 sakuraFlower2 sakuraFlower2'
        '. . . . . . testMessage2 testMessage2 testMessage2 testMessage2 pChef10 pChef10'
        '. . . . . . . . testMessage3 testMessage3 testMessage3 testMessage3'
        '. . . . . . pChef11 pChef11 testMessage3 testMessage3 testMessage3 testMessage3'
    ;
}
#polaroid-test-chef-5{
    grid-area: pChef5;
}
#polaroid-test-chef-6{
    grid-area: pChef6;
}
#polaroid-test-chef-7{
    grid-area: pChef7;
}
#polaroid-test-chef-8{
    grid-area: pChef8;
}
#polaroid-test-chef-9{
    grid-area: pChef9;
}
#polaroid-test-chef-10{
    grid-area: pChef10;
}
#polaroid-test-chef-11{
    grid-area: pChef11;
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
    grid-area: testDesc;
    position: sticky;
    top: var(--padding-outside-nav);
}
#test-koi{
    grid-area: testKoi;
    width: var(--w-koi);
}
#test-message-1{
    grid-area: testMessage1;
}
#test-message-2{
    grid-area: testMessage2;
}
#test-message-3{
    grid-area: testMessage3;
}

#contact-container{
    grid-template-areas:
        'contactDesc contactDesc contactDesc contactDesc contactDesc contactDesc . . . . . .'
        'form form form form form form . . . . . .'
    ;
}
#contact-desc{
    grid-area: contactDesc;
}
#contact-form{
    grid-area: form;
}
</style>