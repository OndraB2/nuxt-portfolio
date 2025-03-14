// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    srcDir: 'src/',
    runtimeConfig: {
        public: {
            githubToken: '',
            githubUser: '',
        }
    },
    css: ['~/assets/scss/main.scss']
})
