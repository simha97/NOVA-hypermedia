// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/general.css", "~/assets/css/myriad.css"],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  modules: ['@nuxtjs/supabase'],
  ssr: true,
});
