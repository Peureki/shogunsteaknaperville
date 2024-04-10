<template>
    <header>
        <!--
            *
            *   DESKTOP NAV
            *
        -->
        <nav class="desktop">
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/menu">Menu</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                <li>
                    <NuxtLink to="https://www.facebook.com/ShogunSteakNaperville/" target="_blank">
                        <svg id="facebook" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66671 10.2498H8.75004L9.58337 6.9165H6.66671V5.24984C6.66671 4.3915 6.66671 3.58317 8.33337 3.58317H9.58337V0.783171C9.31171 0.747337 8.28587 0.666504 7.20254 0.666504C4.94004 0.666504 3.33337 2.04734 3.33337 4.58317V6.9165H0.833374V10.2498H3.33337V17.3332H6.66671V10.2498Z" fill="var(--clr-text)"/>
                        </svg>
                    </NuxtLink>
                </li>
            </ul>
            
            <button class="cta">
                <div class="cta-phone-container">
                    <a :href="`tel:+1${phone}`">Call to Reserve</a> 
                </div>
            </button>
        </nav>
        <!--
            *
            *   MOBILE NAV
            *
        -->
        <nav class="mobile">
            <NuxtLink to="/menu">Menu</NuxtLink>
            <a :href="`tel:+1${phone}`">
                <img src="~/assets/svgs/phone.svg" alt="Phone" title="Phone">
            </a>
        </nav>
        <!--
            *
            *   HAMBURGER 
            *   TRIGGERS BASED ON TOGGLE mobileNavToggle
            *
        -->
        <div @click="mobileNavToggle = !mobileNavToggle" class="hamburger-container">
            <span :style="{transform: topBun }"></span>
            <span :style="{backgroundColor: middleBun}"></span>
            <span :style="{transform: bottomBun}"></span>
        </div>
        <!--
            *
            *   NAV MODAL WHEN mobileNavToggle == true
            *
        -->
        <Transition name="fade">
            <MobileNavPopup 
                v-if="mobileNavToggle"
                @closeNav="mobileNavToggle = !mobileNavToggle"
            />
        </Transition>
        
    </header>
</template>

<script setup>
// Toggle when users click on the mobile red cta to open up the full nav menu
const mobileNavToggle = ref(false); 
// When mobileNavToggle is true/false => then animate the hamburger to an X and vise versa
const topBun = computed(() => {
    return mobileNavToggle.value ? `rotate(45deg) translate(6px, 7px)` : `unset`;
}),
    middleBun = computed(() => {
        return mobileNavToggle.value ? `var(--clr-cta-bkg)` : `var(--clr-text)`;
    }),
    bottomBun = computed(() => {
        return mobileNavToggle.value ? `rotate(-45deg) translate(6px, -7px)` : 'unset';
    })

let phone = ref('6304160871'),
    formattedPhone = formatPhoneNumber(phone.value);

</script>

<style scoped>
nav.desktop, nav.mobile{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--clr-bkg);
    display: flex;
    align-items: center;
    gap: 50px;
    border-bottom: 1px solid var(--clr-border-fade);
    padding-inline: var(--padding-page);
    padding-block: var(--padding-block-nav);
    z-index: 1001;
}
nav.desktop{
    justify-content: space-between;
}
nav.mobile img{
    width: var(--svg-size-nav);
    cursor: pointer;
}
.hamburger-container{
    position: fixed;
    top: calc(var(--padding-block-nav) + 5px);
    right: var(--padding-page);
    display: flex;
    flex-direction: column;
    gap: 5px;
    z-index: 10002;
    cursor: pointer;
}
.hamburger-container span{
    width: 30px;
    height: 4px;
    background-color: var(--clr-text);
    transition: var(--transition-cta);
}

.hamburger-container::before{
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    width: var(--cta-circle-size);
    height: var(--cta-circle-size);
    border-radius: var(--cta-circle-size);
    background-color: var(--clr-cta-bkg);
    transition: var(--transition-cta);
}
#facebook{
    width: var(--svg-size-facebook);
    transform: translateY(5px);
}
/*
 *
 * DESKTOP
 *
 */
@media screen and (min-width: 768px){
    nav.desktop{
        display: flex;
    }
    nav.mobile, .hamburger-container{
        display: none;
    }
}
/*
 *
 * MOBILE
 *
 */
 @media screen and (max-width: 768px){
    nav.desktop{
        display: none;
    }
    nav.mobile{
        display: flex;
    }
    nav.mobile a{
        font-size: var(--font-size-h3);
    }
}

ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    gap: 50px;
}
.cta-phone-container{
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    position: relative;
    gap: 20px;
}
.cta::before{
    width: clamp(2rem, 4vw, 5rem);
    height: clamp(2rem, 4vw, 5rem);
}
.cta:hover::before {
    width: 100%; 
}
.cta-phone-container > a {
    font-size: var(--font-size-nav);
}
.cta-phone-container > .phone {
    font-size: var(--font-size-p);
}


</style>