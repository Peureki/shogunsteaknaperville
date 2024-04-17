import { VueReCaptcha } from 'vue-recaptcha-v3';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueReCaptcha, {
        siteKey: '6Ld1fL4pAAAAAOcVpWOisHfy1bavRXwcir6plC8e',
        loaderOptions: {
            autoHideBadge: true,
        }
    });
});