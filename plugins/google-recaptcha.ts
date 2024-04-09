import { VueReCaptcha } from 'vue-recaptcha-v3';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueReCaptcha, {
        siteKey: '6Le6_LUpAAAAAKfoaNmXzB0mJGFKJjfAj6JVCIo-',
        loaderOptions: {
            autoHideBadge: true,
        }
    });
});