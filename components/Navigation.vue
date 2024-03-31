<template>
    <header>
        <nav class="desktop">
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/menu">Menu</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                <li>
                    <NuxtLink to="/">
                        <svg width="12" height="25" viewBox="0 0 16 30" fill="none" xmlns="http://www.w3.org/2000/svg">
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

        <nav class="mobile">
            <NuxtLink to="/menu">Menu</NuxtLink>
            <img src="~/assets/svgs/phone.svg" alt="Phone" title="Phone">
            <img src="~/assets/svgs/hamburger.svg" alt="Hamburger" title="Hamburger"
        </nav>
    </header>
</template>

<style scoped>
nav.desktop{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--clr-bkg);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--clr-border-fade);
    padding-inline: var(--padding-page);
    padding-block: var(--padding-block-nav);
    z-index: 1000;
}
nav.mobile{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: var(--padding-page);
    padding-block: var(--padding-block-nav-mobile);
}
@media screen and (max-width: 768px){
    nav.desktop{
        display: none;
    }
    nav.mobile{
        display: flex;
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