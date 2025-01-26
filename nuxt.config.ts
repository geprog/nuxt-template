// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-27',
  devtools: { enabled: true },
  telemetry: false,
  ssr: false,
  modules: ['@nuxt/ui', '@nuxtjs/i18n'],
  app: {
    head: {
      title: 'Nuxt Template',
      titleTemplate: '%s',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  typescript: {
    strict: true,
  },
  i18n: {
    locales: [
      { code: 'en', file: 'en.json' },
      { code: 'de', file: 'de.json' },
    ],
    strategy: 'no_prefix',
    defaultLocale: 'en',
  },
});
