// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/css/general.css',
    '~/assets/css/myriad.css',
    '~/assets/css/helvetica.css',
  ],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  modules: ['@nuxtjs/supabase'],
  ssr: true,
  app: {
    head: {
      title: 'NOVA',
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
      meta: [
        {
          charset: 'UTF-8',
        },
        {
          name: 'description',
          content:
            'Discover how our venture capital firm provides funding and support for innovative startups. We help entrepreneurs turn their ideas into successful businesses through strategic investments and mentorship.',
        },
        {
          name: 'keywords',
          content:
            'venture capital, startups, funding, investment, entrepreneurship, innovation, funding solutions, startup financing, mentorship, business growth',
        },
        {
          name: 'author',
          content:
            'Daniele Cicala, Daniele Sinigaglia, Simon Hallak, Xiyuan Hu',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0',
        },
      ],
    },
  },
});
