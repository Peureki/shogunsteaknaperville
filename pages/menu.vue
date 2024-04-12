<template>
    <!--
        *
        *
        * HEADER SECTION
        *
        *
    -->
    <section class="grid-container" id="header-menu">
        <h1 id="header-title">Menu</h1>

        <Polaroid
            id="header-polaroid"
            :src="HeaderChef"
            alt="Hibachi chef cooking with high flames" 
            title="Hibachi chef cooking with high flames"
        />

        <img id="header-koi" :src="Koi1" alt="Koi" title="Koi">

        <img id="header-sakura-flower" :src="SakuraFlower1" alt="Sakura flower" title="Sakura flower">

        <NuxtLink class="cta" id="pdf" to="/Shogun_Menu.pdf" target="_blank">View PDF Menu</NuxtLink>

        <div class="anchor-container">
            <Anchor to="entrees" name="Entrees"/>
            <Anchor to="dinner-for-two" name="Dinner For Two"/>
            <Anchor to="combinations" name="Combinations"/>
            <Anchor to="sushi" name="Sushi"/>
            <Anchor to="extras" name="Extras"/>
            <Anchor to="wine-by-glass" name="Wine by Glass"/>
            <Anchor to="beer-and-sake" name="Beer & Sake"/>
            <Anchor to="house-cocktails" name="House Cocktails"/>
            <Anchor to="soft-drinks" name="Soft Drinks"/>
        </div>
    </section>
    <!--
        *
        *
        * ENTREE SECTION
        *
        *
    -->
    <section class="grid-container" id="entrees-container">
        <MenuList
            id="entrees"
            title="Entrees"
            desc="Dinners include shrimp appetizer, soup, salad, vegetable, steamed rice, noodles (fried rice $2.00 or extra noodles $4.00 additional charge). Extra egg yolk or french garlic sauce $3.00"
            :items="[
                ['Chicken Teriyaki', false, '$19.95'],
                ['Glazed Honey Chicken', '(spicy)', '$19.95'],
                ['Hibachi Sirloin Steak', false, '$24.95'],
                ['Filet Mignon', false, '$28.95'],
                ['Sesame Scallops', false, '$28.95'],
                ['Shrimp', '(egg yolk, french garlic, or hibachi)', '$24.95'],
                ['Salmon Teriyaki', false, '$24.95'],
                ['Calamari Teriyaki', false, '$24.95'],
                ['Vegetable Dinner', false, '$19.95']

            ]"
        />

        <img id="entree-sakura-branch" :src="SakuraBranch1" alt="Sakura branch" title="Sakura branch">
    </section>
    <!--
        *
        *
        * DINNER FOR TWO && COMBINATION SECTION
        *
        *
    -->
    <section class="grid-container" id="combo">
        <MenuList
            id="dinner-for-two"
            title="Dinner For Two"
            desc="Dinners include shrimp appetizer, soup, salad, vegetables, steamed rice, noodles (fried rice $2.00 or extra noodles $4.00 additional charge). Extra egg yolk or french garlic sauce $3.00. Share charge $5.00"
            :items="[
                ['Lobster with Hibachi Sirloin Steak and Shrimp', 'egg yolk, garlic, hibachi, filet mignon upgrade for $5 extra each', '$91.95'],
                ['Lobster and Filet Mignon', false, '$89.95'],
                ['Hibachi Sirloin Steak with Teriyaki Chicken and Shrimp ', 'egg yolk, garlic, hibachi, filet mignon upgrade for $5 extra each', '$71.95'],
                ['Chicken and Shrimp ', false, '$49.95'],
            ]"
        />

        <CombinationList
            id="combinations"
            title="Combinations"
            desc="Dinners include shrimp appetizer, soup, salad, vegetables, steamed rice, noodles (fried rice $2.00 or extra noodles $4.00 additional charge). Extra egg yolk or french garlic sauce $3.00. Share charge $5.00"
            :combo-items="[
                {
                    main: 'Hibachi Sirloin Steak',
                    combo: ['Scallops', 'Shrimp', 'Salmon', 'Chicken', 'Calamari', 'Sushi Combo'], 
                    sideNote: [false, false , false, false, false, false], 
                    price: ['$30.95', '$28.95', '$28.95', '$28.95', '$28.95', '$28.95']
                },
                {
                    main: 'Shogun Chicken',
                    combo: ['Scallops', 'Shrimp', 'Salmon', 'Calamari', 'Sushi Combo'], 
                    sideNote: [false, false , false, false, false], 
                    price: ['$27.95', '$25.95', '$25.95', '$25.95', '$25.95']
                },
                {
                    main: 'Lobster Special',
                    combo: ['Steak', 'Chicken', 'Shrimp', 'Sushi Combo', 'Lobster'], 
                    sideNote: ['Filet Mignon update for $5 extra', false , false, false, false, false], 
                    price: ['$38.95', '$37.95', '$38.95', '$38.95', '$59.95']
                }
            ]"
        />

        <Polaroid
            id="combo-polaroid"
            :src="Food1"
            alt="Hibachi chef cooking with high flames" 
            title="Hibachi chef cooking with high flames"
        />

        <img id="combo-sakura" :src="SakuraFlower1" alt="Sakura flower" title="Sakura flower">

    </section>
    <!--
        *
        *
        * SUSHI && EXTRAS SECTION
        *
        *
    -->
    <section class="grid-container" id="sushi-container">
        <MenuList
            id="sushi"
            title="Sushi Entrees"
            desc="**Additional sushi/sashimi options on order form, please ask your server**"
            :items="[
                ['Sushi 101', '5pcs sushi & 5pcs Shrimp Tempura Roll', '$15.95'],
                ['American Sushi', '3pcs Tuna, 3pcs Salmon, 3pcs Shrimp, & 6 pcs Califonia Roll', '$19.95'],
                ['Shogun Sushi', '9pcs sushi & 6pcs Spicy Tuna Roll', '$19.95'],
                ['Makimono Special', 'California Roll, Tuna Roll, Kappa Roll, 6pcs each', '$14.95'],
                ['Makimono Deluxe', 'California Roll, Spicy Tuna Roll, Shrimp Tempura Roll', '$18.95'],
                ['Una-Ju', 'Slices of broiled eel over rice with special sauce', '$17.95'],
                ['Godzilla Roll', 'Deep fried roll with salmon, broiled eel, sweet egg, cream cheese, avocado topped with spicy mayo and sweet sauce', '$17.95']
            ]"
        />

        <MenuList
            id="extras"
            title="Extras"
            desc="Add-ons for individual meals only"
            :items="[
                ['Special Fried Rice', 'Steak, chicken, or shrimp', '$6.95'],
                ['Noodles', false, '$4.00'],
                ['Vegetables', false, '$4.00'],
                ['Egg Yolk or French Garlic', false, '$3.00'],
                ['Teriyaki Sauce', false, '$3.00'],
                ['Steak', false, '$9.00'],
                ['Chicken', false, '$9.00'],
                ['Filet Mignon', false, '$11.00'],
                ['Shrimp', 'Egg yolk, french garlic, or hibachi', '$9.00'],
                ['Sea Scallops', false, '$10.00'],
                ['Lobster', '8oz', '$28.00'],
            ]"
        />

        <img id="koi-menu" :src="Koi2" alt="Koi" title="Koi">

    </section>

    <!--
        *
        *
        * WINE & BEER SECTION
        *
        *
    -->
    <section class="grid-container" id="wine-and-beer">
        <MenuList
            id="wine-by-glass"
            title="Wine By Glass"
            :items="[
                ['Plum Wine', false, '$8.00'],
                ['Chardonay', false, '$8.00'],
                ['Pinot Grigio', false, '$8.00'],
                ['Red Wine', false, '$8.00']
            ]"
        />

        <MenuList
            id="beer-and-sake"
            title="Beer and Sake"
            :items="[
                ['Sapporo', 'Large', '$9.00'],
                ['Import Beer', 'Kirin, Corona, Heineken', '$6.00'],
                ['Domestic Beer', 'Miller Lite, Bud Light, Coors', '$5.00'],
                ['Sake', 'Small', '$5.00'],
                ['Sake', 'Large', '$9.00']
            ]"
        />

        <Polaroid
            id="wine-and-beer-polaroid"
            :src="Onion1"
            alt="Hibachi chef cooking with high flames" 
            title="Hibachi chef cooking with high flames"
        />

        <img id="wine-and-beer-sakura-branch" :src="SakuraBranch3" alt="Sakura branch" title="Sakura branch">

    </section>

    <!--
        *
        *
        * SOFT DRINKS & COCKTAILS SECTION
        *
        *
    -->
    <section class="grid-container" id="drinks-and-cocktails">
        <MenuList
            id="house-cocktails"
            title="House Cocktail"
            :items="[
                ['Margarita', false, '$8.00'],
                ['Mai Tai', false, '$8.00'],
                ['Pina Colada', false, '$8.00'],
                ['Strawberry Daiquiri', false, '$8.00'],
                ['Midori Colada', false, '$9.00'],
                ['Long Island', false, '$11.00'],
                ['Liquors', 'Gin, Whiskey, Vodka, Tequila', '$9.00']
            ]"
        />

        <MenuList
            id="soft-drinks"
            title="Soft Drinks"
            :items="[
                ['Can Soda', 'Dr. Pepper, Cherry Coke, Mountain Dew', '$2.00'],
                ['Fountain Soda - Free Refills', 'Coke, Diet Coke, Sprite, Root Beer, Iced Tea *unsweetened*, Lemonade', '$3.00'],
                ['Hot Tea - Free Refills', false, '$2.00'],
                ['Ramune', 'Japanese 7Up', '$3.00'],
                ['Juices', 'Orange, Pineapple, Apple', '$3.00'],
                ['Chocolate Milk', false, '$3.00'],
                ['Kiddie Cocktail', false, '$3.00'],
            ]"
        />

        

    </section>
    
</template>

<script setup>
import HeaderChef from "~/assets/imgs/chef-5.webp"

import Food1 from '~/assets/imgs/food-1.webp'
import Onion1 from '~/assets/imgs/onion-1.webp'

import Koi1 from "~/assets/svgs/koi-1.svg"
import Koi2 from "~/assets/svgs/koi-2.svg"
import SakuraFlower1 from "~/assets/svgs/sakura-flower-1.svg"
import SakuraBranch1 from "~/assets/svgs/sakura-1.svg"
import SakuraBranch3 from "~/assets/svgs/sakura-3.svg"

import Logo1 from '~/assets/imgs/logo-1.webp'

const seoTitle = 'Menu - Shogun Japanese Steakhouse Naperville',
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
#header-menu{
    padding-top: var(--padding-outside-nav);
    grid-template-areas: 
        'title title title title title title . . polaroid polaroid polaroid polaroid'
        '. . . . . . . . polaroid polaroid polaroid polaroid'
        'anchor anchor anchor anchor koi koi . . polaroid polaroid polaroid polaroid'
        'anchor anchor anchor anchor koi koi . . . . . .'
        'anchor anchor anchor anchor koi koi . . . . . .'
        'pdf pdf pdf pdf . . . sakuraFlower . . . . '
    ;
}
#header-title{
    grid-area: title;
}
#header-polaroid{
    grid-area: polaroid;
}
#header-koi{
    grid-area: koi;
    width: var(--w-koi);
}
#header-sakura-flower{
    grid-area: sakuraFlower;
    width: var(--w-sakura-flower);
}
#pdf{
    grid-area: pdf;
    font-size: var(--font-size-h5);
}
.anchor-container{
    grid-area: anchor;
}
/*
 *
 * MOBILE HEADER SECTION 
 *
 */
@media screen and (max-width: 768px){
    #header-menu{
        grid-template-areas: 
           'title title title title title title'
           'polaroid polaroid polaroid polaroid . .'
           'polaroid polaroid polaroid polaroid . sakuraFlower'
           'anchor anchor anchor anchor anchor anchor'
           'pdf pdf pdf pdf pdf pdf'
        ;
    }
    #header-polaroid{
        height: 40vw;
    }
    #header-koi{
        display: none;
        grid-area: unset;
    }
}
/*
 *
 * ENTREE SECTION 
 *
 */
#entrees-container{
    grid-template-areas: 
        'menu menu menu menu menu menu sakura sakura sakura sakura sakura sakura'
    ;
}
#entrees{
    grid-area: menu;
}
#entree-sakura-branch{
    width: var(--w-sakura-branch);
    transform: rotate(120deg);
    position: absolute;
    right: calc(var(--padding-page) * -1);
    z-index: -1;
    grid-area: sakura;
}
/*
 *
 * MOBILE ENTREE SECTION 
 *
 */
@media screen and (max-width: 768px){
    #entrees-container{
        grid-template-areas: 
            'menu menu menu menu menu menu'
        ;
    }
    #entree-sakura-branch{
        grid-area: unset;
        display: none;
    }
}
/*
 *
 * COMBO SECTION 
 *
 */
#combo{
    grid-template-areas: 
        'forTwo forTwo forTwo forTwo forTwo forTwo combo combo combo combo combo combo'
        'polaroid polaroid polaroid polaroid . . combo combo combo combo combo combo'
        'polaroid polaroid polaroid polaroid sakura . combo combo combo combo combo combo'
    ;
}
#dinner-for-two{
    grid-area: forTwo;
}
#combinations{
    grid-area: combo;
}
#combo-polaroid{
    grid-area: polaroid;
    height: 30vw;
}
#combo-sakura{
    grid-area: sakura;
    width: var(--w-sakura-flower);
}
@media screen and (max-width: 768px){
    #combo{
        grid-template-areas: 
            'forTwo forTwo forTwo forTwo forTwo forTwo'
            'polaroid polaroid polaroid . . sakura'
            'combo combo combo combo combo combo'
        ;
    }
}
/*
 *
 * SUSHI SECTION 
 *
 */
#sushi-container{
    grid-template-areas: 
        'sushi sushi sushi sushi sushi sushi extras extras extras extras extras extras'
        'koi koi . . . . extras extras extras extras extras extras'
    ;   
}
#sushi{
    grid-area: sushi;
}
#extras{
    grid-area: extras;
}
#koi-menu{
    grid-area: koi;
    width: var(--w-koi);
}
/*
 *
 * MOBILE SUSHI SECTION 
 *
 */
@media screen and (max-width: 768px){
    #sushi-container{
        grid-template-areas: 
            'sushi sushi sushi sushi sushi sushi'
            '. . . . . koi'
            'extras extras extras extras extras extras'
        ;
    }
}
/*
 *
 * WINE AND BEER SECTION 
 *
 */
#wine-and-beer{
    grid-template-areas: 
        'wine wine wine wine wine wine beer beer beer beer beer beer'
        'polaroid polaroid polaroid polaroid . . beer beer beer beer beer beer'
        'polaroid polaroid polaroid polaroid . . . . . . . sakura'
    ;
}
#wine-by-glass{
    grid-area: wine;
}
#beer-and-sake{
    grid-area: beer;
}
#wine-and-beer-polaroid{
    grid-area: polaroid;
    height: 30vw;
}
#wine-and-beer-sakura-branch{
    grid-area: sakura;
    position: absolute;
    right: calc(var(--padding-page) * -1);
    width: var(--w-sakura-branch-small);
}
/*
 *
 * MOBILE WINE AND BEER SECTION 
 *
 */
@media screen and (max-width: 768px){
    #wine-and-beer{
        grid-template-areas: 
            'wine wine wine wine wine wine'
            'polaroid polaroid polaroid . . .'
            'beer beer beer beer beer beer'
            '. . . . . sakura'
        ;
    }
}
/*
 *
 * SOFT DRINKS & COCKTAILS SECTION 
 *
 */
#drinks-and-cocktails{
    grid-template-areas: 
        'cocktail cocktail cocktail cocktail cocktail cocktail drinks drinks drinks drinks drinks drinks '
    ;
}
#soft-drinks{
    grid-area: drinks;
}
#house-cocktails{
    grid-area: cocktail;
}
@media screen and (max-width: 768px){
    #drinks-and-cocktails{
        grid-template-areas: 
            'cocktail cocktail cocktail cocktail cocktail cocktail'
            'drinks drinks drinks drinks drinks drinks' 
        ;
    }
}
</style>