<template>
    <footer class="grid-container">
        <Logo/>

        <InfoHours id="hours"/>
        <InfoLocation id="location"/>
        <InfoPhone id="phone"/>

        <div class="info-container" id="socials">
            <h4>Socials</h4>
            <NuxtLink to="https://www.facebook.com/ShogunSteakNaperville/" target="_blank" aria-label="Facebook" title="Facebook">
                <svg viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="cta-hover" d="M6.66671 10.2498H8.75004L9.58337 6.9165H6.66671V5.24984C6.66671 4.3915 6.66671 3.58317 8.33337 3.58317H9.58337V0.783171C9.31171 0.747337 8.28587 0.666504 7.20254 0.666504C4.94004 0.666504 3.33337 2.04734 3.33337 4.58317V6.9165H0.833374V10.2498H3.33337V17.3332H6.66671V10.2498Z" fill="#B9B8B8"/>
                </svg>
            </NuxtLink>
        </div>

        <div class="credits-container">
            <div class="copyright">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.39996 8.04984C7.44163 7.77484 7.53329 7.53317 7.64996 7.33317C7.89996 6.8665 8.32496 6.62484 8.89996 6.6165C9.27496 6.6165 9.61663 6.78317 9.85829 7.02484C10.0916 7.28317 10.25 7.6415 10.25 7.99984H11.75C11.7333 7.60817 11.6583 7.24984 11.5 6.9165C11.375 6.59984 11.1833 6.3165 10.9333 6.08317C9.72496 4.9665 7.48329 5.12484 6.45829 6.3915C5.38329 7.78317 5.35829 10.2165 6.44996 11.6082C7.45829 12.8498 9.66663 13.0248 10.8666 11.9165C11.125 11.7082 11.3333 11.4498 11.5 11.1498C11.6333 10.8498 11.725 10.5332 11.7333 10.1915H10.25C10.25 10.3665 10.1916 10.5248 10.1166 10.6665C10.0416 10.8248 9.94163 10.9498 9.83329 11.0582C9.55829 11.2748 9.23329 11.3915 8.88329 11.3915C8.58329 11.3832 8.33329 11.3248 8.14163 11.1998C7.92559 11.0784 7.7535 10.8917 7.64996 10.6665C7.23329 9.9165 7.29996 8.87484 7.39996 8.04984ZM8.99996 0.666504C4.41663 0.666504 0.666626 4.4165 0.666626 8.99984C1.10829 20.0582 16.9166 20.0498 17.3333 8.99984C17.3333 4.4165 13.5833 0.666504 8.99996 0.666504ZM8.99996 15.6665C5.32496 15.6665 2.33329 12.6748 2.33329 8.99984C2.69996 0.158171 15.3 0.158171 15.6666 8.99984C15.6666 12.6748 12.675 15.6665 8.99996 15.6665Z" fill="#B9B8B8"/>
                </svg>
                <p>Shogun Japanese Steakhouse Naperville</p>
            </div>

            <div class="made-by">
                <p>Website made with love by 
                    <a id="peu" href="https://peu.dev/" target="_blank">
                        <span class="cta-hover">
                            <span class="peu-green">peu</span>
                            <span class="peu-pink">.</span>
                            <span class="peu-blue">dev</span>
                        </span>
                    </a>
                </p>
            </div>
        </div>

        <div class="samurai">
            <img src="~/assets/imgs/samurai.png" alt="Samurai" title="Samurai">
        </div>
        
    </footer>
    
</template>

<style scoped>
footer{
    background-color: var(--clr-bkg);
    z-index: 1000;
}
/* 
 *
 * PEU.DEV
 *
 */
 .peu-cta{
    cursor: pointer;
}
.peu-green{
    color: var(--clr-peu-green);
}
.peu-blue{
    color: var(--clr-peu-blue);
}
.peu-pink{
    color: var(--clr-peu-pink);
}
.peu-other{
    color: var(--clr-faded-text);
}
#peu{
    font-family: var(--font-family-karla);
    font-size: var(--font-size-p);
    font-weight: unset;

}
.grid-container{
    position: relative;
    grid-template-areas: 
        'logo logo logo logo logo logo logo logo . . . .'
        'location location location location hours hours hours hours . . . .'
        'phone phone phone phone hours hours hours hours . . . .'
        'socials socials socials socials hours hours hours hours . . . .'
        'credits credits credits credits credits credits credits credits samurai samurai samurai samurai'
    ;
    padding-top: 50px;
    border-top: 3px solid var(--clr-text);
}
@media screen and (max-width: 768px){
    .grid-container{
        grid-template-areas: 
            'logo logo logo logo logo logo'
            'hours hours hours hours hours hours'
            'location location location location location location'
            'phone phone phone phone samurai samurai'
            'socials socials socials socials samurai samurai'
            'credits credits credits credits credits credits'
        ;
    }
}   
/*
 * 
 * GENERAL
 *
 */

/*
 * 
 * HOURS
 *
 */
#hours{
    grid-area: hours;
}
/*
 * 
 * INFO CONTAINER
 *
 */
.info-container svg{
    width: var(--svg-size-facebook);
}
#location{
    grid-area: location;
}
#phone{
    grid-area: phone;
}
#socials{
    grid-area: socials;
}
/*
 * 
 * CREDITS CONTAINER
 *
 */
.credits-container{
    grid-area: credits;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-column-gap: 20px;
    grid-template-areas: 
        'copyright copyright copyright copyright made-by made-by made-by made-by'
    ;
    align-items: flex-end;
    padding-bottom: 20px;
}
.copyright{
    display: flex;
    align-items: center;
    gap: 5px;
    grid-area: copyright;
}
.made-by{
    grid-area: made-by;
}
@media screen and (max-width: 768px){
    .credits-container{
        grid-template-areas: 
            'copyright copyright copyright copyright copyright copyright'
            'made-by made-by made-by made-by made-by made-by'
        ;
        grid-column-gap: unset;
        grid-row-gap: 20px;
        justify-items: start;
    }
    .copyright{
        flex-direction: row-reverse;
    }
    .made-by{
        text-align: left;
    }
}
/*
 * 
 * SAMURAI IMG
 *
 */
.samurai{
    grid-area: samurai;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
}
.samurai img {
    width: var(--img-size-samurai);
}

</style>