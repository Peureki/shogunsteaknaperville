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
                    <NuxtLink to="/">
                        <svg id="facebook" width="12" height="25" viewBox="0 0 16 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.1667 18.375H15.125L16.7084 12.0417H11.1667V8.875C11.1667 7.24416 11.1667 5.70833 14.3334 5.70833H16.7084V0.388331C16.1922 0.320248 14.2431 0.166664 12.1848 0.166664C7.88604 0.166664 4.83337 2.79025 4.83337 7.60833V12.0417H0.083374V18.375H4.83337V31.8333H11.1667V18.375Z" fill="white"/>
                        </svg>
                    </NuxtLink>
                </li>
            </ul>
            
            <button class="cta">
                <div class="cta-phone-container">
                    <NuxtLink to="/">Call to Reserve</NuxtLink> 
                    
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
            <img src="~/assets/svgs/phone.svg" alt="Phone" title="Phone">
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