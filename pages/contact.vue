<template>
    <section class="grid-container" id="header">
        <h1 id="header-title">Contact</h1>

        <Polaroid
            id="header-polaroid"
            :src="Front"
            alt="Hibachi Chef"
            title="Hibachi Chef"
            lazy="eager"
        />

        <img id="header-sakura-flower" :src="SakuraFlower" alt="Sakura flower" title="Sakura flower">
    </section>

    <section class="grid-container" id="contact">
        <div id="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d884.8285530699818!2d-88.20464652908153!3d41.7594181340779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880ef8315ff8989d%3A0x1eb7d7aaa18be068!2sShogun%20Japanese%20Steakhouse%20Naperville!5e0!3m2!1sen!2sus!4v1712359439741!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <Description 
            id="contact-desc"
            title="Connect with us"
            :description="['We\'d love to hear from you! Whether you have a question or feedback, please fill out the form below. Our team at Shogun Japanese Steakhouse is dedicated to providing exceptional service and ensuring your dining experience is memorable. Thank you for checking out our restaurant!']"
        />

        <ContactForm id="contact-form"/>

        <img id="contact-sakura-branch" :src="SakuraBranch" alt="Sakura branch" title="Sakura branch">
    </section>
    
</template>

<script setup>
import Chef from '~/assets/imgs/chef-5.webp'
import Front from '~/assets/imgs/front-1.webp'
import SakuraFlower from '~/assets/svgs/sakura-flower-2.svg'
import SakuraBranch from '~/assets/svgs/sakura-1.svg'

import Logo1 from '~/assets/imgs/logo-1.webp'

const seoTitle = 'Contact - Shogun Japanese Steakhouse Naperville',
    seoDescription = 'Contact us today to share your questions or feedback! At Shogun Japanese Steakhouse, we\'re committed to delivering outstanding service and creating unforgettable dining moments for you. Thank you for exploring our hibachi and sushi restaurant';

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

img{
    max-width:none;
    background:none;
    font-size: inherit;
    font-weight:inherit;
}
#header{
    padding-top: var(--padding-outside-nav);
    grid-template-areas: 
        'title title title title title title title title polaroid polaroid polaroid polaroid'
        'sakuraFlower . . . . . . . polaroid polaroid polaroid polaroid'
    ;
}
#header-title{
    grid-area: title;
}
#header-polaroid{
    grid-area: polaroid;
    height: 25vw;
}
#header-sakura-flower{
    grid-area: sakuraFlower;
    width: var(--w-sakura-flower);
}
@media screen and (max-width: 768px){
    #header{
        grid-template-areas: 
            'title title title title title title'
            'polaroid polaroid polaroid polaroid . sakuraFlower'
        ;
    }
    #header-polaroid{
        height: var(--w-polaroid);
    }
}

#contact{
    grid-template-areas:
        'map map map map map map . desc desc desc desc desc'
        'map map map map map map . form form form form form'
        'sakura . . . . . . form form form form form'
    ;
}
#map{
    grid-area: map;
    height: 40vw;
}
#map iframe{
    width: 100%;
    height: 100%;
}
#contact-desc{
    grid-area: desc;
}
#contact-form{
    grid-area: form;
}
#contact-sakura-branch{
    grid-area: sakura;
    position: absolute;
    top: -10%;
    left: calc(var(--padding-page) * -1);
    width: var(--w-sakura-branch);
    z-index: -1;
}
@media screen and (max-width: 768px){
    #contact{
        grid-template-areas: 
            'map map map map map map'
            'desc desc desc desc desc desc'
            'form form form form form form'
            '. . . . . sakura'
        ;
    }
    #map{
        height: 60vw;
    }
    #contact-sakura-branch{
        top: 50%;
        right: calc(var(--padding-page) * -1);
        left: unset;
        transform: rotate(180deg) translateY(50%);
    }
}

</style>