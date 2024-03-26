<template>
    <div class="grid-container">
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

        <!-- <Polaroid
            id="polaroid-3"
            :src="Koi1"
            alt="Hibachi chef cooking with high flames" 
            title="Hibachi chef cooking with high flames"
        /> -->

        <Logo/>
        
        
    </div>

    <div class="merp"></div>
</template>

<script setup>
import Chef1 from '~/assets/imgs/chef-1.jpg'
import Chef2 from '~/assets/imgs/chef-2.png'
import Koi1 from '~/assets/svgs/koi-1.svg'

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
.grid-container{
    height: 100dvh; 
    padding-top: calc(var(--font-size-nav) + var(--font-size-p) + 75px);
    grid-template-rows: 2fr 1.5fr;
    grid-template-areas: 
        'one one one one two two two two'
        'logo logo logo logo logo logo logo logo'
    ;
}
#polaroid-1{
    grid-area: one;
}
#polaroid-2{
    grid-area: two;
}


.merp { 
    height: 100vh; 
}

</style>